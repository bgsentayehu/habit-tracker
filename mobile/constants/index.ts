export const BACKEND_URL = process.env.EXPO_PUBLIC_BACKEND_URL ?? 'http://localhost:8000';

export const AI_PERSONALITIES = {
  no_excuse: {
    id: 'no_excuse',
    label: 'No Excuse Mode',
    description: '"You said no time, but you had 2 free hours yesterday."',
    emoji: '🔥',
  },
  gentle_coach: {
    id: 'gentle_coach',
    label: 'Gentle Coach',
    description: 'Encouraging, supportive, and patient.',
    emoji: '💚',
  },
  hype_beast: {
    id: 'hype_beast',
    label: 'Hype Beast',
    description: 'Over-the-top hype for every win.',
    emoji: '🚀',
  },
  data_nerd: {
    id: 'data_nerd',
    label: 'Data Nerd',
    description: 'Shows you the stats behind your habits.',
    emoji: '📊',
  },
};

export const XP_REWARDS = {
  complete_habit: 10,
  streak_milestone_7: 50,
  streak_milestone_30: 200,
  share_habit: 20,
};
