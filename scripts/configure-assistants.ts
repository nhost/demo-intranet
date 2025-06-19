#!/usr/bin/env bun

import { createClient } from "@nhost/nhost-js";

// Configuration
const NHOST_SUBDOMAIN = process.env.NHOST_SUBDOMAIN || "local";
const NHOST_REGION = process.env.NHOST_REGION || "local";
const NHOST_ADMIN_SECRET =
	process.env.NHOST_ADMIN_SECRET || "nhost-admin-secret";

// Initialize Nhost client
const nhost = createClient({
	subdomain: NHOST_SUBDOMAIN,
	region: NHOST_REGION,
});

// File store configuration data
const fileStoreData = {
	name: "files",
	buckets: ["default"],
};

// Assistant data to be inserted via Graphite GraphQL API
const assistantData = {
	name: "intranet-assistant",
	description: "Intranet Assistant",
	instructions:
		"You are a helpful assistant for Acme Corp.'s intranet. You have access to the knowledge base and files uploaded by the various departments. Provide useful information making sure to answer based on available data in the intranet.",
	model: "gpt-4.1-2025-04-14",
	graphql: [
		{
			name: "search_kb",
			description: "Use this to search the intranet's knowledge base.",
			query:
				"query SearchKBEntries($query: String!) {\n\tgraphiteSearchKbEntries(\n    args: {\n      query: $query,\n      amount: 5,\n      maxdistance: 0.5,\n    }\n  ) {\n    title\n    summary\n    content\n  }\n}",
			arguments: [
				{
					name: "query",
					description:
						"This is the query to search. Under the hood this is a query leveraging embeddings and pgvector",
					type: "string",
					required: true,
				},
			],
		},
	],
	// fileStores will be populated after creating the file store
};

async function insertFileStore(): Promise<{ id: string }> {
	try {
		// Use Graphite's insertFileStore mutation to create the file store
		const response = await nhost.graphql.post(
			{
				query: `
				mutation InsertFileStore($object: graphiteFileStoreInput!) {
					graphite {
						insertFileStore(object: $object) {
							id
							name
							buckets
						}
					}
				}
			`,
				variables: {
					object: fileStoreData,
				},
			},
			{
				headers: { "x-hasura-admin-secret": NHOST_ADMIN_SECRET },
			},
		);

		if (response.body.errors) {
			console.error("GraphQL file store creation error:", response.body.errors);
			throw new Error(
				`File store creation failed: ${JSON.stringify(response.body.errors)}`,
			);
		}

		const fileStore = response.body.data.graphite.insertFileStore;
		console.log("✅ File store created successfully:", fileStore.id);
		return fileStore;
	} catch (error) {
		console.error("Error creating file store:", error);
		throw error;
	}
}

async function insertAssistantData(
	fileStoreId: string,
): Promise<{ assistantID: string }> {
	try {
		// Use Graphite's insertAssistant mutation to create the assistant
		const response = await nhost.graphql.post(
			{
				query: `
				mutation InsertAssistant($object: graphiteAssistantInput!) {
					graphite {
						insertAssistant(object: $object) {
							assistantID
							name
							description
							instructions
							model
						}
					}
				}
			`,
				variables: {
					object: {
						...assistantData,
						fileStores: [fileStoreId],
					},
				},
			},
			{
				headers: { "x-hasura-admin-secret": NHOST_ADMIN_SECRET },
			},
		);

		if (response.body.errors) {
			console.error("GraphQL assistant creation error:", response.body.errors);
			throw new Error(
				`Assistant creation failed: ${JSON.stringify(response.body.errors)}`,
			);
		}

		const assistant = response.body.data.graphite.insertAssistant;
		console.log("✅ Assistant created successfully:", assistant.assistantID);
		return assistant;
	} catch (error) {
		console.error("Error creating assistant:", error);
		throw error;
	}
}

async function writeAssistantIdToEnv(assistantId: string): Promise<void> {
	try {
		const envPath = ".env.local";
		let envContent = "";

		// Try to read existing .env.local file
		try {
			envContent = await Bun.file(envPath).text();
		} catch {
			// File doesn't exist, will create new one
		}

		// Check if BUN_PUBLIC_ASSISTANT_ID already exists
		const lines = envContent.split("\n");
		const assistantIdLineIndex = lines.findIndex((line) =>
			line.startsWith("BUN_PUBLIC_ASSISTANT_ID="),
		);

		if (assistantIdLineIndex !== -1) {
			// Update existing line
			lines[assistantIdLineIndex] = `BUN_PUBLIC_ASSISTANT_ID=${assistantId}`;
		} else {
			// Add new line
			lines.push(`BUN_PUBLIC_ASSISTANT_ID=${assistantId}`);
		}

		// Write back to file
		await Bun.write(envPath, lines.join("\n"));
		console.log(`✅ Assistant ID written to ${envPath}`);
	} catch (error) {
		console.error("Error writing assistant ID to .env.local:", error);
		throw error;
	}
}

async function runMigration(): Promise<void> {
	try {
		console.log("🚀 Starting Graphite seed data migration...");

		// First, create the file store
		console.log("📝 Creating file store...");
		const fileStore = await insertFileStore();

		// Then, create the assistant with the file store
		console.log("📝 Creating assistant...");
		const assistant = await insertAssistantData(fileStore.id);

		// Write assistant ID to .env file
		console.log("📝 Writing assistant ID to .env file...");
		await writeAssistantIdToEnv(assistant.assistantID);

		console.log("✅ Migration completed successfully!");
		console.log(`📋 Assistant ID: ${assistant.assistantID}`);
		console.log(`📋 File Store ID: ${fileStore.id}`);
	} catch (error) {
		console.error("❌ Migration failed:", error);
		process.exit(1);
	}
}

// Run the migration
runMigration();
