import {View, Text, FlatList, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  Tabbar,
  Section,
  Card,
  ProductItem,
  Row,
  Space,
} from '../../../components';
import {colors} from '../../../constants/colors';
import {Heart} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';

const PopularProducts = () => {
  const [products, setProducts] = useState<any[]>([]);

  const navigation: any = useNavigation();

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
    ]);
  };
  return (
    <View>
      <View style={{paddingHorizontal: 16}}>
        <Tabbar
          title="Popular Products"
          viewAll
          onViewAll={() => navigation.navigate('Product')}
        />
      </View>

      <Space height={20} />

      {/* <FlatList
        style={{marginLeft: 10}}
        data={products}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <Card
            source={item.image}
            title={item.name}
            description={item.desc}
            price={`$ ${item.price}`}
            productStyles={{
              backgroundColor: colors.white.w500_20,
              width: Dimensions.get('window').width / 2 - 15,
              borderRadius: 10,
              marginRight: index % 2 === 0 ? 10 : 0,
              marginBottom: 10,
            }}
            icon={<Heart color={colors.dark.d500_20} />}
          />
        )}
      /> */}

      {/* <Card
        source={
          'https://plus.unsplash.com/premium_photo-1668638806052-4544af05f648?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
        title={'Dennis'}
        description={'ok'}
        price={'2000'}
        productStyles={{
          backgroundColor: colors.white.w500_20,
          maxWidth: 150,
          borderRadius: 10,
        }}
        icon={<Heart color={colors.dark.d500_20} />}
      /> */}

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

      {/* {products.map(item => (
        <ProductItem type="horizontal" item={item} key={item.id} />
      ))} */}
    </View>
  );
};

export default PopularProducts;
