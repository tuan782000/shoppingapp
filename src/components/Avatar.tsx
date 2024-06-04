import {
  View,
  Text,
  StyleProp,
  ImageStyle,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  TextStyle,
} from 'react-native';
import React from 'react';
import {ViewProps} from 'react-native-svg/lib/typescript/fabric/utils';

type Props = {
  source: string;
  size?: number;
  onPress?: () => void;
  padding?: number;
  backgroundColor?: string;
  imgStyles?: StyleProp<TextStyle>;
};

const Avatar = (props: Props) => {
  const {source, size, onPress, padding, backgroundColor, imgStyles} = props;
  return (
    <TouchableOpacity
      style={[
        {
          padding: padding ?? 0,
          backgroundColor: backgroundColor ?? undefined,
          borderRadius: 999,
        },
        imgStyles,
      ]}
      onPress={onPress}>
      <Image
        source={{uri: source}}
        width={size ?? 24}
        height={size ?? 24}
        borderRadius={size ? size / 2 : 12}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
};

export default Avatar;
