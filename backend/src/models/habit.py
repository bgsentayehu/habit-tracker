from sqlalchemy import Column, String, Boolean, DateTime, Enum, ForeignKey, Integer
from sqlalchemy.orm import relationship
from datetime import datetime
import enum

from src.models.user import Base


class HabitFrequency(str, enum.Enum):
    daily = "daily"
    weekly = "weekly"
    monthly = "monthly"
    quarterly = "quarterly"
    yearly = "yearly"


class Habit(Base):
    __tablename__ = "habits"

    id = Column(String, primary_key=True)
    user_id = Column(String, ForeignKey("users.id"), nullable=False)
    title = Column(String, nullable=False)
    description = Column(String, nullable=True)
    frequency = Column(Enum(HabitFrequency), nullable=False, default=HabitFrequency.daily)
    is_shared = Column(Boolean, default=False)
    created_at = Column(DateTime, default=datetime.utcnow)

    completions = relationship("HabitCompletion", back_populates="habit")
    streak = relationship("Streak", back_populates="habit", uselist=False)


class HabitCompletion(Base):
    __tablename__ = "habit_completions"

    id = Column(String, primary_key=True)
    habit_id = Column(String, ForeignKey("habits.id"), nullable=False)
    completed_at = Column(DateTime, default=datetime.utcnow)

    habit = relationship("Habit", back_populates="completions")


class Streak(Base):
    __tablename__ = "streaks"

    habit_id = Column(String, ForeignKey("habits.id"), primary_key=True)
    current_streak = Column(Integer, default=0)
    longest_streak = Column(Integer, default=0)
    last_completed_at = Column(DateTime, nullable=True)

    habit = relationship("Habit", back_populates="streak")
