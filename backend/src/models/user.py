from sqlalchemy import Column, String, Date, DateTime, Integer
from sqlalchemy.orm import DeclarativeBase
from datetime import datetime


class Base(DeclarativeBase):
    pass


class User(Base):
    __tablename__ = "users"

    id = Column(String, primary_key=True)  # Supabase UUID
    email = Column(String, unique=True, nullable=True)
    phone = Column(String, unique=True, nullable=True)
    first_name = Column(String, nullable=False)
    last_name = Column(String, nullable=False)
    birthday = Column(Date, nullable=True)
    avatar_url = Column(String, nullable=True)
    xp = Column(Integer, default=0)
    currency = Column(Integer, default=0)
    push_token = Column(String, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
