import React from 'react';
import {View} from 'react-native';
import {Container, Section} from '../../components';

const ProductScreen = ({navigation}: any) => {
  return (
    <Container back title="Men's" titlePosition="center">
      <Section>
        {/* <TextComponent text="Products" /> */}
        {/* <View style={{marginLeft: -16}}>
          <PopularProducts />
        </View> */}
        <View style={{marginLeft: -16}}>{/* <Products /> */}</View>
      </Section>
    </Container>
  );
};

export default ProductScreen;
