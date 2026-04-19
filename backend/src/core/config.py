from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    DATABASE_URL: str = "postgresql://postgres:postgres@localhost:5432/habittracker"
    REDIS_URL: str = "redis://localhost:6379"
    SUPABASE_URL: str = ""
    SUPABASE_SERVICE_KEY: str = ""
    ANTHROPIC_API_KEY: str = ""
    ALLOWED_ORIGINS: list[str] = ["http://localhost:3000", "exp://localhost:8081"]
    JWT_SECRET: str = "change-me-in-production"

    class Config:
        env_file = ".env"


settings = Settings()
