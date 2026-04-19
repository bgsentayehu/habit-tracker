from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from src.api.routes import auth, habits, users, ai, community, gamification
from src.core.config import settings

app = FastAPI(title="Habit Tracker API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix="/auth", tags=["auth"])
app.include_router(users.router, prefix="/users", tags=["users"])
app.include_router(habits.router, prefix="/habits", tags=["habits"])
app.include_router(ai.router, prefix="/ai", tags=["ai"])
app.include_router(community.router, prefix="/community", tags=["community"])
app.include_router(gamification.router, prefix="/gamification", tags=["gamification"])


@app.get("/health")
async def health():
    return {"status": "ok"}
