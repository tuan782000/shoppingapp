import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Switch,
  Image,
} from 'react-native';
import React from 'react';
import Row from './Row';
import {
  Card,
  I24Support,
  Location,
  LogoutCurve,
  Moon,
  Setting,
  User,
} from 'iconsax-react-native';
import TextComponent from './TextComponent';
import Space from './Space';
import {colors} from '../constants/colors';
import {FlatList} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {logout} from '../redux/reducers/authReducer';

const DrawerCustom = ({navigation}: any) => {
  const dispatch = useDispatch();

  const size = 20;
  const color = colors.primary.p500;
  // Lý do key viết như vậy để dễ chuyển key này vào Navigation
  const menus = [
    {
      key: 'Profile',
      value: 'Profile',
      icon: <User size={size} color={color} />,
    },
    {
      key: 'AddressBook',
      value: 'Address Book',
      icon: <Location size={size} color={color} />,
    },
    {
      key: 'MyCards',
      value: 'My cards',
      icon: <Card size={size} color={color} />,
    },
    {
      key: 'Settings',
      value: 'Settings',
      icon: <Setting size={size} color={color} />,
    },
    {
      key: 'ContactUs',
      value: 'Contact Us',
      icon: <I24Support size={size} color={color} />,
    },
    {
      key: 'SignOut',
      value: 'Sign Out',
      icon: <LogoutCurve size={size} color={color} />,
    },
  ];

  const supports = [
    {
      key: 'PrivacyPolicyScreen',
      value: 'Privacy Policy',
    },
    {
      key: 'TernsandConditionsScreen',
      value: 'Support & FAQs',
    },
  ];

  const handleSignOut = async () => {
    await AsyncStorage.removeItem('authData');
    dispatch(logout({}));
  };
  return (
    <View style={[localStyles.container]}>
      <View>
        <Image
          source={require('../assets/images/icon-logo.png')}
          style={{
            width: 60,
            height: 60,
            marginTop: 10,
          }}
        />
      </View>
      <View style={{flex: 1, paddingVertical: 20}}>
        {/* <Text>Menu Container</Text> */}
        <FlatList
          showsVerticalScrollIndicator={false}
          data={menus}
          style={{flex: 1, paddingVertical: 20}}
          renderItem={({item, index}) => (
            <Row
              styles={[localStyles.listItems]}
              onPress={
                item.key === 'SignOut'
                  ? () => handleSignOut()
                  : () => {
                      console.log(item.key);
                      navigation.closeDrawer();
                    }
              }>
              {item.icon}
              <Space width={12} />
              <TextComponent text={item.value} />
            </Row>
          )}
        />
      </View>
      <View
        style={{
          height: 1,
          backgroundColor: colors.gray.g500_80,
        }}
      />
      <View style={{flex: 1, paddingVertical: 10}}>
        {/* <Text>Menu Container</Text> */}
        <FlatList
          showsVerticalScrollIndicator={false}
          data={supports}
          style={{flex: 1, paddingVertical: 10}}
          renderItem={({item, index}) => (
            <Row
              styles={[localStyles.listItems, {paddingVertical: 5}]}
              onPress={() => {
                console.log(item.key);
                navigation.closeDrawer();
                // navigation.navigate(item.key);
              }}>
              <TextComponent text={item.value} />
            </Row>
          )}
        />
      </View>

      <View>
        <Row justifyContent="flex-start">
          <Moon color={colors.primary.p500} />
          <Space width={10} />
          <TextComponent text="Dark Mode" />
          <Space width={10} />
          <Switch />
        </Row>
      </View>
    </View>
  );
};

export default DrawerCustom;

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: Platform.OS === 'android' ? StatusBar.currentHeight : 48,
  },
  listItems: {
    paddingVertical: 12,
    justifyContent: 'flex-start',
  },
});
