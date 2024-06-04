import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  TextStyle,
} from 'react-native';
import React, {useState} from 'react';
import TextComponent from './TextComponent';
import Row from './Row';
import {globalStyles} from '../styles/globalStyles';
import {colors} from '../constants/colors';

type Props = {
  item: {
    title: string;
    id: string;
  };
  checked?: string[];
  styles?: StyleProp<ViewStyle>;
  onCheck?: (val: string) => void;
  textStyles?: StyleProp<TextStyle>;
};

const Tag = (props: Props) => {
  const {item, checked, styles, onCheck, textStyles} = props;
  const [itemSelected, setItemSelected] = useState<string[]>([]);
  const handleToggleSelected = (id: string) => {
    const items = [...itemSelected];
    const index = items.findIndex(element => element === id);

    if (index !== -1) {
      items.push(id);
    } else {
      items.splice(index, 1);
    }

    setItemSelected(items);
  };
  return (
    <Row
      onPress={onCheck ? () => onCheck(item.id) : undefined}
      styles={[globalStyles.tag, {}, styles]}>
      <TextComponent
        text={item.title}
        color={colors.primary.p500}
        styles={textStyles}
      />
    </Row>
  );
};

export default Tag;
