#!/usr/bin/env bun

// biome-ignore lint/correctness/noNodejsModules: CLI script needs Node.js modules
import { readdir } from "node:fs/promises";
// biome-ignore lint/correctness/noNodejsModules: CLI script needs Node.js modules
import { join } from "node:path";
// biome-ignore lint/correctness/noNodejsModules: CLI script needs Node.js modules
import { createHash } from "node:crypto";
import { createClient } from "@nhost/nhost-js";

const nhost = createClient({
	subdomain: "local",
	region: "local",
});

const adminSecret =
	process.env.HASURA_GRAPHQL_ADMIN_SECRET || "nhost-admin-secret";

function generateConsistentUUID(filename: string): string {
	const hash = createHash("sha256").update(filename).digest("hex");
	const uuid = [
		hash.slice(0, 8),
		hash.slice(8, 12),
		`4${hash.slice(13, 16)}`,
		((Number.parseInt(hash.slice(16, 17), 16) & 0x3) | 0x8).toString(16) +
			hash.slice(17, 20),
		hash.slice(20, 32),
	].join("-");
	return uuid;
}

// Department name to ID mapping
const DEPARTMENTS = {
	hr: "2db9de0a-b9ba-416e-8619-783a399ae2b3",
	eng: "023d4410-715e-4675-96a5-a58fd50ef33c",
	mkt: "dcd52518-58d0-4834-9683-ba6dee33833f",
	sales: "ffd095c2-9745-43d9-b133-7e8d847e8371",
	fin: "24e9b8db-acf8-439f-9d63-7f83de523fb3",
	ops: "fd1e6bba-c292-4b2f-872e-ae16146cdd82",
};

async function uploadFile(
	filePath: string,
	fileName: string,
): Promise<boolean> {
	const fileId = generateConsistentUUID(fileName);

	try {
		// biome-ignore lint/correctness/noUndeclaredVariables: Bun global
		const file = Bun.file(filePath);
		const fileBuffer = await file.arrayBuffer();
		const uploadFile = new File([fileBuffer], fileName, {
			type: "application/pdf",
		});

		await nhost.storage.uploadFiles(
			{
				"file[]": [uploadFile],
				"metadata[]": [{ id: fileId, name: fileName }],
				"bucket-id": "default",
			},
			{
				headers: { "x-hasura-admin-secret": adminSecret },
			},
		);

		// biome-ignore lint/suspicious/noConsole: CLI script needs console output
		console.log(`✅ Uploaded: ${fileName} -> ${fileId}`);
		return true;
	} catch (error) {
		if (error instanceof Error && error.message.includes("duplicate key")) {
			// biome-ignore lint/suspicious/noConsole: CLI script needs console output
			console.log(`✅ Already exists: ${fileName} -> ${fileId}`);
			return true;
		}
		// biome-ignore lint/suspicious/noConsole: CLI script needs console output
		console.error(`❌ Upload failed for ${fileName}: ${error}`);
		return false;
	}
}

async function assignFileToDepartments(fileName: string): Promise<boolean> {
	const fileId = generateConsistentUUID(fileName);

	// Extract department from filename (dept-eng-001.pdf -> eng)
	const deptMatch = fileName.match(/dept-(\w+)-/);
	if (!deptMatch) {
		// biome-ignore lint/suspicious/noConsole: CLI script needs console output
		console.log(
			`⚠️ Skipping assignment for ${fileName}: cannot extract department`,
		);
		return false;
	}

	const deptCode = deptMatch[1];
	const departmentId = DEPARTMENTS[deptCode as keyof typeof DEPARTMENTS];
	const financeId = DEPARTMENTS.fin;

	if (!departmentId) {
		// biome-ignore lint/suspicious/noConsole: CLI script needs console output
		console.log(
			`⚠️ Skipping assignment for ${fileName}: unknown department ${deptCode}`,
		);
		return false;
	}

	try {
		// 1. Get a random user from the department
		const getUserQuery = `
			query GetDepartmentUser($departmentId: uuid!) {
				user_departments(
					where: { department_id: { _eq: $departmentId }, is_active: { _eq: true } }
					limit: 1
				) {
					user_id
				}
			}
		`;

		const userResponse = await nhost.graphql.post(
			{
				query: getUserQuery,
				variables: { departmentId },
			},
			{
				headers: { "x-hasura-admin-secret": adminSecret },
			},
		);

		if (userResponse.body.errors) {
			throw new Error(
				`GraphQL errors: ${JSON.stringify(userResponse.body.errors)}`,
			);
		}

		const users = userResponse.body.data?.user_departments;
		if (!users || users.length === 0) {
			// biome-ignore lint/suspicious/noConsole: CLI script needs console output
			console.log(`⚠️ No users found in department ${deptCode}`);
			return false;
		}

		const userId = users[0].user_id;

		// 2. Update file's uploaded_by_user_id
		const updateFileQuery = `
			mutation UpdateFileUploader($fileId: uuid!, $userId: uuid!) {
				updateFile(pk_columns: { id: $fileId }, _set: { uploadedByUserId: $userId }) {
					id
					uploadedByUserId
				}
			}
		`;

		const updateResponse = await nhost.graphql.post(
			{
				query: updateFileQuery,
				variables: { fileId, userId },
			},
			{
				headers: { "x-hasura-admin-secret": adminSecret },
			},
		);

		if (updateResponse.body.errors) {
			throw new Error(
				`Update file errors: ${JSON.stringify(updateResponse.body.errors)}`,
			);
		}

		// 3. Assign file to originating department
		const assignToDeptQuery = `
			mutation AssignFileToDepartment($fileId: uuid!, $departmentId: uuid!, $description: String!) {
				insert_department_files_one(object: {
					file_id: $fileId
					department_id: $departmentId
					description: $description
				}) {
					id
				}
			}
		`;

		await nhost.graphql.post(
			{
				query: assignToDeptQuery,
				variables: {
					fileId,
					departmentId,
					description: `Invoice file for ${deptCode.toUpperCase()} department`,
				},
			},
			{
				headers: { "x-hasura-admin-secret": adminSecret },
			},
		);

		// 4. Assign file to finance department (if not already finance)
		if (departmentId !== financeId) {
			await nhost.graphql.post(
				{
					query: assignToDeptQuery,
					variables: {
						fileId,
						departmentId: financeId,
						description: `Invoice file from ${deptCode.toUpperCase()} department`,
					},
				},
				{
					headers: { "x-hasura-admin-secret": adminSecret },
				},
			);
		}

		// biome-ignore lint/suspicious/noConsole: CLI script needs console output
		console.log(
			`✅ Assigned: ${fileName} -> ${deptCode.toUpperCase()}${departmentId !== financeId ? " + FINANCE" : ""}`,
		);
		return true;
	} catch (error) {
		if (error instanceof Error && error.message.includes("duplicate key")) {
			// biome-ignore lint/suspicious/noConsole: CLI script needs console output
			console.log(`✅ Already assigned: ${fileName}`);
			return true;
		}
		// biome-ignore lint/suspicious/noConsole: CLI script needs console output
		console.error(`❌ Assignment failed for ${fileName}: ${error}`);
		return false;
	}
}

async function setupInvoiceFiles() {
	const invoicesDir = join(import.meta.dir);
	const files = await readdir(invoicesDir);
	const pdfFiles = files.filter((file) => file.endsWith(".pdf"));

	// biome-ignore lint/suspicious/noConsole: CLI script needs console output
	console.log(`📄 Found ${pdfFiles.length} PDF files to process`);
	// biome-ignore lint/suspicious/noConsole: CLI script needs console output
	console.log("🚀 Starting upload and assignment process...\n");

	let uploadedCount = 0;
	let assignedCount = 0;

	for (const pdfFile of pdfFiles) {
		const filePath = join(invoicesDir, pdfFile);

		// biome-ignore lint/suspicious/noConsole: CLI script needs console output
		console.log(`Processing: ${pdfFile}`);

		// Step 1: Upload file
		const uploadSuccess = await uploadFile(filePath, pdfFile);
		if (uploadSuccess) {
			uploadedCount++;
		}

		// Step 2: Assign to departments (only if upload was successful)
		if (uploadSuccess) {
			const assignSuccess = await assignFileToDepartments(pdfFile);
			if (assignSuccess) {
				assignedCount++;
			}
		}

		// biome-ignore lint/suspicious/noConsole: CLI script needs console output
		console.log(""); // Empty line for readability
	}

	// biome-ignore lint/suspicious/noConsole: CLI script needs console output
	console.log("📊 Summary:");
	// biome-ignore lint/suspicious/noConsole: CLI script needs console output
	console.log(`   • Files processed: ${pdfFiles.length}`);
	// biome-ignore lint/suspicious/noConsole: CLI script needs console output
	console.log(`   • Files uploaded: ${uploadedCount}`);
	// biome-ignore lint/suspicious/noConsole: CLI script needs console output
	console.log(`   • Files assigned: ${assignedCount}`);
	// biome-ignore lint/suspicious/noConsole: CLI script needs console output
	console.log("✨ Setup complete!");
}

if (import.meta.main) {
	setupInvoiceFiles().catch(console.error);
}
