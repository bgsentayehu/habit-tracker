import { useState } from 'react';
import { ChatMessage, AIPersonality } from '../types';
import { api } from '../services/api';

// TODO: AI chat hook — streams responses from backend Claude agent
export function useAI() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [personality, setPersonality] = useState<AIPersonality>('gentle_coach');
  const [loading, setLoading] = useState(false);

  async function sendMessage(content: string) {
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content,
      timestamp: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, userMsg]);

    setLoading(true);
    try {
      // TODO: POST /ai/chat with personality + message history
      const response = await api.post('/ai/chat', { message: content, personality, history: messages });
      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response.data.reply,
        timestamp: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, aiMsg]);
    } finally {
      setLoading(false);
    }
  }

  return { messages, sendMessage, personality, setPersonality, loading };
}
