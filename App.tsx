import React, { useEffect, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Notifications from 'expo-notifications';
import { registerForPushNotificationsAsync } from './src/notifications';
import HomeScreen from './src/HomeScreen';
import SnacksScreen from './src/SnacksScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const navigationRef = useRef<any>(null);
  const notificationListener = useRef<any>();
  const responseListener = useRef<any>();

  useEffect(() => {
    registerForPushNotificationsAsync();

    // Listen for notifications received while app is foregrounded
    notificationListener.current = Notifications.addNotificationReceivedListener(() => {
      // Notification received — no extra action needed, handler shows it
    });

    // Handle tap on notification — navigate to SnacksScreen
    responseListener.current = Notifications.addNotificationResponseReceivedListener((response) => {
      const data = response.notification.request.content.data as any;
      if (data && navigationRef.current) {
        navigationRef.current.navigate('Snacks', {
          placeName: data.placeName || 'Nearby Place',
          isRestaurant: data.isRestaurant || false,
          snacks: data.snacks || [],
        });
      }
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#4CAF50' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: '700' },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'No Sweets Challenge' }}
        />
        <Stack.Screen
          name="Snacks"
          component={SnacksScreen}
          options={{ title: 'Healthy Snack Ideas' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
