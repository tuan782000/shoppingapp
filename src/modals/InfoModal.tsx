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

const InfoModal = (props: Props) => {
  const {title, description, icon, okText, onOk, visible} = props;
  return (
    <Modal
      animationType="fade"
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
          }}>
          <View style={[globalStyles.center]}>
            <View style={{paddingVertical: 20}}>{icon && icon}</View>
            {title && (
              <TextComponent
                text={title}
                font={fonts.Bold}
                size={20}
                textAlign="center"
              />
            )}
            {description && (
              <TextComponent text={description} textAlign="center" />
            )}
          </View>
          <Space height={20} />
          <ButtonComponent
            value={okText ?? ''}
            onPress={onOk}
            inline
            type="primary"
            backgroundColor={colors.primary.p500}
          />
        </View>
      </View>
    </Modal>
  );
};

export default InfoModal;
