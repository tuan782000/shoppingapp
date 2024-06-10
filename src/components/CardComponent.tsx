/*
Card nó chia ra làm 2 loại:
1/ bấm được: thường sẽ có các button
2/ không bấm được: đặc điểm nhận dạng có các button

Mình tập trung phân tích các điểm chung: backgroundColor, borderRadius, shadow
*/

import {
  View,
  Text,
  TouchableOpacity,
  ViewStyle,
  StyleProp,
  Dimensions,
} from 'react-native';
import React, {ReactNode} from 'react';
import {globalStyles} from '../styles/globalStyles';

type Props = {
  children?: ReactNode;
  onPress?: () => void;
  styles?: StyleProp<ViewStyle>;
  type?: 'vertical' | 'horizontal';
};

const CardComponent = (props: Props) => {
  const {children, onPress, styles, type} = props;
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      disabled={!onPress}
      style={[
        globalStyles.card,
        globalStyles.shadow,
        {
          // maxWidth: type === 'horizontal' ? 'auto' : 320, // card nằm ở tablet 320, còn mobile nó sẽ lấy width dưới
          width:
            !type || type !== 'horizontal'
              ? (Dimensions.get('window').width - 16 * 3) / 2
              : 'auto',
          flex: !type || type !== 'horizontal' ? 0 : 1,
          marginBottom: 16,
          marginHorizontal: type === 'horizontal' ? 16 : 8,
        },
        styles,
      ]}>
      {children}
    </TouchableOpacity>
  );
};

export default CardComponent;
