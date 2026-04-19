import { useState } from 'react';
import { Streak } from '../types';
import { api } from '../services/api';

// TODO: Fetch and display habit streaks
export function useStreak(habitId: string) {
  const [streak, setStreak] = useState<Streak | null>(null);

  async function fetchStreak() {
    // TODO: GET /habits/:id/streak
  }

  return { streak, fetchStreak };
}
