# Nhost Demo Intranet

A demo intranet application showcasing Nhost's capabilities with modern web technologies. This project demonstrates department management, file sharing, knowledge base, and AI assistant features.

## Tech Stack

- **Frontend**: React 19 + TypeScript
- **Backend**: Nhost (GraphQL, PostgreSQL, Authentication, Storage, AI Assistant)
- **UI**: shadcn/ui + Tailwind CSS v4
- **State Management**: React Query + React Context
- **Runtime**: Bun

## Requirements

- [Nhost CLI](https://docs.nhost.io/platform/cli/local-development)
- [Bun](https://bun.sh/)

## Getting Started

### Basic Setup

1. **Clone and install dependencies:**
   ```bash
   bun install
   ```

2. **Copy secrets template:**
   ```bash
   cp .secrets.example .secrets
   ```

4. **Start the development environment:**
   ```bash
   make dev-env-up
   ```

4. **Start the frontend:**
   ```bash
   bun run dev
   ```

The application will be available at `http://localhost:3000`

## Demo Data & Authentication

### Local Development
This demo comes with pre-populated mock data including users, departments, and content. To sign in locally:

1. **Use any mocked user email** (see `MOCKED_USERS.md` for available users)
2. **Check the OTP code** at https://local.mailhog.local.nhost.run
3. **Enter the OTP** to complete authentication

### Cloud Development
When connected to Nhost Cloud:

1. **Seed data first** (see "Seeding Cloud Data" section below)
2. **Use the impersonation script** (see "User Impersonation for Testing" section)
3. **Sign in with updated emails** using any password

### Enable AI Assistant (Optional)

To enable the AI assistant feature:

1. **Configure your secrets:**
   Edit `.secrets` file with your API keys and configuration

2. **Start with AI support:**
   ```bash
   make dev-env-up-ai
   ```

3. **Start the frontend:**
   ```bash
   bun run dev
   ```

## Connecting to Nhost Cloud

To connect the frontend to your Nhost Cloud project instead of the local development environment:

1. **Create an `.env.local` file** in the project root if it doesn't exist:
   ```bash
   touch .env.local
   ```
2. Set your Nhost Cloud project details in `.env.local`:
   ```env
   BUN_PUBLIC_NHOST_SUBDOMAIN=your-project-subdomain
   BUN_PUBLIC_NHOST_REGION=your-project-region
   ```
3. **Start the frontend:**
   ```bash
   bun run dev
   ```

The application will automatically connect to your cloud project using these environment variables.

### Seeding Cloud Data

To populate your Nhost Cloud project with demo data:

```bash
export NHOST_ADMIN_SECRET="your-admin-secret"
export NHOST_SUBDOMAIN="your-subdomain"
export NHOST_REGION="your-region"

# Apply database seeds
nhost dev hasura seed apply \
    --admin-secret $NHOST_ADMIN_SECRET \
    --endpoint https://$NHOST_SUBDOMAIN.hasura.$NHOST_REGION.nhost.run \
    --database-name default

# Configure AI assistant (optional)
bun run scripts/configure-assistants.ts
```

### User Impersonation for Testing

For development and testing purposes, you can impersonate any user using the email update script:

```bash
# Run the impersonation script
bun run update-emails
```

**How it works:**
1. Enter your email (e.g., `developer@company.com`)
2. Script updates all user emails to format: `developer+original.username@company.com`
3. Sign in using any of the updated emails (you will receive OTPs at your email)

**Example:**
- Original user: `john.doe@acme.corp`
- Your email: `developer@company.com`
- New impersonation email: `developer+john.doe@company.com`

**⚠️ Security Note:** This script is for development/testing only. It modifies user emails in the database and should never be used in production environments.

## Features

- **Departments**: Create and manage organizational departments
- **File Management**: Department-based file sharing system
- **Knowledge Base**: Centralized information repository
- **Dashboard**: Overview of department activities
- **AI Assistant**: Smart assistant for enhanced productivity (optional)

## Permissions & Security

The application implements a role-based access control system:

### Department Roles
- **Member**: Can view department information, files, and knowledge base entries
- **Manager**: Can edit department details, manage members, and modify department content

### Access Control
- Users belong to departments with specific roles (member/manager)
- JWT claims carry department memberships: `x-hasura-departments` and `x-hasura-department-manager`
- All operations are validated both client-side and server-side
- File sharing and knowledge base access are scoped to department memberships

### Authentication
- **Email + OTP**: Traditional email-based authentication with one-time codes
- **WebAuthn/Passkeys**: Modern passwordless authentication with biometrics/security keys
- **Multi-factor Options**: Users can register multiple authentication methods

## Development

- **Linting & Formatting**: `bun run check`
- **GraphQL Codegen**: `bun run build:codegen`
- **Production Build**: `bun run build`

For detailed development guidelines, see `CLAUDE.md`.
