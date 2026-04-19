from fastapi import APIRouter, Depends
from pydantic import BaseModel
from src.core.dependencies import get_current_user
from src.models.habit import HabitFrequency

router = APIRouter()


class CreateHabitRequest(BaseModel):
    title: str
    description: str | None = None
    frequency: HabitFrequency = HabitFrequency.daily
    is_shared: bool = False


# TODO: implement full CRUD + completion logic

@router.get("/")
async def list_habits(user=Depends(get_current_user)):
    # TODO: return user's habits
    return []


@router.post("/")
async def create_habit(body: CreateHabitRequest, user=Depends(get_current_user)):
    # TODO: create habit in DB
    pass


@router.post("/{habit_id}/complete")
async def complete_habit(habit_id: str, user=Depends(get_current_user)):
    # TODO: mark habit complete, update streak, award XP
    pass


@router.get("/{habit_id}/streak")
async def get_streak(habit_id: str, user=Depends(get_current_user)):
    # TODO: return streak for habit
    pass


@router.delete("/{habit_id}")
async def delete_habit(habit_id: str, user=Depends(get_current_user)):
    # TODO: soft-delete habit
    pass
