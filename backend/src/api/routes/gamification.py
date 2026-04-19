from fastapi import APIRouter, Depends
from src.core.dependencies import get_current_user

router = APIRouter()


@router.get("/me")
async def get_my_gamification(user=Depends(get_current_user)):
    # TODO: return XP, currency, unlocked features
    pass


@router.get("/features")
async def list_unlockable_features(user=Depends(get_current_user)):
    # TODO: return all features and unlock cost
    return []


@router.post("/features/{feature_id}/unlock")
async def unlock_feature(feature_id: str, user=Depends(get_current_user)):
    # TODO: spend currency to unlock feature
    pass
