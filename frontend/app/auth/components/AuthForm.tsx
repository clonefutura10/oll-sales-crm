'use client';

import * as React from 'react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';

export interface AuthFormProps {
  type: 'login' | 'signup';
  onSubmit: (email: string, password: string, name?: string) => void;
  className?: string;
}

interface FormData {
  email: string;
  password: string;
  name?: string;
  confirmPassword?: string;
}

export function AuthForm({ type, onSubmit, className }: AuthFormProps) {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
      name: '',
      confirmPassword: '',
    },
  });

  const handleSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      if (type === 'signup') {
        await onSubmit(data.email, data.password, data.name);
      } else {
        await onSubmit(data.email, data.password);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const validateEmail = (email: string | undefined) => {
    if (!email) {
      return 'Email is required';
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      return 'Please enter a valid email address';
    }
    return true;
  };

  const validatePassword = (password: string | undefined) => {
    if (!password) {
      return 'Password is required';
    }
    if (password.length < 6) {
      return 'Password must be at least 6 characters';
    }
    return true;
  };

  const validateName = (name: string | undefined) => {
    if (type === 'signup' && !name) {
      return 'Name is required';
    }
    if (type === 'signup' && name && name.length < 2) {
      return 'Name must be at least 2 characters';
    }
    return true;
  };

  const validateConfirmPassword = (confirmPassword: string | undefined) => {
    if (type === 'signup' && !confirmPassword) {
      return 'Please confirm your password';
    }
    if (
      type === 'signup' &&
      confirmPassword &&
      confirmPassword !== form.getValues('password')
    ) {
      return 'Passwords do not match';
    }
    return true;
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className={`space-y-6 ${className || ''}`}
      >
        {type === 'signup' && (
          <FormField
            control={form.control}
            name='name'
            rules={{
              validate: validateName,
            }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    type='text'
                    placeholder='Enter your name'
                    autoComplete='name'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <FormField
          control={form.control}
          name='email'
          rules={{
            validate: validateEmail,
          }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type='email'
                  placeholder='Enter your email'
                  autoComplete='email'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='password'
          rules={{
            validate: validatePassword,
          }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type='password'
                  placeholder='Enter your password'
                  autoComplete={
                    type === 'login' ? 'current-password' : 'new-password'
                  }
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {type === 'signup' && (
          <FormField
            control={form.control}
            name='confirmPassword'
            rules={{
              validate: validateConfirmPassword,
            }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    type='password'
                    placeholder='Confirm your password'
                    autoComplete='new-password'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <Button type='submit' className='w-full' disabled={isLoading}>
          {isLoading
            ? 'Processing...'
            : type === 'login'
              ? 'Sign In'
              : 'Sign Up'}
        </Button>
      </form>
    </Form>
  );
}
