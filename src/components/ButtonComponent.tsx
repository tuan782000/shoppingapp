import {
  View,
  Text,
  StyleProp,
  ViewProps,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import React, {ReactNode} from 'react';
import TextComponent from './TextComponent';

type Props = {
  onPress: () => void;
  value?: string;
  prefix?: ReactNode;
  subfix?: ReactNode;
  styles?: StyleProp<ViewProps>;
  buttonStyles?: StyleProp<TextStyle>;
  backgroundColor?: string;
  color?: string;
  borderRadius?: number;
};

const ButtonComponent = (props: Props) => {
  const {
    value,
    onPress,
    prefix,
    subfix,
    styles,
    buttonStyles,
    backgroundColor,
    color,
    borderRadius,
  } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        buttonStyles,
        {
          flexDirection: 'row',
          paddingVertical: 12,
          paddingHorizontal: 10,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 20,
          backgroundColor: backgroundColor,
          borderRadius: borderRadius ?? 999,
        },
      ]}>
      {prefix && prefix}
      <Text style={{color: color}}>{value}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
