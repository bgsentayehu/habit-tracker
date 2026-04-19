from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

# Auth is handled by Supabase on the client side.
# These endpoints handle post-auth actions (e.g. syncing user profile to our DB).

class SyncUserRequest(BaseModel):
    supabase_id: str
    email: str | None = None
    phone: str | None = None
    first_name: str = ""
    last_name: str = ""


@router.post("/sync")
async def sync_user(body: SyncUserRequest):
    # TODO: upsert user in DB after Supabase auth
    pass
