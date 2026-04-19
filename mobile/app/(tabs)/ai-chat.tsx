import { View, StyleSheet } from 'react-native';
import { ChatInput } from '../../components/ai/ChatInput';
import { ChatBubble } from '../../components/ai/ChatBubble';
import { PersonalitySelector } from '../../components/ai/PersonalitySelector';
import { useAI } from '../../hooks/useAI';

// TODO: AI Chat screen — users interact with every part of the app via chat
// AI personalities: No Excuse Mode, Gentle Coach, Hype Beast, etc.
export default function AIChatScreen() {
  const { messages, sendMessage, personality, setPersonality } = useAI();

  return (
    <View style={styles.container}>
      <PersonalitySelector current={personality} onChange={setPersonality} />
      <View style={styles.messages}>
        {messages.map((msg) => (
          <ChatBubble key={msg.id} message={msg} />
        ))}
      </View>
      <ChatInput onSend={sendMessage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  messages: { flex: 1, padding: 16 },
});
