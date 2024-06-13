import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {HomeScreen} from '../../screens';
import Notifications from '../../screens/others/Notifications';
import PrivacyPolicy from '../../screens/others/PrivacyPolicy';
import TernsandConditions from '../../screens/others/TernsandConditions';
import SearchScreen from '../../screens/searches/SearchScreen';
import ProductScreen from '../../screens/products/ProductScreen';
// import {SplashScreen} from '../../screens';

const MainNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="TernsandConditions" component={TernsandConditions} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Stack.Screen name="Notifications" component={Notifications} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
