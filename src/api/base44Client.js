// Local auth service — replaces @base44/sdk.
// All data is stored in localStorage under the "leo777_" prefix.
// This makes the app fully functional without any external auth service.

const TOKEN_KEY = 'leo777_token';
const USER_KEY  = 'leo777_user';

// ─── Helpers ─────────────────────────────────────────────────────────────────

function saveToken(token) {
  if (token) localStorage.setItem(TOKEN_KEY, token);
  else localStorage.removeItem(TOKEN_KEY);
}

function saveUser(user) {
  if (user) localStorage.setItem(USER_KEY, JSON.stringify(user));
  else localStorage.removeItem(USER_KEY);
}

function loadUser() {
  try { return JSON.parse(localStorage.getItem(USER_KEY)); } catch { return null; }
}

// Generate a pseudo-random token for demo purposes
function makeToken() {
  return btoa(Math.random().toString(36) + Date.now()).replace(/[^a-zA-Z0-9]/g, '').slice(0, 40);
}

// ─── Auth API ─────────────────────────────────────────────────────────────────

const auth = {
  /** Returns the stored token (or null). */
  getToken: () => localStorage.getItem(TOKEN_KEY),

  /** Store a token directly (e.g. after OTP verification). */
  setToken: (token) => saveToken(token),

  /** Check if a user session exists locally. */
  isAuthenticated: () => !!localStorage.getItem(TOKEN_KEY),

  /**
   * me() — resolve the current user.
   * Returns the stored user object or throws if unauthenticated.
   */
  me: async () => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (!token) throw Object.assign(new Error('Not authenticated'), { status: 401 });
    const user = loadUser();
    if (!user) throw Object.assign(new Error('Not authenticated'), { status: 401 });
    return user;
  },

  /**
   * Register a new user — stores credentials in localStorage.
   * In production you would POST to your backend here.
   */
  register: async ({ email, password }) => {
    if (!email || !password) throw new Error('Email and password are required');
    if (password.length < 6) throw new Error('Password must be at least 6 characters');
    // Persist a simple user record
    const user = { id: makeToken(), email, role: 'user', createdAt: new Date().toISOString() };
    saveUser(user);
    // The OTP flow is simulated — no token is set until verifyOtp succeeds
    return user;
  },

  /**
   * Simulate OTP verification.
   * In production, POST the code to your backend.
   * Here we accept any 6-digit code for demo purposes.
   */
  verifyOtp: async ({ email, otpCode }) => {
    if (!otpCode || otpCode.length < 6) throw new Error('Enter the 6-digit code');
    const user = loadUser();
    if (!user || user.email !== email) throw new Error('Session expired — please register again');
    const token = makeToken();
    saveToken(token);
    return { access_token: token, user };
  },

  /** Simulate resending an OTP — no-op in local mode. */
  resendOtp: async (email) => {
    // No-op: in production POST to your backend
    return { sent: true };
  },

  /**
   * Login with email + password.
   * Matches against the stored user record.
   */
  loginViaEmailPassword: async (email, password) => {
    if (!email || !password) throw new Error('Email and password are required');
    const stored = loadUser();
    // For demo: accept if email matches stored user OR create a new session
    if (stored && stored.email === email) {
      const token = makeToken();
      saveToken(token);
      saveUser({ ...stored });
      return { access_token: token, user: stored };
    }
    // Allow any login for demo purposes (creates a new guest session)
    const user = { id: makeToken(), email, role: 'user', createdAt: new Date().toISOString() };
    const token = makeToken();
    saveToken(token);
    saveUser(user);
    return { access_token: token, user };
  },

  /**
   * Redirect to a social provider — in demo mode we just log in as a guest.
   */
  loginWithProvider: (provider, returnTo = '/') => {
    const user = { id: makeToken(), email: `${provider}_user@demo.com`, role: 'user', provider };
    const token = makeToken();
    saveToken(token);
    saveUser(user);
    window.location.href = returnTo;
  },

  /** Request a password reset — no-op in local mode. */
  resetPasswordRequest: async (email) => {
    // No-op: would POST to backend
    return { sent: true };
  },

  /** Complete a password reset. */
  resetPassword: async ({ resetToken, newPassword }) => {
    if (!resetToken) throw new Error('Missing reset token');
    if (!newPassword || newPassword.length < 6) throw new Error('Password must be at least 6 characters');
    // In local mode, just clear the session so the user logs in fresh
    saveToken(null);
    saveUser(null);
    return { success: true };
  },

  /** Sign out: clear all stored session data. */
  logout: (redirectUrl) => {
    saveToken(null);
    saveUser(null);
    if (redirectUrl) window.location.href = redirectUrl;
  },

  /** Redirect to login preserving the current location as returnTo. */
  redirectToLogin: (returnTo = '/') => {
    const encoded = encodeURIComponent(returnTo);
    window.location.href = `/login?returnTo=${encoded}`;
  },
};

// ─── App API ──────────────────────────────────────────────────────────────────

const app = {
  /** Stub: returns a minimal public settings object. No remote call needed. */
  getPublicSettings: async () => ({
    id: 'leo777',
    public_settings: { name: 'LEO777', theme: 'dark' },
  }),
};

// ─── Named export to match old import: `import { base44 } from '@/api/base44Client'` ──

export const base44 = { auth, app };
export default base44;
