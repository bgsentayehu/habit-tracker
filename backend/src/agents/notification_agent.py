"""
Sends motivational push notifications via Expo Push API.
Uses pattern analyzer to schedule at optimal times.
"""
import httpx
from src.agents.pattern_analyzer import PatternAnalyzer


EXPO_PUSH_URL = "https://exp.host/--/api/v2/push/send"


async def send_push_notification(token: str, title: str, body: str) -> None:
    async with httpx.AsyncClient() as client:
        await client.post(EXPO_PUSH_URL, json={
            "to": token,
            "title": title,
            "body": body,
            "sound": "default",
        })


async def send_motivational_nudge(user_token: str, habit_title: str, streak: int) -> None:
    messages = [
        f"Keep it going! Your '{habit_title}' streak is at {streak} days 🔥",
        f"Don't break the chain! '{habit_title}' is waiting for you.",
        f"{streak} days strong on '{habit_title}'. You're unstoppable.",
    ]
    import random
    body = random.choice(messages)
    await send_push_notification(user_token, "Habit Reminder", body)
