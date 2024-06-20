/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StatusBar} from 'react-native';
import Routers from './src/routers/Routers';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '628813047631-qr5ioh2b13k2934rf717dkd172365a6v.apps.googleusercontent.com',
  iosClientId:
    '628813047631-ulnumkneilnhlraua2feop5g8ieda1si.apps.googleusercontent.com',
});

const App = () => {
  return (
    <>
      <StatusBar
        translucent
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
      />
      {/* <Home /> */}
      {/* Routers: lý do router sẽ bọc nguyên cái App - mà dưới này đã gọi thành ra xung đột */}
      {/* Chính vì vậy mình sẽ gọi ở đây và chuyển giao cho thư mục routers xử lý */}
      <Provider store={store}>
        <Routers />
      </Provider>
    </>
  );
};

export default App;
