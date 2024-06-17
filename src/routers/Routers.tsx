import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {SplashScreen} from '../screens';
import AuthNavigator from './navigators/AuthNavigator';
import MainNavigator from './navigators/MainNavigator';
import {useDispatch, useSelector} from 'react-redux';
import {addAuth, authSelector} from '../redux/reducers/authReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Routers = () => {
  const [isShowSplash, setIsShowSplash] = useState(true);

  const auth = useSelector(authSelector);
  const dispath = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await getAuth();
    await getCarts();
    setIsShowSplash(false);
  };

  const getAuth = async () => {
    const res = await AsyncStorage.getItem('authData');

    res && dispath(addAuth(JSON.parse(res)));
  };
  const getCarts = async () => {};

  return isShowSplash ? (
    <SplashScreen />
  ) : (
    <NavigationContainer>
      {!auth || !auth.accesstoken ? <AuthNavigator /> : <MainNavigator />}
    </NavigationContainer>
  );
};

export default Routers;
