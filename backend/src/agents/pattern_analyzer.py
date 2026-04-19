"""
Analyzes user habit completion patterns to determine:
- Most productive times of day
- Most lazy periods
- Habit completion rate trends
- Optimal reminder scheduling
"""
from datetime import datetime
from collections import defaultdict


class PatternAnalyzer:
    def __init__(self, completions: list[dict]):
        self.completions = completions

    def most_productive_hours(self) -> list[int]:
        """Returns hours of day (0-23) sorted by completion frequency."""
        hour_counts: dict[int, int] = defaultdict(int)
        for c in self.completions:
            hour = datetime.fromisoformat(c["completed_at"]).hour
            hour_counts[hour] += 1
        return sorted(hour_counts, key=lambda h: hour_counts[h], reverse=True)

    def completion_rate(self, days: int = 30) -> float:
        """Returns completion rate as 0.0 - 1.0 for the last N days."""
        # TODO: implement based on habit frequency and expected completions
        return 0.0

    def summary_for_ai(self) -> str:
        """Returns a plain-English summary of patterns for injection into AI context."""
        productive = self.most_productive_hours()
        top_hours = productive[:3] if productive else []
        hour_strs = [f"{h}:00" for h in top_hours]
        return f"User is most active around: {', '.join(hour_strs) or 'unknown'}."
