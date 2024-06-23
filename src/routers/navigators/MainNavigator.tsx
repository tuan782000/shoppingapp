import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {HomeScreen, ProductScreen, SearchScreen} from '../../screens';
import Notifications from '../../screens/notifications/Notifications';
import TernsandConditions from '../../screens/TernsandConditions';
import PrivacyPolicy from '../../screens/PrivacyPolicy';
import TabsNavigator from './TabsNavigator';

const MainNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={TabsNavigator} />
      <Stack.Screen name="TernsandConditions" component={TernsandConditions} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Stack.Screen name="Notifications" component={Notifications} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
