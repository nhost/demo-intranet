# Intranet - Project Rules

This project has specific architectural requirements and conventions that must be followed strictly.

## IMPORTANT NOTE FOR LLMs

When making significant architectural changes, adding new patterns, or modifying project structure, YOU MUST update this .rules file to reflect those changes. Also update the PROJECT_INDEX.md file to maintain accurate component and structure documentation. This ensures consistency for future development work.

## Project Purpose & Context

This is an intranet application for department-based collaboration and knowledge management. Prioritize user experience for business users working in departmental structures. Consider role-based access patterns and department-scoped functionality for all new features.

## Backend Architecture - Nhost Integration

NEVER directly modify Nhost configuration files (nhost.toml, .env.example, etc.) unless explicitly requested.

ALL database schema changes MUST be done through Nhost migrations using the Nhost CLI.

Use Nhost's MCP tools for all backend operations including:
- Database migrations via `local-manage-graphql` with /apis/migrate endpoint
- GraphQL metadata changes via `local-manage-graphql` with /v1/metadata endpoint
- Configuration changes via `local-config-server-query`
- Schema introspection via `local-get-graphql-schema` and `local-get-management-graphql-schema`

Always check current database state before making schema changes. Provide both up and down migrations for all database changes. Track new tables and foreign key relationships after creation. Use bulk metadata operations to avoid multiple requests. For role-based access, add roles via migrations to auth.roles table.

### Nhost SDK Documentation

This project uses a BETA version of the Nhost SDK. Model knowledge may be outdated for SDK usage patterns, API methods, and implementation details. ALWAYS reference the local documentation in `nhost/docs/` when working with the Nhost SDK to ensure accuracy with the current beta version. Check the documentation for:
- SDK initialization and configuration
- Authentication patterns and hooks
- GraphQL client usage
- Real-time subscriptions
- Storage and file upload patterns
- Functions and serverless patterns

## Package Manager - Bun

Use Bun as the JavaScript runtime and package manager:
- Use `bun install` for adding dependencies, not npm or yarn
- Use `bun add` for adding new packages
- Use `bun run` for executing scripts defined in package.json
- Leverage Bun's built-in APIs when possible (Bun.file, Bun.serve, etc.)
- Use `bun --hot` for development with hot reloading
- Reference bunfig.toml for Bun-specific configuration

## Code Quality - Biome

Follow Biome configuration in biome.jsonc for linting and formatting:
- Use tab indentation (as configured in Biome)
- Use double quotes for JavaScript/TypeScript strings
- Run `bun run check` to lint and format code
- All rules are enabled ('all': true), so follow strict code quality standards
- Organize imports automatically as configured

## Frontend Stack - React 19 + TypeScript

Use React 19 features and patterns with TypeScript for all new files. Leverage React's concurrent features when appropriate. Use React.StrictMode in development. Follow the configured path aliases in tsconfig.json (@/* for ./src/*). Use 'react-jsx' transform (no need to import React in every file).

## UI Framework - shadcn/ui + Tailwind CSS

Use shadcn/ui components from @/components/ui directory with Tailwind CSS v4:
- Follow the 'new-york' style variant as configured
- Use Tailwind CSS v4 classes for styling
- Leverage CSS variables for theming (cssVariables: true)
- Use 'zinc' as the base color scheme
- Use Lucide React for icons
- Follow the configured aliases:
  - @/components for components
  - @/lib/utils for utilities
  - @/components/ui for UI components
  - @/lib for libraries
  - @/hooks for custom hooks
- Use class-variance-authority (cva) for component variants
- Use clsx and tailwind-merge for conditional classes
- Implement animations with tailwindcss-animate

## Data Fetching - React Query

Use @tanstack/react-query for all data fetching and state management:
- Use queryKeys factory for consistent cache key management
- Implement proper loading and error states with React Query hooks
- Use mutations for data updates with optimistic updates where appropriate
- Configure appropriate staleTime and gcTime for different data types
- Use React Query DevTools in development for debugging
- Clear cache on sign out and handle authentication state changes
- Follow React Query best practices for background refetching and retry logic

## Routing - React Router

Use React Router DOM v7 for client-side routing:
- Use BrowserRouter as the main router wrapper
- Implement route protection with ProtectedLayout for nested protected routes
- Use Navigate component for redirects
- Define routes in App.tsx with clear path structure
- Handle 404s with catch-all route redirecting to home

## Form Management

Use react-hook-form for form state management with Zod schemas for validation. Use @hookform/resolvers for Zod integration. Create reusable form components following shadcn/ui patterns.

## Development Workflow

Use `bun dev` for development server with hot reloading. Use `bun build` for production builds. Run `bun run check` before committing to ensure code quality.

Follow the existing directory structure:
- src/ for all source code
- src/components/ for React components
- src/components/ui/ for shadcn/ui components
- src/lib/ for utility functions and context providers
- src/lib/graphql/ for GraphQL operations and generated code
- styles/ for global styles
- nhost/ for backend configuration and documentation
- functions/ for serverless functions
- Test AI Assistant, Knowledge Base, and Dashboard features in development
- Verify department permissions work correctly across all features

Keep global styles in styles/globals.css. Use TypeScript strict mode patterns. Test GraphQL operations with appropriate roles (default to 'user' role unless specified). Reference PROJECT_INDEX.md for detailed component and structure information. Always check existing patterns for AI Assistant, Knowledge Base, Dashboard, and enhanced file management before implementing new features.

## Database and API Patterns

Always retrieve GraphQL schema before writing queries if schema might have changed. Use appropriate roles when testing GraphQL operations (test with both member and manager roles). Follow Hasura naming conventions for database tables and columns. Use snake_case for database columns and camelCase for GraphQL fields. Implement proper error handling for all GraphQL operations including AI Assistant calls. Use Nhost's built-in authentication and authorization patterns. Integrate GraphQL operations with React Query for caching and state management. Test department-scoped operations with users from multiple departments.

## Context Providers and State Management

Use React Context for application-wide state:
- AuthProvider for authentication state management with session handling
- ThemeProvider for light/dark theme management with persistence
- Wrap providers in proper order in App.tsx (Theme -> Query -> Auth -> Router)
- Use custom hooks (useAuth, useTheme) to access context values
- Clear React Query cache on authentication state changes

## File Naming and Organization

Use PascalCase for React component files (e.g., UserProfile.tsx). Use camelCase for utility files and hooks (e.g., useAuth.ts). Use kebab-case for route/page files if applicable. Group related components in subdirectories. Keep component files focused and single-responsibility. Co-locate component-specific types and utilities when appropriate.

## GraphQL Code Generation

Use GraphQL Codegen for type safety:
- Define operations in src/lib/graphql/operations.graphql
- Run `bun run build:codegen` or `./codegen.sh` after changes
- Regenerate schema when adding AI, knowledge base, or member management operations
- Generated types are placed in src/lib/graphql/__generated__/
- Create custom query hooks in src/lib/graphql/query-hooks.ts
- Integrate generated hooks with React Query for caching and state management

## AI Assistant Integration

The project includes an AI Assistant powered by Graphite AI:

### Architecture
- **Floating Interface**: Uses FloatingChatBubble component for global chat access
- **Session Management**: Tracks chat sessions with persistent message history
- **GraphQL Integration**: Communicates with Graphite AI via custom GraphQL operations
- **Real-time Updates**: Uses React Query for optimistic updates and real-time chat

### Implementation Guidelines
- Use useAiAssistant hook for all AI interactions
- Handle chat sessions with proper error boundaries and loading states
- Integrate AI responses with existing user context and department permissions
- Store chat history for user reference and context continuity
- Follow privacy guidelines when sharing user data with AI service

### GraphQL Operations
- SendAiMessage: Send user messages to AI and receive responses
- GetAiSessions: Retrieve user's chat session history
- CreateAiSession: Initialize new chat sessions

## Knowledge Base System

The Knowledge Base provides department-specific information management:

### Architecture
- **Department-Scoped Content**: Knowledge entries are associated with specific departments
- **Rich Content Support**: Supports formatted text and multimedia content
- **Search Integration**: Full-text search across knowledge base entries
- **Version Control**: Tracks entry modifications with audit trail
- **Permission Inheritance**: Access control based on department membership

### Implementation Guidelines
- Always scope knowledge entries to departments for proper access control
- Use rich text editing patterns for content creation and editing
- Implement search functionality with proper indexing and filtering
- Provide version history for important knowledge entries
- Handle content permissions through existing department role system

### Database Schema
- `knowledge_entries` table with department associations
- Full-text search indexes for content discovery
- Audit trail columns for tracking changes

## Dashboard System

The Dashboard provides comprehensive overview and analytics:

### Architecture
- **Role-Based Views**: Different dashboard content based on user's department roles
- **Data Aggregation**: Combines statistics from files, departments, and user activities
- **Real-time Updates**: Uses React Query for live data updates
- **Performance Optimization**: Cached queries for expensive dashboard computations

### Implementation Guidelines
- Use dashboard-specific GraphQL operations for data aggregation
- Implement proper loading states for dashboard widgets
- Cache dashboard data appropriately to avoid expensive computations
- Provide role-specific dashboard content based on user permissions
- Use charts and visualizations for data presentation

### GraphQL Operations
- GetDashboardSummary: Aggregate statistics for user's accessible data
- GetRecentActivity: Recent activities across user's departments
- GetUserStats: User-specific statistics and metrics

## Project Documentation
## File Management System

The Files feature implements a comprehensive department-based file sharing system:

### Architecture
- **Enhanced Junction Pattern**: Uses `department_files` table with extended metadata
- **Multi-bucket Storage**: Supports different storage buckets for file categorization
- **Department Associations**: Files can be associated with multiple departments
- **Owner Management**: Tracks file ownership and sharing permissions
- **Role-Based Access**: Department members can upload/view, managers can delete/edit/reassign

### Implementation Guidelines
- Use enhanced FileUpload and FilesList components for consistent UI
- Support drag-and-drop file upload with validation
- Implement bulk file operations (delete, move, share)
- Handle file ownership transfer between users and departments
- Provide search and filtering capabilities for large file collections
- Use progressive loading for file lists with many items

### Enhanced Features
- Department assignment during upload
- File sharing across departments with permission controls
- Bulk file operations with confirmation dialogs
- Advanced file search and filtering
- File version management and history

### File Upload Workflow
1. Upload file to appropriate Nhost storage bucket
2. Create junction record with department associations
3. Set proper ownership and permission metadata
4. Handle transaction consistency between storage and database
5. Update user quotas and department statistics

## Member Management System

Department member management provides comprehensive user administration:

### Architecture
- **User Search Integration**: Search and find users across the system
- **Role Assignment**: Assign member vs manager roles within departments
- **Bulk Operations**: Support adding/removing multiple members
- **Permission Validation**: Ensure proper authorization for member changes

### Implementation Guidelines
- Use MemberManagement component for comprehensive member administration
- Implement user search with autocomplete functionality
- Provide bulk operations with proper confirmation dialogs
- Handle role changes with immediate permission updates
- Validate department manager permissions before allowing changes

### GraphQL Operations
- SearchUsers: Find users by name or email
- AddDepartmentMember: Add user to department with specified role
- RemoveDepartmentMember: Remove user from department
- UpdateMemberRole: Change user's role within department

## UI Patterns and Components

### Editable Field Pattern
The project uses inline editing patterns for user-friendly data modification:

- **Editable Fields**: Use EditableField component for inline editing
- **Form Integration**: Integrate with React Hook Form for validation
- **Auto-save**: Implement automatic saving with change detection
- **Cancel/Confirm**: Provide clear cancel and save actions

### Status and Feedback
- Use StatusMessage component for consistent user feedback
- Implement proper loading states for all operations
- Provide clear error messages with actionable guidance
- Use toast notifications for success confirmations

## Testing and Quality Assurance

### GraphQL Operations Testing
- Always test GraphQL operations with appropriate user roles
- Verify permission boundaries with different department memberships
- Test AI Assistant operations with proper error handling
- Validate file operations with storage cleanup verification

### Component Testing Patterns
- Test dashboard components with mock data for different roles
- Verify knowledge base search functionality with various queries
- Test file upload components with different file types and sizes
- Validate member management operations with proper authorization

## Performance Considerations

### Query Optimization
- Use React Query's staleTime appropriately for different data types
- Implement proper pagination for large datasets (files, knowledge entries)
- Cache dashboard aggregations to avoid expensive computations
- Use optimistic updates for better user experience

### AI Assistant Performance
- Implement proper loading states for AI responses
- Handle AI service timeouts gracefully
- Cache chat sessions to reduce API calls
- Implement rate limiting for AI interactions

## Security Guidelines

### Department Data Access
- Always validate department membership before showing sensitive data
- Implement proper role-based access for management operations
- Verify file permissions before allowing downloads or modifications
- Ensure AI assistant doesn't expose unauthorized department information

### File Security
- Validate file types and sizes before upload
- Implement virus scanning for uploaded files (if available)
- Use secure file URLs with expiration for sensitive documents
- Track file access for audit purposes

## Notes for Developers

Maintain accurate documentation:
- Update PROJECT_INDEX.md when adding components or changing structure
- Update this CLAUDE.md file when architectural patterns change
- Document component purposes, features, and dependencies in PROJECT_INDEX.md
- Keep README.md updated with basic setup and development instructions
- Follow established patterns for new features (AI, knowledge base, dashboard)
- Test all new features with proper role-based access controls
- Ensure AI Assistant integration follows privacy and security guidelines
