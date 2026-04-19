from fastapi import APIRouter, Depends
from pydantic import BaseModel
from src.core.dependencies import get_current_user
from src.agents.habit_coach import HabitCoachAgent

router = APIRouter()


class ChatRequest(BaseModel):
    message: str
    personality: str = "gentle_coach"
    history: list[dict] = []


class ChatResponse(BaseModel):
    reply: str


@router.post("/chat", response_model=ChatResponse)
async def chat(body: ChatRequest, user=Depends(get_current_user)):
    agent = HabitCoachAgent(personality=body.personality)
    reply = await agent.respond(
        message=body.message,
        history=body.history,
        user=user,
    )
    return ChatResponse(reply=reply)
