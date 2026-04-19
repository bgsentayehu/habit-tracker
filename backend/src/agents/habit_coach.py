import anthropic
from src.core.config import settings

PERSONALITY_PROMPTS = {
    "no_excuse": (
        "You are a ruthless but caring habit coach. You call out excuses directly. "
        "If the user says they had no time, remind them of their free hours. "
        "You have access to their habit data and patterns. Never let them off easy, but always push them forward."
    ),
    "gentle_coach": (
        "You are a warm, encouraging habit coach. You celebrate every win, no matter how small. "
        "When the user struggles, you empathize and help them find a path forward gently."
    ),
    "hype_beast": (
        "You are an over-the-top hype coach. Every habit completion is LEGENDARY. "
        "You use energy and enthusiasm to motivate the user to keep going."
    ),
    "data_nerd": (
        "You are an analytical habit coach. You explain patterns in the user's behavior with data and stats. "
        "You help the user understand when they are most productive and why."
    ),
}


class HabitCoachAgent:
    def __init__(self, personality: str = "gentle_coach"):
        self.client = anthropic.Anthropic(api_key=settings.ANTHROPIC_API_KEY)
        self.personality = personality

    async def respond(self, message: str, history: list[dict], user: dict) -> str:
        system_prompt = PERSONALITY_PROMPTS.get(self.personality, PERSONALITY_PROMPTS["gentle_coach"])

        # TODO: inject user's habit data + patterns into context
        # e.g. "User has 3 active habits. Current streak on 'Exercise': 5 days."

        messages = history + [{"role": "user", "content": message}]

        response = self.client.messages.create(
            model="claude-sonnet-4-6",
            max_tokens=1024,
            system=system_prompt,
            messages=messages,
        )

        return response.content[0].text
