import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {SplashScreen} from '../screens';
import AuthNavigator from './navigators/AuthNavigator';
import MainNavigator from './navigators/MainNavigator';

const Routers = () => {
  // Chia ra 2 luồng: 1 luồng chưa đăng nhập - 1 luồng đã đăng nhập
  const [isShowSplash, setIsShowSplash] = useState(true);
  //   const [isLogin, setIsLogin] = useState(false);

  // useEffect không trực tiếp dùng async awai
  useEffect(() => {
    // timeout
    const timeout = setTimeout(() => {
      setIsShowSplash(false);
    }, 1500);

    // gọi thì phải nhớ return không bị rò rỉ bộ nhớ
    // chỉ những cái listener thì mới cần return
    return () => clearTimeout(timeout);
  }, []);

  // const auth = useSelector(authSelector)

  // lấy dữ liệu từ localStorage lên và lưu nó lại vào trong dispatch
  const getData = async () => {
    // get data from localStorage
    // save to dispatch
    await getAuth(); // chờ lấy dữ liệu này xong

    // kiểm tra có dữ liệu
    if (1 > 2) {
      await getCarts(); // tiếp tục chờ lấy dữ liệu giỏ hàng. xong hết mới set màn hình splashScreen false
    }

    setIsShowSplash(false); //
  };

  const getAuth = async () => {};

  const getCarts = async () => {};
  return isShowSplash ? (
    <SplashScreen />
  ) : (
    <NavigationContainer>
      {1 > 2 ? <AuthNavigator /> : <MainNavigator />}
    </NavigationContainer>
  );
};

export default Routers;
