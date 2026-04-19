import * as Notifications from 'expo-notifications';

// TODO: Register device token + schedule motivational push notifications
export async function registerForPushNotifications(): Promise<string | null> {
  const { status } = await Notifications.requestPermissionsAsync();
  if (status !== 'granted') return null;

  const token = (await Notifications.getExpoPushTokenAsync()).data;
  return token;
}

export async function scheduleHabitReminder(habitTitle: string, scheduledTime: Date) {
  // TODO: schedule local notification for habit reminder
}
