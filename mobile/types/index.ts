export type HabitFrequency = 'daily' | 'weekly' | 'monthly' | 'quarterly' | 'yearly';

export type AIPersonality = 'no_excuse' | 'gentle_coach' | 'hype_beast' | 'data_nerd';

export interface User {
  id: string;
  email?: string;
  phone?: string;
  firstName: string;
  lastName: string;
  birthday?: string;
  avatarUrl?: string;
  xp: number;
  currency: number;
}

export interface Habit {
  id: string;
  userId: string;
  title: string;
  description?: string;
  frequency: HabitFrequency;
  isShared: boolean;
  createdAt: string;
}

export interface Streak {
  habitId: string;
  currentStreak: number;
  longestStreak: number;
  lastCompletedAt: string;
}

export interface HabitCompletion {
  id: string;
  habitId: string;
  completedAt: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export interface CommunityHabit {
  habit: Habit;
  members: User[];
  groupStreak: number;
}
