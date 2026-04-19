import { View, Text, StyleSheet } from 'react-native';

// TODO: Full habit management screen
// Supports: daily, weekly, monthly, quarterly, yearly habits
// Actions: create, edit, delete, mark complete, view streak
export default function HabitsScreen() {
  return (
    <View style={styles.container}>
      <Text>Habits Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
