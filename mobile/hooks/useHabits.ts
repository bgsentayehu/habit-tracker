import { useState, useEffect } from 'react';
import { Habit } from '../types';
import { api } from '../services/api';

// TODO: Fetch and manage habits from backend
export function useHabits() {
  const [habits, setHabits] = useState<Habit[]>([]);
  const [todayHabits, setTodayHabits] = useState<Habit[]>([]);

  useEffect(() => {
    // TODO: load habits on mount
  }, []);

  async function createHabit(data: Partial<Habit>) {
    // TODO: POST /habits
  }

  async function completeHabit(habitId: string) {
    // TODO: POST /habits/:id/complete
  }

  async function deleteHabit(habitId: string) {
    // TODO: DELETE /habits/:id
  }

  return { habits, todayHabits, createHabit, completeHabit, deleteHabit };
}
