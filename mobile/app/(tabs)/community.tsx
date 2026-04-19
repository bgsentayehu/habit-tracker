import { View, Text, StyleSheet } from 'react-native';

// TODO: Community screen
// Features: shared habits, group streaks, leaderboard
export default function CommunityScreen() {
  return (
    <View style={styles.container}>
      <Text>Community Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
