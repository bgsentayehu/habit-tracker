import { useAuthStore } from '../store/authStore';

// TODO: Wire up Supabase Auth
export function useAuth() {
  const { session, setSession } = useAuthStore();

  async function signInWithGoogle() {
    // TODO: Supabase Google OAuth
  }

  async function signInWithApple() {
    // TODO: Supabase Apple OAuth
  }

  async function signInWithEmail(email: string, password: string) {
    // TODO: Supabase email/password
  }

  async function signInWithPhone(phone: string) {
    // TODO: Supabase phone OTP
  }

  async function signOut() {
    // TODO: Supabase sign out
    setSession(null);
  }

  return { session, signInWithGoogle, signInWithApple, signInWithEmail, signInWithPhone, signOut };
}
