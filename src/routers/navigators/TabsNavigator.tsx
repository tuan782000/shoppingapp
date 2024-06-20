import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNavigator from './HomeNavigator';
import FavouritNavigator from './FavouritNavigator';
import CartNavigator from './CartNavigator';
import NotificationNavigator from './NotificationNavigator';
import {colors} from '../../constants/colors';
import {Home} from 'iconsax-react-native';

const TabsNavigator = () => {
  const Tabs = createBottomTabNavigator();
  return (
    <Tabs.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({focused, color, size}) => {
          size = 24;
          color = focused ? colors.primary.p500 : colors.dark.d500;

          let icon;

          switch (route.name) {
            case 'HomeTab':
              icon = <Home size={size} color={color} />;
              break;
            case 'FavouritTab':
              icon = <Home size={size} color={color} />;
              break;
            case 'CartTab':
              icon = <Home size={size} color={color} />;
              break;
            case 'NotificationTab':
              icon = <Home size={size} color={color} />;
              break;
          }

          return (
            <View
              style={
                focused
                  ? {
                      backgroundColor: colors.gray.g500_20,
                      padding: 10,
                      borderRadius: 20,
                      borderTopRightRadius: 20,
                      borderTopLeftRadius: 20,
                      borderBottomEndRadius: 100,
                      borderTopColor: colors.primary.p500,
                      borderTopWidth: 2,
                    }
                  : undefined
              }>
              {icon}
            </View>
          );
        },
      })}>
      <Tabs.Screen name="HomeTab" component={HomeNavigator} />
      <Tabs.Screen name="FavouritTab" component={FavouritNavigator} />
      <Tabs.Screen name="CartTab" component={CartNavigator} />
      <Tabs.Screen name="NotificationTab" component={NotificationNavigator} />
    </Tabs.Navigator>
  );
};

export default TabsNavigator;
