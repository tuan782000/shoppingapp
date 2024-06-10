import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Avatar, Section, Tabbar, Row, TextComponent} from '../../../components';
import {colors} from '../../../constants/colors';

const TopBrands = () => {
  const [brands, setBrands] = useState<any[]>([]);

  useEffect(() => {
    getBrands();
  }, []);

  const getBrands = () => {
    try {
      // const api = ''
      setBrands([
        {
          id: '1',
          title: 'Zara',
          brandImg:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/1200px-Zara_Logo.svg.png',
        },
        {
          id: '2',
          title: 'Gucci',
          brandImg:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/1960s_Gucci_Logo.svg/1200px-1960s_Gucci_Logo.svg.png',
        },
        {
          id: '3',
          title: 'H&M',
          brandImg:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1280px-H%26M-Logo.svg.png',
        },
        {
          id: '4',
          title: 'Nike',
          brandImg:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/250px-Logo_NIKE.svg.png',
        },
      ]);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <View style={{paddingHorizontal: 16}}>
        <Tabbar title={'Top Brands'} />
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={brands}
        style={{paddingHorizontal: 16, paddingVertical: 12}}
        renderItem={({item, index}) => (
          <Avatar
            source={`${item.brandImg}`}
            size={50}
            onPress={() => console.log(item.id)}
            padding={8}
            backgroundColor={colors.dark.d500_10}
            imgStyles={{marginRight: index < brands.length - 1 ? 16 : 0}}
            resizeMode="contain"
            text={item.title}
          />
        )}
      />
    </View>
  );
};

export default TopBrands;
