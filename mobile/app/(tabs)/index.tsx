import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useHabits } from '../../hooks/useHabits';
import { HabitCard } from '../../components/habits/HabitCard';
import { XPBar } from '../../components/gamification/XPBar';

// TODO: Home/Dashboard — today's habits, streaks summary, XP bar
export default function HomeScreen() {
  const { todayHabits } = useHabits();

  return (
    <ScrollView style={styles.container}>
      <XPBar />
      <Text style={styles.heading}>Today's Habits</Text>
      {todayHabits.map((habit) => (
        <HabitCard key={habit.id} habit={habit} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  heading: { fontSize: 22, fontWeight: 'bold', marginVertical: 12 },
});
