import { View, Text, StyleSheet } from 'react-native';
import { useStreak } from '../../hooks/useStreak';

interface Props {
  habitId: string;
}

export function HabitStreak({ habitId }: Props) {
  const { streak } = useStreak(habitId);

  if (!streak) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.fire}>🔥</Text>
      <Text style={styles.count}>{streak.currentStreak} day streak</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', marginTop: 4 },
  fire: { fontSize: 14 },
  count: { fontSize: 13, color: '#FF6B35', marginLeft: 4, fontWeight: '500' },
});
