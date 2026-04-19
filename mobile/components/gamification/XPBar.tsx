import { View, Text, StyleSheet } from 'react-native';
import { useGamificationStore } from '../../store/gamificationStore';

const XP_PER_LEVEL = 500;

export function XPBar() {
  const { xp, currency } = useGamificationStore();
  const level = Math.floor(xp / XP_PER_LEVEL) + 1;
  const progress = (xp % XP_PER_LEVEL) / XP_PER_LEVEL;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.level}>Level {level}</Text>
        <Text style={styles.currency}>💰 {currency}</Text>
      </View>
      <View style={styles.track}>
        <View style={[styles.fill, { width: `${progress * 100}%` }]} />
      </View>
      <Text style={styles.xpText}>{xp % XP_PER_LEVEL} / {XP_PER_LEVEL} XP</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#fff', borderRadius: 12, padding: 16, marginBottom: 12 },
  header: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  level: { fontWeight: 'bold', fontSize: 16 },
  currency: { fontSize: 14 },
  track: { height: 8, backgroundColor: '#F0F0F0', borderRadius: 4, overflow: 'hidden' },
  fill: { height: '100%', backgroundColor: '#007AFF', borderRadius: 4 },
  xpText: { fontSize: 12, color: '#999', marginTop: 4 },
});
