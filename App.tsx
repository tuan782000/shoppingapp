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
  return <></>;
};

export default App;
