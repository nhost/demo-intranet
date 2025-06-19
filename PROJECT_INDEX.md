# Project Index

This document serves as a comprehensive index of all components, utilities, and project structure for the Intranet Application. This index should be kept up-to-date whenever new components or significant changes are made.

## Project Overview

A modern application built with React 19, TypeScript, Nhost backend, and shadcn/ui components.

## Technology Stack

- **Frontend**: React 19 + TypeScript
- **Backend**: Nhost (GraphQL, Auth, Storage, Functions)
- **Runtime**: Bun
- **UI Framework**: shadcn/ui + Tailwind CSS v4
- **State Management**: React Query (@tanstack/react-query)
- **Routing**: React Router DOM v7
- **Forms**: React Hook Form + Zod validation
- **Code Quality**: Biome (linting & formatting)
- **GraphQL**: Code generation with GraphQL Codegen

## Directory Structure

```
swe/
├── .rules                          # Project rules and guidelines for LLMs
├── PROJECT_INDEX.md               # This file - component and structure index
├── package.json                   # Dependencies and scripts
├── biome.jsonc                    # Biome configuration
├── bunfig.toml                    # Bun configuration
├── tsconfig.json                  # TypeScript configuration
├── components.json                # shadcn/ui configuration
├── build.ts                       # Build script
├── codegen.ts                     # GraphQL codegen configuration
├── codegen.sh                     # GraphQL codegen script
├── schema.graphql                 # Generated GraphQL schema
├── styles/
│   └── globals.css               # Global styles and CSS variables
├── src/
│   ├── index.tsx                 # Application entry point
│   ├── index.html                # HTML template
│   ├── index.css                 # CSS imports
│   ├── App.tsx                   # Main application component
│   ├── frontend.tsx              # Frontend-specific exports
│   ├── ApiTester.tsx             # API testing component
│   ├── logo.svg                  # Application logo
│   ├── components/               # React components
│   │   ├── Navigation.tsx        # Main navigation component
│   │   ├── ProtectedLayout.tsx   # Layout for protected routes
│   │   ├── SignIn.tsx            # Sign in form component (OTP + WebAuthn)
│   │   ├── SignUp.tsx            # Sign up form component (OTP + WebAuthn)
│   │   ├── SecurityKeyManagement.tsx # WebAuthn security key management component
│   │   ├── ThemeToggle.tsx       # Theme switcher component
│   │   ├── UserProfile.tsx       # User profile component
│   │   └── ui/                   # shadcn/ui components
│   │       ├── button.tsx        # Button component
│   │       ├── card.tsx          # Card component
│   │       ├── form.tsx          # Form components
│   │       ├── input.tsx         # Input component
│   │       ├── label.tsx         # Label component
│   │       └── select.tsx        # Select component
│   └── lib/                      # Utilities and configurations
│       ├── nhost.ts              # Nhost client configuration
│       ├── auth-context.tsx      # Authentication context provider
│       ├── theme-context.tsx     # Theme context provider
│       ├── react-query.ts        # React Query configuration
│       ├── utils.ts              # Utility functions
│       ├── webauthn-utils.ts     # WebAuthn utility functions and error handling
│       └── graphql/              # GraphQL related files
│           ├── operations.graphql # GraphQL operations
│           ├── query-hooks.ts    # Custom query hooks
│           └── __generated__/    # Generated GraphQL types
├── nhost/                        # Nhost backend configuration
│   ├── nhost.toml               # Nhost configuration
│   ├── config.yaml              # Additional configuration
│   ├── docs/                    # Local Nhost SDK documentation
│   ├── migrations/              # Database migrations
│   ├── metadata/                # Hasura metadata
│   ├── seeds/                   # Database seeds
│   └── emails/                  # Email templates
├── functions/                    # Serverless functions
│   ├── package.json             # Functions dependencies
│   └── tsconfig.json            # Functions TypeScript config
└── backend/                      # Backend utilities (currently empty)
```

## Components Reference

### Core Application Components

#### `src/App.tsx`
- **Purpose**: Main application component with routing and providers
- **Features**: Router setup, theme provider, auth provider, query client
- **Routes**: Home (`/`), Sign In (`/signin`), Sign Up (`/signup`), Dashboard (`/dashboard`), Departments (`/departments`), Files (`/files`), Knowledge Base (`/knowledge`), User Profile (`/user`)
- **Dependencies**: React Router, React Query, Auth Context, Theme Context

#### `src/components/Navigation.tsx`
- **Purpose**: Main navigation bar with authentication controls
- **Features**: User authentication status, navigation links (Dashboard, Departments, Profile), theme toggle
- **Used by**: App.tsx as the main header component

#### `src/components/ProtectedLayout.tsx`
- **Purpose**: Layout component for protected routes using React Router Outlet pattern
- **Features**: Authentication checking, automatic redirect to sign-in, nested route support
- **Used by**: Wrapping protected routes (`/dashboard`, `/user`) in App.tsx

### AI Assistant Components

#### `src/components/FloatingChatBubble.tsx`
- **Purpose**: Floating chat interface for AI assistant interaction
- **Features**:
  - Toggleable chat window with floating bubble design
  - Real-time message display with user/assistant differentiation
  - Session management with message history
  - Auto-focus on input field when opened
  - Responsive design with proper positioning
- **Dependencies**: useAiAssistant hook, shadcn/ui components
- **Integration**: Available globally via floating action button

#### `src/lib/useAiAssistant.ts`
- **Purpose**: Custom hook for AI assistant functionality
- **Features**:
  - Real-time chat session management
  - Message sending and receiving
  - Error handling for AI responses
  - Integration with Graphite AI via GraphQL
  - Session persistence and cleanup
- **Dependencies**: React Query, GraphQL operations
- **Used by**: FloatingChatBubble component

### Authentication Components

#### `src/components/SignIn.tsx`
- **Purpose**: User sign-in form with multiple authentication methods
- **Features**:
  - Email OTP authentication (two-step process)
  - WebAuthn/Passkey authentication (one-click sign-in)
  - Browser compatibility detection
  - Form validation with Zod
  - Loading states and error handling
- **Dependencies**: React Hook Form, Zod, @simplewebauthn/browser, shadcn/ui components
- **Route**: `/signin`

#### `src/components/SignUp.tsx`
- **Purpose**: User registration form with multiple registration methods
- **Features**:
  - Email OTP registration (two-step process with name + email)
  - WebAuthn/Passkey registration (one-click sign-up)
  - Browser compatibility detection
  - Form validation with Zod
  - Loading states and error handling
- **Dependencies**: React Hook Form, Zod, @simplewebauthn/browser, shadcn/ui components
- **Route**: `/signup`

#### `src/components/UserProfile.tsx`
- **Purpose**: User profile management and settings
- **Features**:
  - Display user information with avatar
  - Profile picture upload functionality
  - Display name editing
  - Email management
  - Security key management
  - Account creation date display
  - Sign out functionality
- **Dependencies**: ProfilePictureUpload, DisplayNameEditForm, EmailEditForm, SecurityKeyManagement
- **Route**: `/user` (protected)

#### `src/components/DisplayNameEditForm.tsx`
- **Purpose**: Dedicated form component for editing user display names
- **Features**:
  - Inline editing with validation
  - Real-time form validation with Zod
  - Loading states and error handling
  - Automatic focus management
  - Cancel/save functionality
- **Dependencies**: React Hook Form, Zod, GraphQL mutations
- **Used by**: UserProfile component

#### `src/components/EmailEditForm.tsx`
- **Purpose**: Form component for managing user email addresses
- **Features**:
  - Email validation and formatting
  - Change detection to prevent unnecessary updates
  - Error handling for email conflicts
  - Loading states during updates
- **Dependencies**: React Hook Form, Zod, GraphQL mutations
- **Used by**: UserProfile component

#### `src/components/ProfilePictureUpload.tsx`
- **Purpose**: Profile picture upload and management component
- **Features**:
  - Upload images to Nhost storage (profile_pics bucket)
  - Image preview before upload
  - File validation (type and size limits up to 5MB)
  - Current avatar display with remove option
  - Integration with user avatarUrl field
  - Loading states and error handling
- **Dependencies**: Nhost storage SDK, React Query, GraphQL mutations
- **Used by**: UserProfile component
- **Storage**: Uses `profile_pics` bucket in Nhost storage

#### `src/components/SecurityKeyManagement.tsx`
- **Purpose**: WebAuthn security key and passkey management
- **Features**:
  - List user's registered security keys and passkeys
  - Add new security keys with WebAuthn registration
  - Delete existing security keys with confirmation
  - Browser compatibility detection
  - Key type identification (USB, biometric, etc.)
  - Real-time error handling and user feedback
- **Dependencies**: React Hook Form, Zod, @simplewebauthn/browser, GraphQL mutations
- **Used by**: UserProfile component for security management

### Dashboard Components

#### `src/components/Dashboard.tsx`
- **Purpose**: Main dashboard providing overview of user activities and statistics
- **Features**:
  - Department statistics and summaries
  - File upload and management statistics
  - Recent activity feed
  - Knowledge base entry counts
  - Role-based information display
  - Quick action buttons for common tasks
- **Dependencies**: useGetDashboardSummary, useGetUserDepartments hooks
- **Route**: `/dashboard` (protected)
- **Permissions**: Shows different information based on user's department roles

### Department Management Components

#### `src/components/Departments.tsx`
- **Purpose**: Main departments page showing user's accessible departments
- **Features**:
  - Display departments based on JWT claims (member/manager permissions)
  - Department cards with basic info (name, description, budget, member count)
  - Role-based access control (members can view, managers can edit)
  - Department detail modal with full member list
  - Edit dialog for managers to update department information
  - Permission-based UI (edit buttons only shown to managers)
- **Dependencies**: useUserDepartments hook, JWT claims parsing, shadcn/ui components
- **Route**: `/departments` (protected)
- **Permissions**: Based on `x-hasura-departments` and `x-hasura-department-manager` claims

#### `src/components/DepartmentEditDialog.tsx`
- **Purpose**: Modal dialog for editing department information (managers only)
- **Features**:
  - Form validation with real-time feedback
  - Budget input with currency formatting and validation
  - Description character limit (500 chars)
  - Change detection to prevent unnecessary saves
  - Confirmation prompt when closing with unsaved changes
  - Error handling and loading states
- **Dependencies**: useDepartmentDetails, useUpdateDepartment hooks, React Hook Form patterns
- **Used by**: Departments component for manager-only editing
- **Permissions**: Only accessible to users with manager role for the department

#### `src/components/MemberManagement.tsx`
- **Purpose**: Comprehensive member management interface for department managers
- **Features**:
  - Add new members to departments with user search
  - Remove existing members with confirmation
  - Role assignment (member vs manager)
  - Real-time member list updates
  - User search functionality with autocomplete
  - Bulk operations for member management
- **Dependencies**: useAddDepartmentMember, useRemoveDepartmentMember, useSearchUsers hooks
- **Used by**: Department management interface
- **Permissions**: Only accessible to department managers

### Knowledge Base Components

#### `src/components/KnowledgeBase.tsx`
- **Purpose**: Knowledge base management system for departments
- **Features**:
  - Create, read, update, delete knowledge entries
  - Department-specific filtering and access control
  - Rich text editing for knowledge entries
  - Search functionality across knowledge base
  - Category and tag management
  - Version history and audit trail
- **Dependencies**: useGetKnowledgeEntries, useCreateKnowledgeEntry, useUpdateKnowledgeEntry hooks
- **Route**: `/knowledge` (protected)
- **Permissions**: Department-based access control for viewing and editing

### File Management Components

#### `src/components/Files.tsx`
- **Purpose**: Main files page for department file management
- **Features**:
  - Department selector for users in multiple departments
  - Role-based UI showing user's permissions in selected department
  - File upload and listing integration
  - Auto-refresh after successful uploads
  - Department-specific file access control
- **Dependencies**: useGetUserDepartments hook, FileUpload, FilesList components
- **Route**: `/files` (protected)
- **Permissions**: Users can only see files from departments they belong to

#### `src/components/FileUpload.tsx`
- **Purpose**: Enhanced file upload component with department association
- **Features**:
  - Drag and drop file upload interface
  - File validation (size, type, format)
  - Department assignment during upload
  - Multiple file selection support
  - Upload progress tracking
  - Error handling and retry functionality
- **Dependencies**: useAddFile hook, Nhost storage integration
- **Used by**: Files page for file management
- **Storage**: Integrates with Nhost storage system

#### `src/components/FilesList.tsx`
- **Purpose**: Enhanced file listing with department associations
- **Features**:
  - Department-filtered file listing
  - File metadata display (size, type, upload date)
  - File ownership and sharing controls
  - Bulk file operations (delete, move, share)
  - Search and filter functionality
  - Role-based action permissions
- **Dependencies**: useGetFiles, useDeleteFile, useUpdateFile hooks
- **Used by**: Files page for file management
- **Permissions**: Role-based access to file operations

#### `src/components/DepartmentFileUpload.tsx`
- **Purpose**: File upload interface for department files
- **Features**:
  - Drag and drop or click to select files
  - File validation (size limits, type checking)
  - Optional file descriptions
  - Upload progress and error handling
  - File preview before upload
  - Integration with Nhost storage API
- **Dependencies**: useAddDepartmentFile hook, Nhost storage client
- **Storage**: Uploads to `department_files` bucket
- **Permissions**: All department members can upload files

#### `src/components/DepartmentFilesList.tsx`
- **Purpose**: Display and manage department files
- **Features**:
  - File listing with metadata (name, size, upload date, description)
  - File type icons and visual indicators
  - Download functionality with direct storage URLs
  - Inline description editing (managers only)
  - File deletion (managers only)
  - Role-based action buttons
  - Error handling for storage operations
- **Dependencies**: useGetDepartmentFiles, useUpdateDepartmentFileDescription, useDeleteDepartmentFile hooks
- **Storage**: Integrates with Nhost storage for file operations
- **Permissions**: Members can view/download, managers can edit descriptions and delete files

### UI Components

#### `src/components/ThemeToggle.tsx`
- **Purpose**: Light/dark theme switcher
- **Features**: Toggle between light and dark themes
- **Dependencies**: Theme Context, Lucide React icons

### shadcn/ui Components (`src/components/ui/`)

#### `button.tsx`
- **Purpose**: Reusable button component with variants
- **Variants**: default, destructive, outline, secondary, ghost, link
- **Sizes**: default, sm, lg, icon

#### `card.tsx`
- **Purpose**: Card container component
- **Sub-components**: Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent

#### `form.tsx`
- **Purpose**: Form components with React Hook Form integration
- **Sub-components**: Form, FormItem, FormLabel, FormControl, FormDescription, FormMessage, FormField

#### `input.tsx`
- **Purpose**: Input field component with styling
- **Features**: Consistent styling, focus states, disabled states

#### `label.tsx`
- **Purpose**: Form label component
- **Features**: Accessible labeling for form inputs

#### `select.tsx`
- **Purpose**: Select dropdown component
- **Sub-components**: Select, SelectGroup, SelectValue, SelectTrigger, SelectContent, SelectLabel, SelectItem, SelectSeparator, SelectScrollUpButton, SelectScrollDownButton

#### `avatar.tsx`
- **Purpose**: Avatar component for user profile pictures
- **Sub-components**: Avatar, AvatarImage, AvatarFallback
- **Features**: Automatic fallback to initials, responsive sizing

#### `badge.tsx`
- **Purpose**: Badge component for tags, status indicators, and labels
- **Variants**: default, secondary, destructive, outline
- **Features**: Small, styled labels for categorization

#### `dialog.tsx`
- **Purpose**: Modal dialog component
- **Sub-components**: Dialog, DialogPortal, DialogOverlay, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription, DialogClose
- **Features**: Accessible modal dialogs with backdrop

#### `tabs.tsx`
- **Purpose**: Tab navigation component
- **Sub-components**: Tabs, TabsList, TabsTrigger, TabsContent
- **Features**: Keyboard navigation, active state management

#### `alert.tsx`
- **Purpose**: Alert and notification component
- **Sub-components**: Alert, AlertTitle, AlertDescription
- **Variants**: default, destructive
- **Features**: Status messages and notifications

#### `checkbox.tsx`
- **Purpose**: Checkbox input component
- **Features**: Controlled state, indeterminate support, accessibility

#### `separator.tsx`
- **Purpose**: Visual separator component
- **Features**: Horizontal and vertical separators for content division

#### `textarea.tsx`
- **Purpose**: Multi-line text input component
- **Features**: Resizable text area with consistent styling

#### `scroll-area.tsx`
- **Purpose**: Custom scrollable area component
- **Sub-components**: ScrollArea, ScrollBar
- **Features**: Styled scrollbars, smooth scrolling

#### `editable-field.tsx`
- **Purpose**: Reusable inline editable field component
- **Features**: Click-to-edit functionality, validation, cancel/save actions
- **Used by**: Profile editing, department management

#### `status-message.tsx`
- **Purpose**: Status and alert message component
- **Features**: Success, error, warning, info message types
- **Used by**: Forms and action feedback throughout the app

## Context Providers

### `src/lib/auth-context.tsx`
- **Purpose**: Global authentication state management
- **Features**: Session management, loading states, Nhost integration
- **Exports**: AuthProvider, useAuth hook

### `src/lib/theme-context.tsx`
- **Purpose**: Theme management (light/dark mode)
- **Features**: Theme persistence, system theme detection
- **Exports**: ThemeProvider, useTheme hook

## Utilities and Configuration

### `src/lib/nhost.ts`
- **Purpose**: Nhost client configuration
- **Exports**: nhost client, auth, graphql, storage, functions

### `src/lib/react-query.ts`
- **Purpose**: React Query configuration and query keys
- **Features**: Query client setup, cache management, query key factory

### `src/lib/utils.ts`
- **Purpose**: Utility functions
- **Features**: Class name merging, common helper functions

### `src/lib/webauthn-utils.ts`
- **Purpose**: WebAuthn utility functions and browser compatibility
- **Features**:
  - Browser WebAuthn support detection
  - Platform authenticator availability checking
  - Conditional UI (autofill) support detection
  - User-friendly error message formatting
  - WebAuthn capability reporting for debugging
- **Exports**:
  - `isWebAuthnSupported()`: Check basic WebAuthn browser support
  - `isConditionalUISupported()`: Check autofill support
  - `isPlatformAuthenticatorAvailable()`: Check for Touch ID/Face ID/Windows Hello
  - `getWebAuthnErrorMessage()`: Convert technical errors to user-friendly messages
  - `getWebAuthnCapabilities()`: Get comprehensive capability report
  - Constants for authenticator preferences and timeouts

### `src/lib/graphql/`
- **Purpose**: GraphQL operations and generated code
- **Files**:
  - `operations.graphql`: GraphQL queries and mutations for all app features
  - `query-hooks.ts`: Custom React Query hooks for GraphQL
  - `__generated__/`: Auto-generated TypeScript types
- **Operations**:
  - **User Management**: GetCurrentUser, UpdateUserDisplayName, UpdateUserAvatarUrl, GetUserSecurityKeys, DeleteSecurityKey
  - **Department Management**: GetUserDepartments, GetDepartmentDetails, UpdateDepartment, AddDepartmentMember, RemoveDepartmentMember
  - **File Management**: GetFiles, AddFile, UpdateFile, DeleteFile, GetDepartmentFiles
  - **Knowledge Base**: GetKnowledgeEntries, CreateKnowledgeEntry, UpdateKnowledgeEntry, DeleteKnowledgeEntry
  - **Dashboard**: GetDashboardSummary, GetRecentActivity, GetUserStats
  - **AI Assistant**: SendAiMessage, GetAiSessions, CreateAiSession
  - **User Search**: SearchUsers, GetUserByEmail
- **Custom Hooks**:
  - **Department Hooks**: useUserDepartments(), useDepartmentDetails(), useUpdateDepartment(), useAddDepartmentMember(), useRemoveDepartmentMember()
  - **File Hooks**: useGetFiles(), useAddFile(), useUpdateFile(), useDeleteFile()
  - **Knowledge Hooks**: useGetKnowledgeEntries(), useCreateKnowledgeEntry(), useUpdateKnowledgeEntry()
  - **Dashboard Hooks**: useGetDashboardSummary(), useGetRecentActivity()
  - **AI Hooks**: useSendAiMessage(), useGetAiSessions()
  - **User Hooks**: useSearchUsers(), useGetUserByEmail()

## Styling and Theming

### `styles/globals.css`
- **Purpose**: Global styles and CSS custom properties
- **Features**:
  - Tailwind CSS v4 imports
  - CSS custom properties for theming
  - Light/dark theme variables
  - Gradient backgrounds
  - Component-specific styling

### Theme System
- **Colors**: Uses CSS custom properties for consistent theming
- **Base Colors**: zinc color scheme
- **Variants**: Supports light and dark modes
- **Components**: All shadcn/ui components use theme variables

## WebAuthn Integration

### Overview
The application includes WebAuthn (passkey) authentication as an alternative to traditional email/OTP authentication. This provides:
- **Passwordless authentication**: Users can sign in with biometrics or security keys
- **Enhanced security**: Cryptographic authentication resistant to phishing
- **Better UX**: One-click authentication after initial setup

### Implementation Details
- **Library**: `@simplewebauthn/browser` for client-side WebAuthn operations
- **Backend**: Nhost's native WebAuthn support via SDK
- **Browser Support**: Automatic detection with graceful fallback to OTP
- **User Flow**:
  - Sign Up: Option to create passkey during registration
  - Sign In: Option to authenticate with existing passkey
  - Fallback: Always available OTP method for compatibility

### Browser Compatibility
- **Modern Browsers**: Chrome 67+, Firefox 60+, Safari 14+, Edge 18+
- **Platform Authenticators**: Touch ID, Face ID, Windows Hello, Android biometrics
- **Cross-platform**: USB security keys, Bluetooth authenticators
- **Detection**: Runtime capability checking with user-friendly messaging

## Configuration Files

### `package.json`
- **Scripts**: dev, start, build, check (types + biome)
- **Key Dependencies**: React 19, Nhost SDK beta, React Query, React Router, @simplewebauthn/browser
- **Dev Tools**: TypeScript, Biome, GraphQL Codegen

### `tsconfig.json`
- **Target**: ES2022
- **Path Aliases**: `@/*` maps to `./src/*`
- **JSX**: react-jsx transform (no React imports needed)

### `components.json` (shadcn/ui)
- **Style**: new-york variant
- **Base Color**: zinc
- **CSS Variables**: enabled
- **Icon Library**: lucide-react

### `biome.jsonc`
- **Formatting**: Tabs, double quotes
- **Rules**: All rules enabled with specific overrides
- **Ignored**: Generated files and build scripts

## Development Workflow

### Scripts
- `bun dev`: Development server with hot reloading
- `bun build`: Production build with codegen
- `bun check`: Type checking and linting
- `bun run check:biome`: Biome linting only
- `bun run check:types`: TypeScript checking only

### Code Generation
- GraphQL schema and types are auto-generated via `codegen.sh`
- Run after schema changes or new GraphQL operations

## Backend Integration

### Nhost Configuration (`nhost/nhost.toml`)
- **Authentication**: Email/password, email verification required
- **Database**: PostgreSQL 14.17
- **GraphQL**: Hasura with admin access
- **Storage**: File upload capabilities
- **Functions**: Node.js 22 runtime

### Authentication Setup
- **Default Role**: user
- **Allowed Roles**: user, me
- **Session**: 15min access tokens, 30-day refresh tokens
- **Sign Up**: Enabled with email verification

## Permission System

### JWT Claims Structure
The application uses JWT claims for role-based access control:
- `x-hasura-departments`: JSON string containing all department IDs a user belongs to
- `x-hasura-department-manager`: JSON string containing department IDs where user is a manager
- Format: `"{\"id1\",\"id2\",\"id3\"}"` - parsed to extract individual department IDs

### Department Permissions
- **Members**: Can view department information and member lists
- **Managers**: Can view and edit department information (name, description, budget)
- **Access Control**: Users can only see departments where they have member or manager roles

## Database Schema Extensions

### Department Files System

The department files feature uses a junction table approach to link files with departments:

- **`department_files` table**: Links storage files to departments with optional descriptions
- **Storage integration**: Uses Nhost storage API with `department_files` bucket
- **Permission model**: Role-based access through department memberships
- **File tracking**: Maintains referential integrity between storage and database

### Knowledge Base System

The knowledge base uses a structured approach for department-specific content:

- **`knowledge_entries` table**: Stores knowledge base articles with rich content
- **Department association**: Links entries to specific departments for access control
- **Versioning**: Tracks entry modifications with timestamps and user attribution
- **Search optimization**: Full-text search capabilities across entry content

### AI Assistant Integration

AI assistant functionality is integrated with the existing user system:

- **`ai_sessions` table**: Tracks chat sessions with users
- **`ai_messages` table**: Stores conversation history
- **Graphite AI integration**: External AI service via GraphQL endpoints
- **Session management**: Automatic cleanup and session persistence

### File Upload Workflow

1. User uploads file to Nhost storage (`department_files` bucket)
2. File metadata is stored in `storage.files` table automatically
3. Junction record created in `department_files` table linking file to department
4. Permissions enforced at database level through GraphQL role system

## Notes for Developers

1. **Always update this index** when creating new components or major structural changes
2. **Use the established patterns** for new components (React Query + shadcn/ui + TypeScript)
3. **Follow the naming conventions**: PascalCase for components, camelCase for utilities
4. **File uploads**: Always use the junction table pattern for associating files with business entities
5. **Storage operations**: Handle both database and storage cleanup when deleting files
4. **Update .rules file** if architectural patterns change
5. **Test GraphQL operations** with appropriate roles before integration
6. **Use the local Nhost documentation** in `nhost/docs/` for SDK usage (beta version)
7. **Respect permission boundaries** when implementing new features that involve departments
8. **Parse JWT claims correctly** using the established patterns in Departments.tsx

---

*Last Updated: Updated to reflect current project state with AI Assistant, Knowledge Base, Dashboard, and enhanced file management features*
*Next Review: Should be updated with each significant component addition or architectural change*
