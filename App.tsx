/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {fonts} from './src/constants/fonts';
import {globalStyles} from './src/styles/globalStyles';

type Props = {};

const App = (props: Props) => {
  return (
    <ScrollView>
      <Text style={{fontFamily: 'Poppins-Bold', fontSize: 32}}>Hello</Text>
      <Text style={[globalStyles.text, {fontFamily: fonts.Bold}]}>World</Text>
      {/*  */}
      <Text style={{fontFamily: fonts.Bold, fontSize: 32}}>Header 1</Text>
      <Text style={{fontFamily: fonts.Bold, fontSize: 30}}>Header 2</Text>
      <Text style={{fontFamily: fonts.Bold, fontSize: 28}}>Header 3</Text>
      <Text style={{fontFamily: fonts.Bold, fontSize: 26}}>Header 4</Text>
      <Text style={{fontFamily: fonts.Bold, fontSize: 24}}>Header 5</Text>
      <Text style={{fontFamily: fonts.Bold, fontSize: 22}}>Header 6</Text>
      <Text style={{fontFamily: fonts.Bold, fontSize: 20}}>Header 7</Text>
      <Text style={{fontFamily: fonts.Bold, fontSize: 20}}>Body 1</Text>
      <Text style={{fontFamily: fonts.Bold, fontSize: 18}}>Body 2</Text>
      <Text style={{fontFamily: fonts.Bold, fontSize: 16}}>Caption</Text>
      <Text style={{fontFamily: fonts.Bold, fontSize: 14}}>Label</Text>
      {/*  */}
      <Text style={{fontFamily: fonts.Regular, fontSize: 32}}>Header 1</Text>
      <Text style={{fontFamily: fonts.Regular, fontSize: 30}}>Header 2</Text>
      <Text style={{fontFamily: fonts.Regular, fontSize: 28}}>Header 3</Text>
      <Text style={{fontFamily: fonts.Regular, fontSize: 26}}>Header 4</Text>
      <Text style={{fontFamily: fonts.Regular, fontSize: 24}}>Header 5</Text>
      <Text style={{fontFamily: fonts.Regular, fontSize: 22}}>Header 6</Text>
      <Text style={{fontFamily: fonts.Regular, fontSize: 20}}>Header 7</Text>
      <Text style={{fontFamily: fonts.Regular, fontSize: 20}}>Body 1</Text>
      <Text style={{fontFamily: fonts.Regular, fontSize: 18}}>Body 2</Text>
      <Text style={{fontFamily: fonts.Regular, fontSize: 16}}>Caption</Text>
      <Text style={{fontFamily: fonts.Regular, fontSize: 14}}>Label</Text>
    </ScrollView>
  );
};

export default App;
