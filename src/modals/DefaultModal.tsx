import {View, Text, Modal} from 'react-native';
import React, {ReactNode} from 'react';
import {globalStyles} from '../styles/globalStyles';
import {ButtonComponent, Space, TextComponent} from '../components';
import {fonts} from '../constants/fonts';
import {colors} from '../constants/colors';

type Props = {
  title?: string;
  description?: string;
  icon?: ReactNode;
  okText?: string;
  onOk: () => void;
  visible: boolean;
};

const DefaultModal = (props: Props) => {
  const {title, description, icon, okText, onOk, visible} = props;
  return (
    <Modal
      visible={visible}
      style={[globalStyles.center, {flex: 1}]}
      transparent
      statusBarTranslucent>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: 'rgba(0,0,0,0.6)',
        }}>
        <View
          style={{
            margin: 20,
            borderRadius: 12,
            backgroundColor: 'white',
            padding: 20,
          }}></View>
      </View>
    </Modal>
  );
};

export default DefaultModal;
