import {View, Text, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ProductItem, Space, Tabbar} from '../../../components';

const Popular = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    // const api = ``
    setProducts([
      {
        id: 1,
        image:
          'https://plus.unsplash.com/premium_photo-1668638806052-4544af05f648?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Dennis Lingo',
        desc: 'Happy Rose',
        price: 250,
      },
      {
        id: 2,
        image:
          'https://images.unsplash.com/photo-1530735038726-a73fd6e6a349?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Makars & Spencer',
        desc: 'Happy Rose',
        price: 140,
      },
    ]);
  };
  return (
    <View>
      <View>
        <Tabbar title="Popular Products" viewAll onViewAll={() => {}} />
      </View>

      <Space height={20} />
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          width: Dimensions.get('window').width,
          justifyContent: 'space-between',
          paddingHorizontal: 8,
        }}>
        <View style={{marginLeft: -16, flexDirection: 'row'}}>
          {products.map(item => (
            <ProductItem item={item} key={item.id} />
          ))}
        </View>
      </View>
    </View>
  );
};

export default Popular;
