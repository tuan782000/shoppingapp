/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Home from './src/screens/homes/Home';

const App = () => {
  return (
    <>
      <StatusBar
        translucent
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
      />
      <Home />
    </>
  );
};

export default App;
