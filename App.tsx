/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Home from './src/screens/homes/HomeScreen';
import Routers from './src/routers/Routers';

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
      <Routers />
    </>
  );
};

export default App;
