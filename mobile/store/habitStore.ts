import { create } from 'zustand';
import { Habit, Streak } from '../types';

interface HabitState {
  habits: Habit[];
  streaks: Record<string, Streak>;
  setHabits: (habits: Habit[]) => void;
  setStreak: (habitId: string, streak: Streak) => void;
}

export const useHabitStore = create<HabitState>((set) => ({
  habits: [],
  streaks: {},
  setHabits: (habits) => set({ habits }),
  setStreak: (habitId, streak) =>
    set((state) => ({ streaks: { ...state.streaks, [habitId]: streak } })),
}));
