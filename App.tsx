/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StatusBar} from 'react-native';
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
