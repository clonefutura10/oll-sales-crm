'use client';

import { AuthCard } from '@/app/auth/components/AuthCard';
import { AuthForm } from '@/app/auth/components/AuthForm';

export default function AuthExamplePage() {
  const handleLogin = async (email: string, password: string) => {
    // Simulate API call
    console.log('Login attempt:', { email, password });

    // Simulate delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // For demo purposes, just log success
    console.log('Login successful!');

    // In a real app, you would:
    // 1. Call your authentication API
    // 2. Handle success/error responses
    // 3. Redirect on success
    // 4. Show error messages on failure
  };

  const handleSignup = async (email: string, password: string) => {
    // Simulate API call
    console.log('Signup attempt:', { email, password });

    // Simulate delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // For demo purposes, just log success
    console.log('Signup successful!');

    // In a real app, you would:
    // 1. Call your registration API
    // 2. Handle success/error responses
    // 3. Redirect on success
    // 4. Show error messages on failure
  };

  return (
    <div className='min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-4xl mx-auto space-y-12'>
        {/* Login Example */}
        <div>
          <h2 className='text-3xl font-bold text-center text-foreground mb-8'>
            Login Example
          </h2>
          <AuthCard
            title='Welcome Back'
            description='Sign in to your account to continue'
          >
            <AuthForm type='login' onSubmit={handleLogin} />
          </AuthCard>
        </div>

        {/* Signup Example */}
        <div>
          <h2 className='text-3xl font-bold text-center text-foreground mb-8'>
            Signup Example
          </h2>
          <AuthCard
            title='Create Account'
            description='Join us today and get started'
          >
            <AuthForm type='signup' onSubmit={handleSignup} />
          </AuthCard>
        </div>

        {/* Minimal Example */}
        <div>
          <h2 className='text-3xl font-bold text-center text-foreground mb-8'>
            Minimal Example
          </h2>
          <AuthCard>
            <AuthForm type='login' onSubmit={handleLogin} />
          </AuthCard>
        </div>
      </div>
    </div>
  );
}
