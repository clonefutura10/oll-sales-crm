# Authentication Components Documentation

This document describes the reusable authentication components available in the application.

## Overview

The authentication components provide a consistent, accessible, and theme-aware interface for user authentication flows. These components are built on top of shadcn/ui components and follow the project's design system.

## Components

### AuthCard

A wrapper component that provides a consistent card layout for authentication forms.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | - | **Required.** The content to be rendered inside the card |
| `title` | `string` | `undefined` | Optional title displayed in the card header |
| `description` | `string` | `undefined` | Optional description displayed below the title |
| `className` | `string` | `undefined` | Additional CSS classes to apply to the card |

#### Usage

```tsx
import { AuthCard } from "@/app/auth/components/AuthCard"

// Basic usage
<AuthCard>
  <p>Authentication content goes here</p>
</AuthCard>

// With title and description
<AuthCard 
  title="Welcome Back"
  description="Sign in to your account to continue"
>
  <AuthForm type="login" onSubmit={handleLogin} />
</AuthCard>

// With custom styling
<AuthCard 
  title="Create Account"
  className="max-w-lg"
>
  <AuthForm type="signup" onSubmit={handleSignup} />
</AuthCard>
```

#### Features

- Responsive design with `max-w-md` by default
- Automatic dark mode support through CSS variables
- Consistent spacing and typography
- Optional header section that only renders when title or description is provided

---

### AuthForm

A complete authentication form component with built-in validation and state management.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `'login' \| 'signup'` | - | **Required.** Determines the form type and button text |
| `onSubmit` | `(email: string, password: string) => void` | - | **Required.** Callback function called when form is submitted |
| `className` | `string` | `undefined` | Additional CSS classes to apply to the form |

#### Usage

```tsx
import { AuthForm } from "@/app/auth/components/AuthForm"

// Login form
<AuthForm 
  type="login" 
  onSubmit={async (email, password) => {
    // Handle login logic
    await signIn(email, password)
  }} 
/>

// Signup form
<AuthForm 
  type="signup" 
  onSubmit={async (email, password) => {
    // Handle signup logic
    await createAccount(email, password)
  }} 
/>

// With custom styling
<AuthForm 
  type="login" 
  onSubmit={handleAuth}
  className="space-y-8"
/>
```

#### Features

- **Built-in Validation:**
  - Email format validation
  - Password length validation (minimum 6 characters)
  - Required field validation

- **Accessibility:**
  - Proper form labeling
  - ARIA attributes for screen readers
  - Keyboard navigation support
  - Auto-complete attributes for better UX

- **State Management:**
  - Loading state during submission
  - Form state management with react-hook-form
  - Error message display

- **Security:**
  - Proper password field types
  - Auto-complete hints for password managers
  - Form validation before submission

- **Responsive Design:**
  - Mobile-friendly form layout
  - Consistent spacing across devices
  - Touch-friendly button sizes

#### Validation Rules

**Email Field:**
- Required: "Email is required"
- Format: Must match email pattern (user@domain.com)

**Password Field:**
- Required: "Password is required"
- Length: Minimum 6 characters

#### Error Handling

The component displays validation errors inline below each field. The submit button is disabled during form submission to prevent duplicate submissions.

---

## Theme Integration

Both components automatically integrate with the application's theme system:

- **Light Mode:** Uses the light theme variables from `globals.css`
- **Dark Mode:** Automatically switches to dark theme when `.dark` class is applied
- **CSS Variables:** All colors and spacing use CSS custom properties for consistency

## Responsive Behavior

- **Mobile:** Full-width forms with comfortable touch targets
- **Tablet:** Optimized spacing and layout
- **Desktop:** Centered layout with maximum width constraints

## TypeScript Support

All components are fully typed with TypeScript interfaces:

- Strict type checking for props
- IntelliSense support in IDEs
- Compile-time error detection

## Best Practices

1. **Always provide the required props** (`children` for AuthCard, `type` and `onSubmit` for AuthForm)
2. **Use consistent styling** by leveraging the built-in classes rather than overriding extensively
3. **Handle loading states** in your `onSubmit` function to provide user feedback
4. **Implement proper error handling** in your submission callbacks
5. **Test both light and dark modes** to ensure consistent appearance

## Example: Complete Authentication Page

```tsx
import { AuthCard } from "@/app/auth/components/AuthCard"
import { AuthForm } from "@/app/auth/components/AuthForm"

export default function LoginPage() {
  const handleLogin = async (email: string, password: string) => {
    try {
      // Your authentication logic here
      await authenticateUser(email, password)
      // Redirect on success
      router.push("/dashboard")
    } catch (error) {
      // Handle authentication errors
      console.error("Login failed:", error)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <AuthCard 
        title="Welcome Back"
        description="Sign in to your account to continue"
      >
        <AuthForm 
          type="login" 
          onSubmit={handleLogin}
        />
      </AuthCard>
    </div>
  )
}