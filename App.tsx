/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Home from './src/screens/home/HomeScreen';
import Routers from './src/routers/Routers';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const App = () => {
  return (
    <>
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
    </>
  );
};

export default App;
