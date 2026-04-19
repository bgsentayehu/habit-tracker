import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { AIPersonality } from '../../types';
import { AI_PERSONALITIES } from '../../constants';

interface Props {
  current: AIPersonality;
  onChange: (p: AIPersonality) => void;
}

export function PersonalitySelector({ current, onChange }: Props) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
      {Object.values(AI_PERSONALITIES).map((p) => (
        <TouchableOpacity
          key={p.id}
          style={[styles.chip, current === p.id && styles.activeChip]}
          onPress={() => onChange(p.id as AIPersonality)}
        >
          <Text>{p.emoji} {p.label}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 12, paddingVertical: 8, borderBottomWidth: 1, borderColor: '#eee' },
  chip: { paddingHorizontal: 14, paddingVertical: 8, borderRadius: 20, backgroundColor: '#F0F0F0', marginRight: 8 },
  activeChip: { backgroundColor: '#007AFF' },
});
