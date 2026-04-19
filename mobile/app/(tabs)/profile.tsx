import { View, Text, StyleSheet } from 'react-native';

// TODO: Profile management screen
// Fields: profile picture, first/last name, email, phone (optional), birthday
// Actions: edit profile, logout
export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
