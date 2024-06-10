import {View, Text} from 'react-native';
import React from 'react';
import {Container, Row, Section, Space, TextComponent} from '../../components';
import {Icon} from 'iconsax-react-native';

const Notifications = () => {
  return (
    <Container back title="Notifications">
      <Section>
        <Space height={20} />
        <TextComponent text="Today" />
        <Row onPress={() => console.log('OK')}>
          <View>
            <Icon />
          </View>
        </Row>
      </Section>
    </Container>
  );
};

export default Notifications;
