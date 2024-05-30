/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {fonts} from '../constants/fonts';
import {colors} from '../constants/colors';

export const globalStyles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontFamily: fonts.Regular,
    color: colors.primary.p100,
    fontWeight: 400,
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: colors.dark.d500_10,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    minHeight: 48,
    alignItems: 'center',
  },
  input: {
    margin: 0,
    padding: 0,
    fontSize: 14,
    color: colors.dark.d500,
  },
});
