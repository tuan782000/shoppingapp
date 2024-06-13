import React from 'react';
import {ActivityIndicator, Modal, View} from 'react-native';
import {TextComponent} from '../components';
import {globalStyles} from '../styles/globalStyles';

type Props = {
  message?: string;
  visible: boolean;
};

const Loading = (props: Props) => {
  const {message, visible} = props;
  return (
    <Modal
      visible={visible}
      animationType="slide"
      style={[globalStyles.center, {flex: 1}]}
      transparent
      statusBarTranslucent>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
          backgroundColor: 'rgba(0,0,0,0.6)',
        }}>
        <ActivityIndicator color={'white'} />
        {message && <TextComponent text={message} />}
      </View>
    </Modal>
  );
};

export default Loading;
