'use client';

import { useAuth } from '../hooks/useAuth';
import { useAuthNavigation } from '../utils/navigation';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function AuthTestPage() {
  const { isAuthenticated, user, logout } = useAuth();
  const { navigateToLogin, navigateToSignup, navigateToHome } =
    useAuthNavigation();

  const handleProtectedAction = () => {
    // Simulate trying to access a protected page
    navigateToLogin({ redirect: '/auth/test' });
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8'>
      <div className='w-full max-w-md space-y-8'>
        <Card>
          <CardHeader>
            <CardTitle>Auth Navigation Test</CardTitle>
            <CardDescription>
              Test the authentication navigation flow
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            <div className='p-4 bg-muted rounded-lg'>
              <p className='text-sm font-medium'>Status:</p>
              <p className='text-sm text-muted-foreground'>
                {isAuthenticated
                  ? `Logged in as ${user?.name}`
                  : 'Not authenticated'}
              </p>
            </div>

            <div className='space-y-2'>
              <Button
                onClick={() => navigateToLogin()}
                variant='outline'
                className='w-full'
              >
                Go to Login
              </Button>

              <Button
                onClick={() => navigateToSignup()}
                variant='outline'
                className='w-full'
              >
                Go to Signup
              </Button>

              <Button
                onClick={handleProtectedAction}
                variant='outline'
                className='w-full'
              >
                Test Protected Route (should redirect to login)
              </Button>

              {isAuthenticated && (
                <Button
                  onClick={logout}
                  variant='destructive'
                  className='w-full'
                >
                  Logout
                </Button>
              )}

              <Button
                onClick={() => navigateToHome()}
                variant='ghost'
                className='w-full'
              >
                Go Home
              </Button>
            </div>

            <div className='text-xs text-muted-foreground space-y-1'>
              <p>Test scenarios:</p>
              <ul className='list-disc list-inside space-y-1'>
                <li>Login → Signup → Login → Back should go to home</li>
                <li>Signup → Login → Signup → Back should go to home</li>
                <li>
                  Successful login/signup should redirect to home or specified
                  URL
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
