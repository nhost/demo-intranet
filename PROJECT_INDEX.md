# Project Index

This document serves as a comprehensive index of all components, utilities, and project structure for the Language Learning Application. This index should be kept up-to-date whenever new components or significant changes are made.

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
- **Routes**: Home (`/`), Sign In (`/signin`), Sign Up (`/signup`), Dashboard (`/dashboard`), Departments (`/departments`), User Profile (`/user`)
- **Dependencies**: React Router, React Query, Auth Context, Theme Context

#### `src/components/Navigation.tsx`
- **Purpose**: Main navigation bar with authentication controls
- **Features**: User authentication status, navigation links (Dashboard, Departments, Profile), theme toggle
- **Used by**: App.tsx as the main header component

#### `src/components/ProtectedLayout.tsx`
- **Purpose**: Layout component for protected routes using React Router Outlet pattern
- **Features**: Authentication checking, automatic redirect to sign-in, nested route support
- **Used by**: Wrapping protected routes (`/dashboard`, `/user`) in App.tsx

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
- **Permissions**: Based on `x-hasura-department-member` and `x-hasura-department-manager` claims

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
  - `operations.graphql`: GraphQL queries and mutations for user profiles, security keys, and departments
  - `query-hooks.ts`: Custom React Query hooks for GraphQL
  - `__generated__/`: Auto-generated TypeScript types
- **Operations**:
  - `GetCurrentUser`: Fetch user profile with security keys and avatar
  - `UpdateUserDisplayName`: Update user's display name
  - `UpdateUserAvatarUrl`: Update user's profile picture URL
  - `GetUserSecurityKeys`: Fetch user's WebAuthn security keys
  - `DeleteSecurityKey`: Remove a security key by ID
  - `GetUserDepartments`: Fetch all departments with their employees and details
  - `GetDepartmentDetails`: Fetch detailed information for a specific department
  - `UpdateDepartment`: Update department information (name, description, budget)
- **Custom Hooks**:
  - `useUserDepartments()`: Query hook for fetching all departments
  - `useDepartmentDetails(departmentId)`: Query hook for fetching specific department details
  - `useUpdateDepartment()`: Mutation hook for updating department information

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
- `x-hasura-department-member`: JSON string containing department IDs where user is a member
- `x-hasura-department-manager`: JSON string containing department IDs where user is a manager
- Format: `"{\"id1\",\"id2\",\"id3\"}"` - parsed to extract individual department IDs

### Department Permissions
- **Members**: Can view department information and member lists
- **Managers**: Can view and edit department information (name, description, budget)
- **Access Control**: Users can only see departments where they have member or manager roles

## Notes for Developers

1. **Always update this index** when creating new components or major structural changes
2. **Use the established patterns** for new components (React Query + shadcn/ui + TypeScript)
3. **Follow the naming conventions**: PascalCase for components, camelCase for utilities
4. **Update .rules file** if architectural patterns change
5. **Test GraphQL operations** with appropriate roles before integration
6. **Use the local Nhost documentation** in `nhost/docs/` for SDK usage (beta version)
7. **Respect permission boundaries** when implementing new features that involve departments
8. **Parse JWT claims correctly** using the established patterns in Departments.tsx

---

*Last Updated: When creating this index*
*Next Review: Should be updated with each significant component addition or architectural change*
