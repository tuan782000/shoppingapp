import {
  View,
  Text,
  StyleProp,
  ViewProps,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {ReactNode} from 'react';
import TextComponent from './TextComponent';

type Props = {
  source: string;
  icon?: ReactNode;
  title: string;
  description: string;
  price: string;
  styles?: StyleProp<ViewProps>;
};

const Card = (props: Props) => {
  const {source, icon, title, description, price} = props;
  return (
    <View>
      <Image source={{uri: `${source}`}} style={{width: 150, height: 200}} />
      <TouchableOpacity>{icon}</TouchableOpacity>
      <TextComponent text={title} />
      <TextComponent text={description} />
      <TextComponent text={price} />
    </View>
  );
};

export default Card;
