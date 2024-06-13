import {View, Text} from 'react-native';
import React from 'react';
import {
  Avatar,
  ButtonComponent,
  Container,
  Input,
  TextComponent,
  Row,
  Space,
  Section,
} from '../../components';
import {Heart, SearchNormal1, Setting4} from 'iconsax-react-native';
import {fonts} from '../../constants/fonts';
import {colors} from '../../constants/colors';
import TopCategories from './components/TopCategories';
import TopBrands from './components/TopBrands';
import PopularProducts from './components/PopularProducts';

const HomeScreen = ({navigation}: any) => {
  return (
    <Container
      // isScroll={false}
      // back
      // title="HomeScreen Screen"
      // titlePosition="center"
      // right={<Heart size={20} color="coral" variant="Bold" />}
      right={
        <Avatar
          source="https://images.unsplash.com/photo-1715553176007-31923bd14f78?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          size={40}
        />
      }
      left={<TextComponent text="Hi 👋🏻" />}>
      {/* <View style={{padding: 20}}>
        <TextComponent text="Test" />
      </View> */}
      <Section>
        {/* <Row justifyContent="space-between">
          <TextComponent text="Hi 👋🏻" />
          <Avatar
            source="https://images.unsplash.com/photo-1715553176007-31923bd14f78?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            size={40}
          />
        </Row> */}
        <TextComponent
          font={fonts.Bold}
          size={30}
          text="Let's find your Exclusive Outfit"
          numberOfLines={2}
        />
        <Space height={16} />
        <Row>
          <View style={{flex: 1}}>
            {/* <Input
              placeholder="Search..."
              prefix={<SearchNormal1 size={20} color={colors.gray.g500_80} />}
              value=""
              onChange={val => console.log(val)}
            /> */}
            <ButtonComponent
              onPress={() => navigation.navigate('Search')}
              type="primary"
              value="Search..."
              backgroundColor={colors.dark.d500_5}
              borderRadius={10}
              // textStyleProps={{color: colors.gray.g500_80}}
              icon={<SearchNormal1 size={20} color={colors.gray.g500_80} />}
              iconPosition="left"
              color={colors.gray.g500_80}
              buttonStyles={{
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
              }}
            />
          </View>
          <Space width={12} />
          <ButtonComponent
            icon={<Setting4 size={22} color={colors.white.w500} />}
            onPress={() => {}}
            backgroundColor={colors.primary.p500}
            buttonStyles={{
              borderRadius: 12,
              paddingHorizontal: 12,
            }}
          />
        </Row>
      </Section>
      <TopCategories />
      <Space height={16} />
      <TopBrands />
      <Space height={16} />
      <PopularProducts navigation={navigation} />
    </Container>
  );
};

export default HomeScreen;
