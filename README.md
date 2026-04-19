# Habit Tracker

> AI-first habit enforcement tool to make good habits stick and bad habits go away — as a community.

## Mission
Build a community-driven, AI-powered habit platform where users are held accountable, motivated, and rewarded for building better lives.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Mobile | React Native (Expo) + TypeScript |
| Backend | FastAPI (Python 3.13+) |
| AI | Claude API (Anthropic) |
| Database | PostgreSQL + Redis |
| Auth | Supabase (Google, Apple, Email, Phone) |
| Notifications | Expo Push Notifications |

## Project Structure

```
habit-tracker/
├── mobile/        # React Native Expo app
└── backend/       # FastAPI Python backend
```

## Getting Started

### Backend
```bash
cd backend
uv sync
cp .env.TEMPLATE .env   # fill in your keys
uvicorn src.main:app --reload
```

### Mobile
```bash
cd mobile
npm install
npx expo start
```

## Features
- Track habits (daily / weekly / monthly / quarterly / yearly)
- Habit streaks + shared community streaks
- AI chat — interact with every part of the app via conversation
- AI personalities (e.g. No Excuse Mode)
- AI learns your productive and lazy patterns
- Gamification — XP, currency, unlock features
- Social — share habits, compete on leaderboards
- Auth — Google, Apple, Email, Phone
