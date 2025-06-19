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

This demo comes with pre-populated mock data including users, departments, and content. To sign in:

1. **Use any mocked user email** (see `MOCKED_USERS.md` for available users)
2. **Check the OTP code** at https://local.mailhog.local.nhost.run
3. **Enter the OTP** to complete authentication

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

## Features

- **Departments**: Create and manage organizational departments
- **File Management**: Department-based file sharing system
- **Knowledge Base**: Centralized information repository
- **Dashboard**: Overview of department activities
- **AI Assistant**: Smart assistant for enhanced productivity (optional)

## Development

- **Linting & Formatting**: `bun run check`
- **GraphQL Codegen**: `bun run build:codegen`
- **Production Build**: `bun run build`

For detailed development guidelines, see `CLAUDE.md`.
