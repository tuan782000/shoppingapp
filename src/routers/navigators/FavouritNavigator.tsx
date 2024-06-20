import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {FavouritScreen, HomeScreen} from '../../screens';

const FavouritNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="FavouritScreen" component={FavouritScreen} />
    </Stack.Navigator>
  );
};

export default FavouritNavigator;
