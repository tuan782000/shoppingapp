import {View, Text, Button} from 'react-native';
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {logout} from '../../redux/reducers/authReducer';

const HomeScreen = ({navigation}: any) => {
  const dispatch = useDispatch();

  return (
    <Container
      right={
        <Avatar
          source="https://images.unsplash.com/photo-1715553176007-31923bd14f78?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          size={40}
        />
      }
      left={<TextComponent text="Hi 👋🏻" />}>
      <Section>
        <TextComponent
          font={fonts.Bold}
          size={30}
          text="Let's find your Exclusive Outfit"
          numberOfLines={2}
        />
        <Space height={16} />
        <Row>
          <View style={{flex: 1}}>
            <ButtonComponent
              onPress={() => navigation.navigate('Search')}
              type="primary"
              value="Search..."
              backgroundColor={colors.dark.d500_5}
              borderRadius={10}
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
      <PopularProducts />
    </Container>
  );
};

export default HomeScreen;
