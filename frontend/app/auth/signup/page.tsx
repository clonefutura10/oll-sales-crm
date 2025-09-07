"use client"

import { useState, useEffect } from "react"
import { AuthCard } from "../components/AuthCard"
import { AuthForm } from "../components/AuthForm"
import { useAuth } from "../hooks/useAuth"
import { useAuthNavigation } from "../utils/navigation"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function SignupPage() {
  const { signup, error, isAuthenticated } = useAuth()
  const { navigateToLogin, navigateToHome, getRedirectUrl } = useAuthNavigation()
  const [signupError, setSignupError] = useState<string | null>(null)

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      const redirectUrl = getRedirectUrl()
      navigateToHome({ redirect: redirectUrl })
    }
  }, [isAuthenticated, navigateToHome, getRedirectUrl])

  const handleSignup = async (email: string, password: string, name?: string) => {
    try {
      setSignupError(null)
      if (!name) {
        throw new Error("Name is required for signup")
      }
      await signup(name, email, password)
      // Get redirect URL and navigate to home/dashboard
      const redirectUrl = getRedirectUrl()
      navigateToHome({ redirect: redirectUrl })
    } catch (err) {
      setSignupError(err instanceof Error ? err.message : "Signup failed")
    }
  }

  const handleLoginClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const redirectUrl = getRedirectUrl()
    navigateToLogin({ redirect: redirectUrl })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <AuthCard
          title="Create your account"
          description="Sign up to get started"
        >
          {error && (
            <Alert variant="destructive" className="mb-6">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          
          {signupError && (
            <Alert variant="destructive" className="mb-6">
              <AlertDescription>{signupError}</AlertDescription>
            </Alert>
          )}

          <AuthForm
            type="signup"
            onSubmit={handleSignup}
            className="mt-6"
          />

          <div className="mt-6 text-center text-sm text-muted-foreground">
            <p>
              Already have an account?{" "}
              <a
                href="/auth/login"
                onClick={handleLoginClick}
                className="font-medium text-primary hover:text-primary/80 transition-colors cursor-pointer"
              >
                Log in
              </a>
            </p>
          </div>
        </AuthCard>
      </div>
    </div>
  )
}