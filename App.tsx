/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {fonts} from './src/constants/fonts';
import {globalStyles} from './src/styles/globalStyles';
import {colors} from './src/constants/colors';

type Props = {};

const App = (props: Props) => {
  return (
    <ScrollView>
      <Text style={{fontFamily: 'Poppins-Bold', fontSize: 32}}>Hello</Text>
      <Text style={[globalStyles.text, {fontFamily: fonts.Bold}]}>World</Text>
      {/*  */}
      <Text
        style={{fontFamily: fonts.Bold, fontSize: 32, color: colors.dark.d500}}>
        Header 1
      </Text>
      <Text
        style={{fontFamily: fonts.Bold, fontSize: 30, color: colors.dark.d500}}>
        Header 2
      </Text>
      <Text
        style={{fontFamily: fonts.Bold, fontSize: 28, color: colors.dark.d500}}>
        Header 3
      </Text>
      <Text
        style={{fontFamily: fonts.Bold, fontSize: 26, color: colors.dark.d500}}>
        Header 4
      </Text>
      <Text
        style={{fontFamily: fonts.Bold, fontSize: 24, color: colors.dark.d500}}>
        Header 5
      </Text>
      <Text
        style={{fontFamily: fonts.Bold, fontSize: 22, color: colors.dark.d500}}>
        Header 6
      </Text>
      <Text
        style={{fontFamily: fonts.Bold, fontSize: 20, color: colors.dark.d500}}>
        Header 7
      </Text>
      <Text
        style={{fontFamily: fonts.Bold, fontSize: 20, color: colors.dark.d500}}>
        Body 1
      </Text>
      <Text
        style={{fontFamily: fonts.Bold, fontSize: 18, color: colors.dark.d500}}>
        Body 2
      </Text>
      <Text
        style={{fontFamily: fonts.Bold, fontSize: 16, color: colors.dark.d500}}>
        Caption
      </Text>
      <Text
        style={{fontFamily: fonts.Bold, fontSize: 14, color: colors.dark.d500}}>
        Label
      </Text>
      {/*  */}
      <Text
        style={{
          fontFamily: fonts.Regular,
          fontSize: 32,
          color: colors.dark.d500,
        }}>
        Header 1
      </Text>
      <Text
        style={{
          fontFamily: fonts.Regular,
          fontSize: 30,
          color: colors.dark.d500,
        }}>
        Header 2
      </Text>
      <Text
        style={{
          fontFamily: fonts.Regular,
          fontSize: 28,
          color: colors.dark.d500,
        }}>
        Header 3
      </Text>
      <Text
        style={{
          fontFamily: fonts.Regular,
          fontSize: 26,
          color: colors.dark.d500,
        }}>
        Header 4
      </Text>
      <Text
        style={{
          fontFamily: fonts.Regular,
          fontSize: 24,
          color: colors.dark.d500,
        }}>
        Header 5
      </Text>
      <Text
        style={{
          fontFamily: fonts.Regular,
          fontSize: 22,
          color: colors.dark.d500,
        }}>
        Header 6
      </Text>
      <Text
        style={{
          fontFamily: fonts.Regular,
          fontSize: 20,
          color: colors.dark.d500,
        }}>
        Header 7
      </Text>
      <Text
        style={{
          fontFamily: fonts.Regular,
          fontSize: 20,
          color: colors.dark.d500,
        }}>
        Body 1
      </Text>
      <Text
        style={{
          fontFamily: fonts.Regular,
          fontSize: 18,
          color: colors.dark.d500,
        }}>
        Body 2
      </Text>
      <Text
        style={{
          fontFamily: fonts.Regular,
          fontSize: 16,
          color: colors.dark.d500,
        }}>
        Caption
      </Text>
      <Text
        style={{
          fontFamily: fonts.Regular,
          fontSize: 14,
          color: colors.dark.d500,
        }}>
        Label
      </Text>
    </ScrollView>
  );
};

export default App;
