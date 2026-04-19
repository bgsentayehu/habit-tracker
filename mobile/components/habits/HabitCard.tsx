import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Habit } from '../../types';
import { HabitStreak } from './HabitStreak';

interface Props {
  habit: Habit;
  onComplete?: () => void;
}

// TODO: Habit card with complete button, streak, and share option
export function HabitCard({ habit, onComplete }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.info}>
        <Text style={styles.title}>{habit.title}</Text>
        <Text style={styles.frequency}>{habit.frequency}</Text>
        <HabitStreak habitId={habit.id} />
      </View>
      <TouchableOpacity style={styles.completeBtn} onPress={onComplete}>
        <Text style={styles.completeBtnText}>✓</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: 'row', alignItems: 'center', padding: 16, backgroundColor: '#fff', borderRadius: 12, marginBottom: 8, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 4, elevation: 2 },
  info: { flex: 1 },
  title: { fontSize: 16, fontWeight: '600' },
  frequency: { fontSize: 12, color: '#999', marginTop: 2 },
  completeBtn: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#4CAF50', justifyContent: 'center', alignItems: 'center' },
  completeBtnText: { color: '#fff', fontSize: 18 },
});
