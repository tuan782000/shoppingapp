import {View, Text} from 'react-native';
import React from 'react';
import {Container, Section, Space, TextComponent} from '../../components';
import PopularProducts from '../homes/components/PopularProducts';
import Products from './components/Products';

const ProductScreen = ({navigation}: any) => {
  return (
    <Container back title="Men's" titlePosition="center">
      <Section>
        {/* <TextComponent text="Products" /> */}
        {/* <View style={{marginLeft: -16}}>
          <PopularProducts />
        </View> */}
        <View style={{marginLeft: -16}}>
          <Products />
        </View>
      </Section>
    </Container>
  );
};

export default ProductScreen;
