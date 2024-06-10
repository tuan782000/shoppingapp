import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import {
  ButtonComponent,
  Container,
  Input,
  Section,
  Space,
  TextComponent,
} from '../../components';
import {fonts} from '../../constants/fonts';
import {colors} from '../../constants/colors';
import {SIZES} from '../../constants/theme';
import {Message, Sms} from 'iconsax-react-native';

const ForgotPassword = () => {
  const [otp, setOtp] = useState('');
  const [sms, setSms] = useState('');
  return (
    <Container back>
      <Section>
        <Space height={20} />
        <TextComponent
          text="Forgot password"
          textAlign="center"
          size={25}
          font={fonts.Bold}
        />
        <Space height={10} />

        <TextComponent
          text="Select Which contact details should we use to reset your password"
          size={16}
          color={colors.gray.g500_80}
          numberOfLines={2}
          textAlign="center"
        />
        <Space height={20} />
        <Image
          source={require('../../assets/images/ForgotPassword.png')}
          style={{width: SIZES.width, height: 340}}
          resizeMode="contain"
        />
        <Input
          onChange={val => setOtp(val)}
          value={otp}
          placeholder="Send OTP via SMS"
          autoCapitalize="none"
          prefix={
            <View
              style={{
                backgroundColor: otp
                  ? colors.primary.p500
                  : colors.gray.g500_20,
                padding: 10,
                borderRadius: 999,
              }}>
              <Message
                size={20}
                color={otp ? colors.white.w500 : colors.dark.d500_20}
              />
            </View>
          }
        />
        <Input
          onChange={val => setSms(val)}
          value={sms}
          placeholder="Send OTP via Email"
          autoCapitalize="none"
          prefix={
            <View
              style={{
                backgroundColor: sms
                  ? colors.primary.p500
                  : colors.gray.g500_20,
                padding: 10,
                borderRadius: 999,
              }}>
              <Sms
                size={20}
                color={sms ? colors.white.w500 : colors.dark.d500_20}
              />
            </View>
          }
        />

        <ButtonComponent
          onPress={() => console.log('continue')}
          type="primary"
          value="Continue"
          backgroundColor={colors.primary.p500}
        />
      </Section>
    </Container>
  );
};

export default ForgotPassword;
