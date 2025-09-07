"use client"

import { useState, useEffect } from "react"
import { AuthCard } from "../components/AuthCard"
import { AuthForm } from "../components/AuthForm"
import { useAuth } from "../hooks/useAuth"
import { useAuthNavigation } from "../utils/navigation"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function LoginPage() {
  const { login, error, isAuthenticated } = useAuth()
  const { navigateToSignup, navigateToHome, getRedirectUrl } = useAuthNavigation()
  const [loginError, setLoginError] = useState<string | null>(null)

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      const redirectUrl = getRedirectUrl()
      navigateToHome({ redirect: redirectUrl })
    }
  }, [isAuthenticated, navigateToHome, getRedirectUrl])

  const handleLogin = async (email: string, password: string) => {
    try {
      setLoginError(null)
      await login(email, password)
      // Get redirect URL and navigate to home/dashboard
      const redirectUrl = getRedirectUrl()
      navigateToHome({ redirect: redirectUrl })
    } catch (err) {
      setLoginError(err instanceof Error ? err.message : "Login failed")
    }
  }

  const handleSignupClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const redirectUrl = getRedirectUrl()
    navigateToSignup({ redirect: redirectUrl })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <AuthCard
          title="Welcome back"
          description="Sign in to your account to continue"
        >
          {error && (
            <Alert variant="destructive" className="mb-6">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          
          {loginError && (
            <Alert variant="destructive" className="mb-6">
              <AlertDescription>{loginError}</AlertDescription>
            </Alert>
          )}

          <AuthForm
            type="login"
            onSubmit={handleLogin}
            className="mt-6"
          />

          <div className="mt-6 text-center text-sm text-muted-foreground">
            <p>
              {`Don't have an account?`}{" "}
              <a
                href="/auth/signup"
                onClick={handleSignupClick}
                className="font-medium text-primary hover:text-primary/80 transition-colors cursor-pointer"
              >
                Sign up
              </a>
            </p>
          </div>
        </AuthCard>
      </div>
    </div>
  )
}