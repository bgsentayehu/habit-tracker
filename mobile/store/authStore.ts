import { create } from 'zustand';

interface AuthState {
  session: any | null;
  setSession: (session: any | null) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  session: null,
  setSession: (session) => set({ session }),
}));
