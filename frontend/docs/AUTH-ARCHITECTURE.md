# Authentication Architecture

This document outlines the authentication system architecture and implementation details.

## Overview

The authentication system is built using React Context API with TypeScript for type safety. It
provides a centralized authentication state management solution that can be accessed throughout the
application.

## Core Components

### 1. User Type (`lib/constants/auth.ts`)

```typescript
type User = {
  id: string;
  name: string;
  email: string;
};
```

Defines the structure of user data throughout the application.

### 2. AuthContext (`app/auth/context/AuthContext.tsx`)

The main authentication context that provides:

- `user: User | null` - Current authenticated user
- `isAuthenticated: boolean` - Authentication status
- `isLoading: boolean` - Loading state during auth operations
- `error: string | null` - Error messages
- `login(email, password): Promise<void>` - Login function
- `logout(): void` - Logout function

### 3. AuthProvider (`app/auth/context/AuthContext.tsx`)

Wraps the application and provides authentication state to all child components. Handles:

- User state management
- Loading states
- Error handling
- Login/logout operations

### 4. AuthService (`app/auth/services/authService.ts`)

Mock authentication service that simulates API calls with:

- `login(email, password): Promise<User>` - Authenticates user credentials
- `signup(name, email, password): Promise<User>` - Creates new user account
- Simulated network delays using `setTimeout`
- Mock user data validation

### 5. useAuth Hook (`app/auth/hooks/useAuth.ts`)

Provides convenient access to authentication context with:

- `useAuth()` - Main hook returning full context
- `useAuthActions()` - Returns only auth actions (login, logout, etc.)
- `useAuthState()` - Returns only auth state (user, isAuthenticated, etc.)

## Usage Examples

### Basic Authentication Check

```typescript
import { useAuth } from '@/app/auth/hooks/useAuth';

function MyComponent() {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    return <div>Please log in</div>;
  }

  return <div>Welcome, {user.name}!</div>;
}
```

### Login Form

```typescript
import { useAuth } from '@/app/auth/hooks/useAuth';

function LoginForm() {
  const { login, isLoading, error } = useAuth();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      await login(email, password);
      // Redirect or update UI
    } catch (err) {
      // Error is already set in context
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      {error && <div className="error">{error}</div>}
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
}
```

### Protected Route Pattern

```typescript
import { useAuth } from '@/app/auth/hooks/useAuth';
import { redirect } from 'next/navigation';

function ProtectedPage() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    redirect('/login');
  }

  return <div>Protected content</div>;
}
```

## Mock Data

The system includes mock users for development:

- Email: `john@example.com`, Password: `password123`
- Email: `jane@example.com`, Password: `password456`

## Error Handling

The authentication system includes comprehensive error handling:

- Invalid credentials
- Network errors (simulated)
- User not found
- User already exists (for signup)

## Type Safety

All components are fully typed with TypeScript:

- User type definition
- AuthContext interface
- Service function signatures
- Hook return types

## Integration

The AuthProvider is integrated into the root layout (`app/layout.tsx`) to ensure authentication
state is available throughout the application:

```typescript
<AuthProvider>
  {children}
</AuthProvider>
```

## Best Practices

1. **Always use hooks**: Use `useAuth()` or its convenience variants instead of accessing context
   directly
2. **Handle loading states**: Always check `isLoading` before rendering content
3. **Error handling**: Display error messages to users appropriately
4. **Type safety**: Leverage TypeScript for compile-time error checking
5. **Clean separation**: Keep authentication logic separate from UI components
