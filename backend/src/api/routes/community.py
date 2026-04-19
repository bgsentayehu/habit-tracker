from fastapi import APIRouter, Depends
from src.core.dependencies import get_current_user

router = APIRouter()


@router.get("/habits")
async def list_shared_habits(user=Depends(get_current_user)):
    # TODO: return publicly shared habits + group streaks
    return []


@router.post("/habits/{habit_id}/join")
async def join_shared_habit(habit_id: str, user=Depends(get_current_user)):
    # TODO: join a shared community habit
    pass


@router.get("/leaderboard")
async def leaderboard(user=Depends(get_current_user)):
    # TODO: return top users by XP or streak
    return []
