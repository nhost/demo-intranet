#!/usr/bin/env bun

import * as p from "@clack/prompts";
import { createClient } from "@nhost/nhost-js";

// Types
interface User {
	id: string;
	email: string;
	displayName: string | null;
}

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

async function updateUserEmails() {
	p.intro("🔧 User Email Updater for Impersonation");

	// Get the target email from user
	const targetEmail = await p.text({
		message: "Enter your email (e.g., jane@acme.corp):",
		placeholder: "user@domain.com",
		validate: (value) => {
			if (!value || !value.includes("@")) {
				return "Please enter a valid email address";
			}
			return;
		},
	});

	if (p.isCancel(targetEmail)) {
		p.cancel("Operation cancelled");
		process.exit(0);
	}

	// Extract domain from target email
	const [targetPrefix, targetDomain] = (targetEmail as string).split("@");

	p.log.info(`Updating all user emails to use domain: ${targetDomain}`);
	p.log.info(
		"This will allow you to impersonate any user by logging in with their modified email.",
	);

	// First, fetch all users using GraphQL
	const getUsersQuery = `
		query GetAllUsers {
			users(order_by: { email: asc }) {
				id
				email
				displayName
			}
		}
	`;

	try {
		console.log("Fetching users...");

		const response = await nhost.graphql.post(
			{
				query: getUsersQuery,
			},
			{
				headers: { "x-hasura-admin-secret": NHOST_ADMIN_SECRET },
			},
		);

		if (response.body.errors) {
			console.error("❌ Failed to fetch users");
			console.error("GraphQL errors:", response.body.errors);
			process.exit(1);
		}

		const users: User[] = response.body.data.users;
		console.log(`✅ Found ${users.length} users`);

		// Display current users
		p.log.info("\nCurrent users:");
		for (const user of users) {
			console.log(
				`  • ${user.email} (${user.displayName || "No display name"})`,
			);
		}

		const shouldContinue = await p.confirm({
			message: "Proceed with email updates?",
			initialValue: false,
		});

		if (p.isCancel(shouldContinue) || !shouldContinue) {
			p.cancel("Operation cancelled");
			process.exit(0);
		}

		// Update each user's email using GraphQL mutation
		const updateUserEmailMutation = `
			mutation UpdateUserEmail($userId: uuid!, $newEmail: citext!) {
				updateUser(
					pk_columns: { id: $userId }
					_set: { email: $newEmail }
				) {
					id
					email
					displayName
				}
			}
		`;
		console.log("Updating user emails...");

		for (const user of users) {
			// Extract username from current email
			const [username] = user.email.split("@");

			// Create new email: targetPrefix+username@targetDomain
			const newEmail = `${targetPrefix}+${username}@${targetDomain}`;

			// Use GraphQL mutation to update the email
			const updateResponse = await nhost.graphql.post(
				{
					query: updateUserEmailMutation,
					variables: {
						userId: user.id,
						newEmail: newEmail,
					},
				},
				{
					headers: { "x-hasura-admin-secret": NHOST_ADMIN_SECRET },
				},
			);

			if (updateResponse.body.errors) {
				console.error(
					`❌ Failed to update ${user.email}:`,
					updateResponse.body.errors,
				);
			} else {
				console.log(`  ✅ Updated: ${user.email} → ${newEmail}`);
			}
		}

		console.log("✅ Email updates completed!");

		p.outro("🎉 All user emails have been updated for impersonation!");

		console.log(`\n${"=".repeat(60)}`);
		console.log("IMPERSONATION INSTRUCTIONS:");
		console.log("=".repeat(60));
		console.log("\nTo impersonate any user, sign in with their new email:");
		if (users.length > 0) {
			const exampleUser = users[0];
			const [username] = exampleUser.email.split("@");
			console.log(`Example: ${targetPrefix}+${username}@${targetDomain}`);
		}
		console.log(
			"\nYou can use any password when signing in with these emails.",
		);
		console.log(
			"The system will allow access with the modified email addresses.\n",
		);
	} catch (error) {
		console.error("Error:", error);
		process.exit(1);
	}
}

// Run the script
updateUserEmails().catch(console.error);
