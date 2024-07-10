import {View, Text, Image} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  cartSelector,
  removeCart,
  updateQuantity,
} from '../../redux/reducers/cartReducer';
import {
  ButtonComponent,
  Container,
  Input,
  Row,
  Section,
  Space,
  TextComponent,
} from '../../components';
import SwipeableFlatList from 'rn-gesture-swipeable-flatlist';
import {fonts} from '../../constants/fonts';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Add, Minus, PercentageCircle, Trash} from 'iconsax-react-native';
import {globalStyles} from '../../styles/globalStyles';
import {colors} from '../../constants/colors';
import {useNavigation} from '@react-navigation/native';

const CartScreen = () => {
  const navigation: any = useNavigation();

  const cartData = useSelector(cartSelector);
  // console.log(cartData);
  const dispatch = useDispatch();
  return (
    <Container isScroll={false} title="My Cart" titlePosition="center" back>
      <>
        {/* <TextComponent text="Ok" /> */}
        <SwipeableFlatList
          data={cartData}
          renderItem={({item}) => (
            <View
              style={[
                globalStyles.card,
                globalStyles.shadow,
                {marginHorizontal: 16, marginBottom: 16},
              ]}>
              <Row>
                <Image
                  source={{uri: item.imageUrl}}
                  style={{
                    width: 80,
                    height: 90,
                    borderRadius: 12,
                    resizeMode: 'cover',
                  }}
                />
                <Space width={12} />
                <View style={{flex: 1}}>
                  <TextComponent
                    text={item.title}
                    font={fonts.Bold}
                    size={18}
                  />
                  <Space height={5} />
                  <TextComponent text={`Size: ${item.selectedSizes}`} />
                  <Space height={5} />
                  <Row justifyContent="space-between">
                    <TextComponent
                      text={`$${(
                        parseFloat(item.price) * parseInt(item.numberProduct)
                      ).toLocaleString()}`}
                      size={18}
                      font={fonts.Bold}
                    />
                    <Row
                      justifyContent="center"
                      alignItems="center"
                      styles={{
                        borderWidth: 1,
                        paddingVertical: 5,
                        paddingHorizontal: 10,
                        borderRadius: 8,
                        borderColor: colors.primary.p500,
                        width: 100,
                      }}>
                      <TouchableOpacity
                        onPress={() =>
                          dispatch(
                            updateQuantity({
                              id: item._id,
                              selectedSizes: item.selectedSizes,
                              number: -1,
                            }),
                          )
                        }
                        disabled={item.numberProduct === 1}>
                        <Minus
                          color={
                            item.numberProduct === 1
                              ? colors.gray.g500
                              : colors.primary.p500
                          }
                          size={20}
                        />
                      </TouchableOpacity>
                      <Space width={10} />
                      <TextComponent
                        text={item.numberProduct.toString()}
                        textAlign="center"
                        styles={{flex: 1}}
                      />
                      <Space width={10} />
                      <TouchableOpacity
                        // onPress={handleIncrement}
                        onPress={() => {
                          dispatch(
                            updateQuantity({
                              id: item._id,
                              selectedSizes: item.selectedSizes,
                              number: +1,
                            }),
                          );
                        }}
                        disabled={item.numberProduct === 10}>
                        {/* <Text style={{color: colors.primary.p500}}>+</Text> */}
                        <Add
                          color={
                            item.numberProduct === 10
                              ? colors.gray.g500
                              : colors.primary.p500
                          }
                          size={20}
                        />
                      </TouchableOpacity>
                    </Row>
                  </Row>
                </View>
              </Row>
            </View>
          )}
          renderRightActions={item => (
            <View
              style={{
                paddingHorizontal: 20,
                backgroundColor: '#FF5B5B',
                borderRadius: 8,
                marginBottom: 16,
                marginLeft: -32,
                marginRight: 16,
                justifyContent: 'center',
                alignContent: 'center',
                paddingLeft: 32,
              }}>
              <TouchableOpacity
                onPress={() =>
                  dispatch(
                    removeCart({
                      id: item._id,
                      selectedSizes: item.selectedSizes,
                    }),
                  )
                }>
                <Trash size={28} color="white" />
              </TouchableOpacity>
            </View>
          )}
        />

        {/* Đoạn mới Design */}
        <Section>
          <Row>
            <Input
              value=""
              onChange={() => console.log('Coupon')}
              styles={{
                flex: 1,
                backgroundColor: colors.gray.g500_10,
                borderRadius: 999,
                zIndex: -1,
                position: 'relative',
              }}
              placeholder="Enter Promocode"
              prefix={<PercentageCircle color={colors.dark.d500} size={20} />}
            />
            <ButtonComponent
              onPress={() => console.log('Add')}
              backgroundColor={colors.primary.p500}
              type="primary"
              value="Apply"
              buttonStyles={{
                paddingVertical: 10,
                paddingHorizontal: 30,
                position: 'absolute',
                right: 0,
                top: 0,
              }}
            />
          </Row>
          <Space height={20} />
          <Row justifyContent="space-between">
            <TextComponent text="Item total" />
            <TextComponent text="$10.000" />
          </Row>
          <Space height={10} />

          <Row justifyContent="space-between">
            <TextComponent text="Discount" />
            <TextComponent text="$50" />
          </Row>
          <Space height={10} />

          <Row justifyContent="space-between">
            <TextComponent text="Delivery Free" />
            <TextComponent text="Free" />
          </Row>
          <Space height={10} />
          <Row>
            <View
              style={{
                height: 1,
                flex: 1,
                backgroundColor: colors.gray.g500_20,
              }}
            />
          </Row>
          <Space height={20} />
          <Row justifyContent="space-between">
            <TextComponent text="Grand total" />
            <TextComponent text="$999.50" />
          </Row>
          <Space height={40} />
          <ButtonComponent
            onPress={() => navigation.navigate('CheckoutScreen')} // truyền props ở đây
            backgroundColor={colors.primary.p500}
            type="primary"
            value="Pay Now"
          />
        </Section>
      </>
    </Container>
  );
};

export default CartScreen;
