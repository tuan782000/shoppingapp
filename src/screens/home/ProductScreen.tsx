import {View, Text} from 'react-native';
import React from 'react';
import {Container, Section} from '../../components';
import Products from './components/Products';

const ProductScreen = ({navigation}: any) => {
  return (
    <Container back title="Men's" titlePosition="center">
      <Section>
        <View style={{marginLeft: -16}}>
          <Products />
        </View>
      </Section>
    </Container>
  );
};

export default ProductScreen;
