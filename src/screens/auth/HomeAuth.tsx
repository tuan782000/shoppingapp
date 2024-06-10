import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import {SIZES} from '../../constants/theme';
import {
  ButtonComponent,
  CardComponent,
  Row,
  Space,
  TextComponent,
} from '../../components';
import {fonts} from '../../constants/fonts';
import {colors} from '../../constants/colors';
import {ArrowCircleLeft2, ArrowCircleRight2} from 'iconsax-react-native';

const slides = [
  {
    id: 1,
    title: 'Find the best fashion style for you',
    description:
      'Get exclusive limited apperal that only you have! Made by famous brand ',
    image: require('../../assets/images/shopping-slide-01.png'),
  },
  {
    id: 2,
    title: 'Define yourself in your unique way',
    description:
      'Get exclusive limited apperal that only you have! Made by famous brand ',
    image: require('../../assets/images/shopping-slide-02.png'),
  },
  {
    id: 3,
    title: 'Start discover your unique fashion style',
    description:
      'Get exclusive limited apperal that only you have! Made by famous brand ',
    image: require('../../assets/images/shopping-slide-03.png'),
  },
];
const HomeAuth = () => {
  const [showHomeAuth, setShowHomeAuth] = useState(false);

  const buttonNextLabel = () => {
    return (
      <View
        style={{
          width: SIZES.width - 32,
          height: 50,
          backgroundColor: colors.primary.p500,
          borderRadius: 999,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TextComponent text="Next" size={18} color={colors.white.w500} />
      </View>
    );
  };

  const buttonSkipLabel = () => {
    return (
      <Row
        styles={{
          position: 'absolute',
          top: -700,
          right: -350,
        }}>
        <TextComponent text="Skip" />
        <Space width={5} />
        {/* <ButtonComponent
          onPress={() => {}}
          icon={<ArrowCircleRight2 size={28} color={colors.white.w500} />}
          inline
          type="outline"
          backgroundColor={colors.primary.p500}
        /> */}
        <View style={{backgroundColor: colors.primary.p500, borderRadius: 999}}>
          <ArrowCircleRight2 size={28} color={colors.white.w500} />
        </View>
      </Row>
    );
  };

  const buttonDoneLabel = () => {
    return (
      <View
        style={{
          width: SIZES.width - 32,
          height: 50,
          backgroundColor: colors.primary.p500,
          borderRadius: 999,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TextComponent text="Get Started" size={18} color={colors.white.w500} />
      </View>
    );
  };

  if (!showHomeAuth) {
    return (
      <AppIntroSlider
        data={slides}
        renderItem={({item}) => {
          return (
            <View>
              <Image
                source={item.image}
                style={{
                  width: SIZES.width,
                  height: SIZES.height,
                }}
                resizeMode="contain"
              />
              <CardComponent
                styles={{
                  position: 'absolute',
                  bottom: 30,
                  left: 0,
                  right: 0,
                  height: 300,
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                }}
                type="horizontal">
                <Space height={20} />
                <TextComponent
                  text={item.title}
                  textAlign="center"
                  size={30}
                  font={fonts.Semibold}
                />
                <Space height={20} />

                <TextComponent
                  textAlign="center"
                  color={colors.gray.g500_80}
                  text={item.description}
                />
              </CardComponent>
            </View>
          );
        }}
        activeDotStyle={{
          backgroundColor: colors.primary.p500,
          width: 50,
          marginBottom: 100,
        }}
        dotStyle={{
          backgroundColor: colors.dark.d500_20,
          marginBottom: 100,
        }}
        renderNextButton={() => buttonNextLabel()}
        showSkipButton
        renderSkipButton={() => buttonSkipLabel()}
        renderDoneButton={() => buttonDoneLabel()}
        onDone={() => {
          setShowHomeAuth(true);
        }}
      />
    );
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>HomeAuth</Text>
    </View>
  );
};

export default HomeAuth;
