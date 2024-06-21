import React, {useEffect, useState} from 'react';
import {Dimensions, View} from 'react-native';
import {ProductItem, Space} from '../../../components';

const Products = ({navigation}: any) => {
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
      {
        id: 3,
        image:
          'https://images.unsplash.com/photo-1512101903502-7eb0c9022c74?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Trucker Jacket',
        desc: 'Happy Rose',
        price: 200,
      },
      {
        id: 4,
        image:
          'https://images.unsplash.com/photo-1496440737103-cd596325d314?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Hooded Jacket',
        desc: 'Happy Rose',
        price: 300,
      },
      {
        id: 5,
        image:
          'https://plus.unsplash.com/premium_photo-1668638806052-4544af05f648?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Dennis Lingo',
        desc: 'Happy Rose',
        price: 250,
      },
      {
        id: 6,
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
      <Space height={20} />
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          width: Dimensions.get('window').width,
          justifyContent: 'space-between',
          paddingHorizontal: 8,
        }}>
        {products.map(item => (
          <ProductItem item={item} key={item.id} />
        ))}
      </View>
    </View>
  );
};

export default Products;
