import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

export interface AuthNavigationOptions {
  redirect?: string;
  replace?: boolean;
}

/**
 * Custom hook for authentication page navigation
 * Handles proper history management to avoid navigation loops
 */
export const useAuthNavigation = () => {
  const router = useRouter();

  /**
   * Navigate to login page with proper history management
   */
  const navigateToLogin = useCallback(
    (options?: AuthNavigationOptions) => {
      const { redirect, replace = true } = options || {};
      const url = new URL('/auth/login', window.location.origin);

      if (redirect) {
        url.searchParams.set('redirect', redirect);
      }

      if (replace) {
        router.replace(url.toString());
      } else {
        router.push(url.toString());
      }
    },
    [router]
  );

  /**
   * Navigate to signup page with proper history management
   */
  const navigateToSignup = useCallback(
    (options?: AuthNavigationOptions) => {
      const { redirect, replace = true } = options || {};
      const url = new URL('/auth/signup', window.location.origin);

      if (redirect) {
        url.searchParams.set('redirect', redirect);
      }

      if (replace) {
        router.replace(url.toString());
      } else {
        router.push(url.toString());
      }
    },
    [router]
  );

  /**
   * Navigate to home/dashboard after successful authentication
   */
  const navigateToHome = useCallback(
    (options?: AuthNavigationOptions) => {
      const { redirect, replace = true } = options || {};
      const targetUrl = redirect || '/';

      if (replace) {
        router.replace(targetUrl);
      } else {
        router.push(targetUrl);
      }
    },
    [router]
  );

  /**
   * Navigate back with proper history management
   */
  const navigateBack = useCallback(() => {
    // Check if we can go back in history
    if (window.history.length > 1) {
      router.back();
    } else {
      // If no history, go to home
      router.replace('/');
    }
  }, [router]);

  /**
   * Get redirect URL from current URL search params
   */
  const getRedirectUrl = useCallback(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get('redirect') || undefined;
    }
    return undefined;
  }, []);

  return {
    navigateToLogin,
    navigateToSignup,
    navigateToHome,
    navigateBack,
    getRedirectUrl,
  };
};

/**
 * Utility function to create auth navigation links
 * Replaces regular Link components for auth pages
 */
export const createAuthNavigationHandler = (
  target: 'login' | 'signup' | 'home',
  options?: AuthNavigationOptions
) => {
  return (e: React.MouseEvent) => {
    e.preventDefault();

    // Use dynamic import to avoid SSR issues
    import('next/navigation').then(({ useRouter }) => {
      const router = useRouter();
      const { redirect, replace = true } = options || {};

      let url: string;
      switch (target) {
        case 'login':
          const loginUrl = new URL('/auth/login', window.location.origin);
          if (redirect) loginUrl.searchParams.set('redirect', redirect);
          url = loginUrl.toString();
          break;
        case 'signup':
          const signupUrl = new URL('/auth/signup', window.location.origin);
          if (redirect) signupUrl.searchParams.set('redirect', redirect);
          url = signupUrl.toString();
          break;
        case 'home':
          url = redirect || '/';
          break;
      }

      if (replace) {
        router.replace(url);
      } else {
        router.push(url);
      }
    });
  };
};

/**
 * Navigation utility for programmatic auth navigation
 */
export const authNavigation = {
  toLogin: (redirect?: string) => {
    const url = new URL('/auth/login', window.location.origin);
    if (redirect) url.searchParams.set('redirect', redirect);

    if (typeof window !== 'undefined') {
      window.location.replace(url.toString());
    }
  },

  toSignup: (redirect?: string) => {
    const url = new URL('/auth/signup', window.location.origin);
    if (redirect) url.searchParams.set('redirect', redirect);

    if (typeof window !== 'undefined') {
      window.location.replace(url.toString());
    }
  },

  toHome: (redirect?: string) => {
    const url = redirect || '/';

    if (typeof window !== 'undefined') {
      window.location.replace(url);
    }
  },
};
