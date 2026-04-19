from fastapi import APIRouter, Depends
from pydantic import BaseModel
from src.core.dependencies import get_current_user

router = APIRouter()


class UpdateProfileRequest(BaseModel):
    first_name: str | None = None
    last_name: str | None = None
    birthday: str | None = None
    avatar_url: str | None = None


@router.get("/me")
async def get_profile(user=Depends(get_current_user)):
    # TODO: return current user profile
    pass


@router.patch("/me")
async def update_profile(body: UpdateProfileRequest, user=Depends(get_current_user)):
    # TODO: update profile fields
    pass
