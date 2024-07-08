import {View, Text} from 'react-native';
import React from 'react';
import {Container, Section, Space, TextComponent} from '../../components';
import {fonts} from '../../constants/fonts';

const FavouriteScreen = () => {
  return (
    <Container>
      <Section>
        <TextComponent
          text="Favourite Products"
          textAlign="center"
          size={20}
          font={fonts.Semibold}
        />
      </Section>
      <Space height={16} />
    </Container>
  );
};

export default FavouriteScreen;
