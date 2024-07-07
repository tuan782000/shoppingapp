import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  FilterScreen,
  PrivacyPolicyScreen,
  SearchScreen,
  TernsandConditionsScreen,
} from '../../screens';
import DrawerNavigator from './DrawerNavigator';
// import {SplashScreen} from '../../screens';

const MainNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* Thuộc Bottom Navigator - 4 thằng này đã được gộp vào trong TabsNavigator */}
      {/* <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Notifications" component={NotificationScreen} /> */}

      {/* <Stack.Screen name="Home" component={TabsNavigator} /> */}
      <Stack.Screen name="Main" component={DrawerNavigator} />

      {/* Các màn hình ngoài không thuộc Bottom Navigator */}
      <Stack.Screen
        name="TernsandConditions"
        component={TernsandConditionsScreen}
      />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="FilterScreen" component={FilterScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
