'use client';

import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

export const useAuth = () => {
  const context = useContext(AuthContext);
  
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  
  return context;
};

// Convenience hook for common auth operations
export const useAuthActions = () => {
  const { login, signup, logout, isLoading, error } = useAuth();
  
  return {
    login,
    signup,
    logout,
    isLoading,
    error,
  };
};

// Convenience hook for auth state
export const useAuthState = () => {
  const { user, isAuthenticated, isLoading, error } = useAuth();
  
  return {
    user,
    isAuthenticated,
    isLoading,
    error,
  };
};