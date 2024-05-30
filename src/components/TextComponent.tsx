import {View, Text, StyleProp, TextStyle} from 'react-native';
import React from 'react';
import {globalStyles} from '../styles/globalStyles';
import {colors} from '../constants/colors';

type Props = {
  text: string;
  color?: string;
  styles?: StyleProp<TextStyle>;
  size?: number;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify' | undefined;
};

const TextComponent = (props: Props) => {
  const {text, color, styles, size, textAlign} = props;
  return (
    <Text
      style={[
        globalStyles.text,
        {
          color: color ?? colors.light.l500,
          fontSize: size ?? 14,
          textAlign: textAlign,
        },
        styles,
      ]}>
      {text}
    </Text>
  );
};

export default TextComponent;
