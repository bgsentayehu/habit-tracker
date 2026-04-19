import { View, Text, StyleSheet } from 'react-native';
import { useAuth } from '../../hooks/useAuth';

// TODO: Implement login screen
// Supports: Google, Apple, Email, Phone
export default function LoginScreen() {
  const { signInWithGoogle, signInWithApple, signInWithEmail, signInWithPhone } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Habit Tracker</Text>
      <Text style={styles.subtitle}>Build better habits. Together.</Text>
      {/* Auth buttons go here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
  title: { fontSize: 32, fontWeight: 'bold' },
  subtitle: { fontSize: 16, color: '#666', marginTop: 8 },
});
