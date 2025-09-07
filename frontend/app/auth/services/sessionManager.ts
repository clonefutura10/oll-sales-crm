import { User } from '@/lib/constants/auth';

const SESSION_TIMEOUT = 30 * 60 * 1000; // 30 minutes in milliseconds
const ACTIVITY_UPDATE_INTERVAL = 5 * 60 * 1000; // Update activity every 5 minutes

interface SessionData {
  user: User;
  lastActivity: number;
  expiresAt: number;
}

class SessionManager {
  private currentSession: SessionData | null = null;
  private activityTimer: NodeJS.Timeout | null = null;
  private onTimeoutCallback: (() => void) | null = null;

  constructor() {
    this.startActivityMonitoring();
  }

  /**
   * Creates a new session for the authenticated user
   */
  createSession(user: User): void {
    const now = Date.now();
    this.currentSession = {
      user,
      lastActivity: now,
      expiresAt: now + SESSION_TIMEOUT,
    };

    this.resetActivityTimer();
  }

  /**
   * Gets the current session data if valid
   */
  getSession(): User | null {
    if (!this.currentSession) {
      return null;
    }

    const now = Date.now();
    if (now > this.currentSession.expiresAt) {
      this.clearSession();
      return null;
    }

    return this.currentSession.user;
  }

  /**
   * Updates last activity timestamp to extend session
   */
  updateActivity(): void {
    if (!this.currentSession) {
      return;
    }

    const now = Date.now();
    this.currentSession.lastActivity = now;
    this.currentSession.expiresAt = now + SESSION_TIMEOUT;
  }

  /**
   * Clears the current session
   */
  clearSession(): void {
    this.currentSession = null;
    this.stopActivityTimer();
  }

  /**
   * Sets a callback to be executed when session times out
   */
  setOnTimeout(callback: () => void): void {
    this.onTimeoutCallback = callback;
  }

  /**
   * Checks if session is active and valid
   */
  isSessionValid(): boolean {
    if (!this.currentSession) {
      return false;
    }

    const now = Date.now();
    return now <= this.currentSession.expiresAt;
  }

  /**
   * Gets time remaining in session (in milliseconds)
   */
  getTimeRemaining(): number {
    if (!this.currentSession) {
      return 0;
    }

    const now = Date.now();
    const remaining = this.currentSession.expiresAt - now;
    return Math.max(0, remaining);
  }

  /**
   * Starts activity monitoring timer
   */
  private startActivityMonitoring(): void {
    this.activityTimer = setInterval(() => {
      this.checkSessionTimeout();
    }, ACTIVITY_UPDATE_INTERVAL);
  }

  /**
   * Checks if session has timed out and triggers callback if needed
   */
  private checkSessionTimeout(): void {
    if (!this.currentSession) {
      return;
    }

    const now = Date.now();
    if (now > this.currentSession.expiresAt) {
      this.clearSession();
      if (this.onTimeoutCallback) {
        this.onTimeoutCallback();
      }
    }
  }

  /**
   * Resets the activity timer
   */
  private resetActivityTimer(): void {
    this.stopActivityTimer();
    this.startActivityMonitoring();
  }

  /**
   * Stops the activity monitoring timer
   */
  private stopActivityTimer(): void {
    if (this.activityTimer) {
      clearInterval(this.activityTimer);
      this.activityTimer = null;
    }
  }

  /**
   * Cleanup method to be called when the session manager is no longer needed
   */
  cleanup(): void {
    this.stopActivityTimer();
    this.onTimeoutCallback = null;
  }
}

// Create singleton instance
export const sessionManager = new SessionManager();

// Export for testing purposes
export { SessionManager };
