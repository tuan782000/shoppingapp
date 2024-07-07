/*
item sẽ là json chuyển sang, muốn biết kiểu https://transform.tools/json-to-typescript
xong cho nó vào model để tái sử dụng
*/
import {View, Text, Image} from 'react-native';
import React from 'react';
import {ProductModel} from '../models/ProductModel';
import CardComponent from './CardComponent';
import TextComponent from './TextComponent';
import {fonts} from '../constants/fonts';
import {colors} from '../constants/colors';
import ButtonComponent from './ButtonComponent';
import {Heart} from 'iconsax-react-native';
import Row from './Row';

type Props = {
  item: ProductModel;
  type?: 'vertical' | 'horizontal';
};

const ProductItem = (props: Props) => {
  const {item, type} = props;
  // console.log(item);

  // (1 > 2 ? (2 > 3 ? true : false)  : (1 > 2 ? true : false) )

  return !type || type === 'vertical' ? (
    <CardComponent
      styles={{padding: 0}}
      type={type}
      onPress={() => console.log(item)}>
      <Image
        source={{uri: item.imageURL}}
        style={{
          flex: 1,
          resizeMode: 'cover',
          width: '100%',
          height: 200,
          maxHeight: 200, // lý do để maxHeight để cho các ảnh cao bằng nhau
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
        }}
      />
      <Row
        styles={{
          position: 'absolute',
          top: 10,
          right: 10,
        }}>
        <ButtonComponent
          // buttonStyles={{backgroundColor: 'red', flex: 0}}
          type="text"
          inline
          icon={
            <Heart
              size={20}
              color={1 > 2 ? 'coral' : colors.dark.d500_20}
              variant={'Bold'}
            />
          }
          onPress={() => {}}
        />
      </Row>
      <View style={{padding: 12}}>
        <TextComponent font={fonts.Bold} numberOfLines={2} text={item.title} />
        <TextComponent
          numberOfLines={2}
          text={item.description}
          color={colors.dark.d500_20}
        />
        <TextComponent numberOfLines={2} text={`$${item.price}`} />
      </View>
    </CardComponent>
  ) : (
    <CardComponent>
      <TextComponent text={'Horizontal Card Item'} />
    </CardComponent>
  );
};

export default ProductItem;
