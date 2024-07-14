/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Home from './src/screens/home/HomeScreen';
import Routers from './src/routers/Routers';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Host} from 'react-native-portalize';

GoogleSignin.configure({
  webClientId:
    '389902582248-sqtc4cjjtseqkbalncsitlbabon8svbm.apps.googleusercontent.com',
  iosClientId:
    '389902582248-i8j9kr9q0m7u2rbpdc6q2mp8f9oofiau.apps.googleusercontent.com',
});

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Host>
        <StatusBar
          translucent
          barStyle={'dark-content'}
          backgroundColor={'transparent'}
        />

        {/* Redux */}
        {/* Bọc như này để bất cứ đâu thì cũng có thể sử dụng được */}
        <Provider store={store}>
          {/* <Home /> */}
          {/* Routers: lý do router sẽ bọc nguyên cái App - mà dưới này đã gọi thành ra xung đột */}
          {/* Chính vì vậy mình sẽ gọi ở đây và chuyển giao cho thư mục routers xử lý */}
          <Routers />
        </Provider>
      </Host>
    </GestureHandlerRootView>
  );
};

export default App;
