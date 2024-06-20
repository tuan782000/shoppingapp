import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Notifications} from '../../screens';

const NotificationNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="NotificationScreen" component={Notifications} />
    </Stack.Navigator>
  );
};

export default NotificationNavigator;
