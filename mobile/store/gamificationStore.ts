import { create } from 'zustand';

interface GamificationState {
  xp: number;
  currency: number;
  unlockedFeatures: string[];
  addXP: (amount: number) => void;
  addCurrency: (amount: number) => void;
  unlockFeature: (featureId: string) => void;
}

export const useGamificationStore = create<GamificationState>((set) => ({
  xp: 0,
  currency: 0,
  unlockedFeatures: [],
  addXP: (amount) => set((state) => ({ xp: state.xp + amount })),
  addCurrency: (amount) => set((state) => ({ currency: state.currency + amount })),
  unlockFeature: (featureId) =>
    set((state) => ({ unlockedFeatures: [...state.unlockedFeatures, featureId] })),
}));
