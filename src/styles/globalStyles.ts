/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {fonts} from '../constants/fonts';
import {colors} from '../constants/colors';

export const globalStyles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontFamily: fonts.Regular,
    color: colors.primary.p100,
  },
});
