import {View, Text, Platform, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import {
  ButtonComponent,
  Input,
  Row,
  Section,
  Space,
  TextComponent,
} from '../../components';
import {colors} from '../../constants/colors';
import {globalStyles} from '../../styles/globalStyles';
import {
  AddCircle,
  ArrowLeft2,
  Edit2,
  Location,
  Paypal,
} from 'iconsax-react-native';
import {fonts} from '../../constants/fonts';

const SelectAddress = () => {
  return (
    <>
      <Row
        styles={{
          paddingTop: Platform.OS === 'ios' ? 40 : 20,
          backgroundColor: colors.white.w500,
        }}>
        <Space width={5} />
        <TouchableOpacity
          // onPress={() => navigation.goBack()}
          style={[
            globalStyles.center,
            {
              height: 42,
              width: 42,
              borderRadius: 100,
              // backgroundColor: 'rgba(0,0,0,0.5)',
            },
          ]}>
          <ArrowLeft2 color={colors.dark.d500} />
        </TouchableOpacity>
        <TextComponent
          flex={1}
          textAlign="center"
          numberOfLines={1}
          font={fonts.Bold}
          size={18}
          color={colors.dark.d500}
          styles={{paddingRight: 30}} // bên phải có icon thì xoá này đi
          // text={product.title}
          text="Select Address"
        />
      </Row>
      <Section>
        <TextComponent text="Select Address" font={fonts.Semibold} />
        <Space height={10} />
      </Section>
      <ScrollView
        style={{flex: 1, zIndex: -1, backgroundColor: colors.white.w500}}>
        <Section>
          <Space height={10} />
          <Row
            justifyContent="space-between"
            onPress={() => console.log('Paypal')}>
            <Row justifyContent="flex-start">
              <View
                style={{
                  backgroundColor: colors.primary.p500,
                  padding: 10,
                  borderRadius: 999,
                  marginRight: 20,
                }}>
                <Paypal size={20} color={colors.white.w500} />
              </View>
              <TextComponent text="Paypal" size={18} />
            </Row>
            <AddCircle size={16} color={colors.primary.p500} />
          </Row>
        </Section>
      </ScrollView>
      <Section>
        <Space height={30} />
        <ButtonComponent
          onPress={() => console.log('Pay Now')}
          backgroundColor={colors.primary.p500}
          value="Pay Now"
          buttonStyles={{marginBottom: 30}}
        />
      </Section>
    </>
  );
};

export default SelectAddress;
