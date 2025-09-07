'use client';

import React, {
  createContext,
  useState,
  useCallback,
  ReactNode,
  useEffect,
} from 'react';
import { User } from '@/lib/constants/auth';
import {
  login as loginService,
  signup as signupService,
} from '../services/authService';
import { sessionManager } from '../services/sessionManager';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Initialize session on mount
  useEffect(() => {
    // Check for existing valid session
    const sessionUser = sessionManager.getSession();
    if (sessionUser) {
      setUser(sessionUser);
    }

    // Set up session timeout callback
    sessionManager.setOnTimeout(() => {
      setUser(null);
      setError('Session expired. Please log in again.');
    });

    // Cleanup on unmount
    return () => {
      sessionManager.setOnTimeout(() => {});
    };
  }, []);

  // Monitor user activity to extend session
  useEffect(() => {
    if (!user) return;

    const handleActivity = () => {
      sessionManager.updateActivity();
    };

    // Listen for user activity
    const events = ['mousedown', 'keydown', 'scroll', 'touchstart'];
    events.forEach(event => {
      document.addEventListener(event, handleActivity);
    });

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleActivity);
      });
    };
  }, [user]);

  const login = useCallback(async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const userData = await loginService(email, password);
      setUser(userData);

      // Create session with timeout
      sessionManager.createSession(userData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const signup = useCallback(
    async (name: string, email: string, password: string) => {
      setIsLoading(true);
      setError(null);

      try {
        const userData = await signupService(name, email, password);
        setUser(userData);

        // Create session with timeout
        sessionManager.createSession(userData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Signup failed');
        throw err;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const logout = useCallback(() => {
    setUser(null);
    setError(null);

    // Clear session
    sessionManager.clearSession();
  }, []);

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    error,
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
