import {View, Text, Platform, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import {
  ButtonComponent,
  CardComponent,
  Input,
  Row,
  Section,
  Space,
  TextComponent,
} from '../../components';
import {colors} from '../../constants/colors';
import {globalStyles} from '../../styles/globalStyles';
import {
  Add,
  AddCircle,
  ArrowLeft2,
  Edit2,
  Location,
  Paypal,
  TickCircle,
} from 'iconsax-react-native';
import {fonts} from '../../constants/fonts';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SelectAddressScreen = ({navigation}: any) => {
  return (
    <>
      <Row
        styles={{
          paddingTop: Platform.OS === 'ios' ? 40 : 20,
          backgroundColor: colors.white.w500,
        }}>
        <Space width={5} />
        <TouchableOpacity
          onPress={() => navigation.goBack()}
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
        <Space height={20} />
        <TextComponent text="Select Address" font={fonts.Bold} />
        <Space height={20} />
      </Section>
      <ScrollView
        style={{flex: 1, zIndex: -1, backgroundColor: colors.white.w500}}>
        <CardComponent
          type="horizontal"
          onPress={() => console.log('Choose address')}>
          <Row alignItems="flex-start">
            <TickCircle size={20} color={colors.primary.p500} />
            <Space width={10} />
            <Row
              styles={{
                flexDirection: 'column',
                flex: 1,
                alignItems: 'flex-start',
              }}>
              <TextComponent text="Home" font={fonts.Bold} />
              <Space height={10} />
              <TextComponent text="1901" />
              <TextComponent text="Hawai" />
            </Row>
            <Space width={10} />
            <Ionicons name="ellipsis-vertical-outline" size={20} />
          </Row>
          {/* <FontAwesome name="circle" color={colors.white.w500_10} /> */}
        </CardComponent>
        <CardComponent type="horizontal">
          <Row alignItems="flex-start">
            <FontAwesome name="circle" color={colors.white.w500_10} size={20} />
            <Space width={10} />
            <Row
              styles={{
                flexDirection: 'column',
                flex: 1,
                alignItems: 'flex-start',
              }}>
              <TextComponent text="Work" font={fonts.Bold} />
              <Space height={10} />
              <TextComponent text="1901" />
              <TextComponent text="Hawai" />
            </Row>
            <Space width={10} />
            <Ionicons name="ellipsis-vertical-outline" size={20} />
          </Row>
        </CardComponent>
        <CardComponent type="horizontal">
          <Row alignItems="flex-start">
            <FontAwesome name="circle" color={colors.white.w500_10} size={20} />
            <Space width={10} />
            <Row
              styles={{
                flexDirection: 'column',
                flex: 1,
                alignItems: 'flex-start',
              }}>
              <TextComponent text="Other" font={fonts.Bold} />
              <Space height={10} />
              <TextComponent text="1901" />
              <TextComponent text="Hawai" />
            </Row>
            <Space width={10} />
            <Ionicons name="ellipsis-vertical-outline" size={20} />
          </Row>
          {/* <FontAwesome name="circle" color={colors.white.w500_10} /> */}
        </CardComponent>
      </ScrollView>
      <Section>
        <ButtonComponent
          onPress={() => console.log('Pay Now')}
          backgroundColor={colors.primary.p500}
          value="Select Address"
          buttonStyles={{marginBottom: 30}}
        />
      </Section>
      <TouchableOpacity
        onPress={() => navigation.navigate('AddAddressScreen')}
        style={{
          padding: 20,
          backgroundColor: colors.primary.p500,
          borderRadius: 999,
          position: 'absolute',
          bottom: 100,
          right: 20,
        }}>
        <Add size={30} color={colors.white.w500} />
      </TouchableOpacity>
    </>
  );
};

export default SelectAddressScreen;
