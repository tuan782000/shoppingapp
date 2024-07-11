import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {
  AddAddressScreen,
  CheckoutScreen,
  FilterScreen,
  MyOrderScreen,
  OrderDetailScreen,
  OrderReviewScreen,
  PrivacyPolicyScreen,
  ProductDetail,
  ReviewScreen,
  SearchScreen,
  SelectAddressScreen,
  TernsandConditionsScreen,
  WriteReviewScreen,
} from '../../screens';
import DrawerNavigator from './DrawerNavigator';
import {useDispatch, useSelector} from 'react-redux';
import {authSelector} from '../../redux/reducers/authReducer';
import {HandleAPI} from '../../api/handleAPI';
import {addProfile} from '../../redux/reducers/profileReducer';
import {cartSelector} from '../../redux/reducers/cartReducer';
// import {SplashScreen} from '../../screens';

const MainNavigator = () => {
  const Stack = createNativeStackNavigator();

  const dispatch = useDispatch();
  const user = useSelector(authSelector);
  const cart = useSelector(cartSelector);

  useEffect(() => {
    user && console.log(cart);
  }, [cart, user]);

  useEffect(() => {
    user.id && getProfile();
  }, [user]);

  const getProfile = async () => {
    const api = `/?id=${user.id}`;
    const res = await HandleAPI.Profile(api);
    if (res.data) {
      dispatch(addProfile(res.data));
    }
  };

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
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} />
      <Stack.Screen name="OrderReviewScreen" component={OrderReviewScreen} />
      <Stack.Screen name="MyOrderScreen" component={MyOrderScreen} />
      <Stack.Screen name="OrderDetailScreen" component={OrderDetailScreen} />
      <Stack.Screen name="WriteReviewScreen" component={WriteReviewScreen} />
      <Stack.Screen name="ReviewScreen" component={ReviewScreen} />
      <Stack.Screen name="AddAddressScreen" component={AddAddressScreen} />
      <Stack.Screen
        name="SelectAddressScreen"
        component={SelectAddressScreen}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
