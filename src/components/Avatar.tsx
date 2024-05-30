import {
  View,
  Text,
  StyleProp,
  ImageStyle,
  Image,
  ImageSourcePropType,
} from 'react-native';
import React from 'react';
import {ViewProps} from 'react-native-svg/lib/typescript/fabric/utils';

type Props = {
  source: string;
  width: number;
  height: number;
  borderRadius?: number;
  onPress?: () => void;
};

const Avatar = (props: Props) => {
  const {source, width, height, borderRadius, onPress} = props;
  return (
    <View>
      <Image
        source={{uri: source}}
        width={width ?? 24}
        height={height ?? 24}
        borderRadius={borderRadius ?? 12}
      />
    </View>
  );
};

export default Avatar;
