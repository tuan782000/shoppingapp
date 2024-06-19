import {View, Text, Image, TextInput} from 'react-native';
import React, {useState} from 'react';
import {
  ButtonComponent,
  Container,
  Input,
  Row,
  Section,
  Space,
  TextComponent,
} from '../../components';
import {fonts} from '../../constants/fonts';
import {colors} from '../../constants/colors';
import {SIZES} from '../../constants/theme';
import {Message, Sms} from 'iconsax-react-native';
import {globalStyles} from '../../styles/globalStyles';

const ForgotPassword = ({navigation}: any) => {
  const [sms, setSms] = useState('');
  const [email, setEmail] = useState('');

  const [isFocused, setIsFocused] = useState<'email' | 'sms' | undefined>();
  return (
    <Container back>
      <Section>
        <Space height={20} />
        <View style={[globalStyles.center]}>
          <TextComponent text="Forgot password" size={25} font={fonts.Bold} />
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
        </View>

        {/* <Input
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
        /> */}

        <Row
          styles={{
            padding: 8,
            borderRadius: 16,
            justifyContent: 'flex-start',
            borderWidth: 1,
            borderColor:
              isFocused === 'sms' || sms
                ? colors.primary.p500
                : colors.gray.g500_20,
          }}>
          <View
            style={{
              backgroundColor:
                isFocused === 'sms' || sms
                  ? colors.primary.p500
                  : colors.gray.g500_20,
              padding: 10,
              borderRadius: 999,
            }}>
            <Message
              size={20}
              color={
                isFocused === 'sms' || sms
                  ? colors.white.w500
                  : colors.gray.g500_80
              }
            />
          </View>
          <Space width={12} />
          <View style={{flex: 1, minHeight: 54}}>
            {(isFocused === 'sms' || sms) && (
              <TextComponent
                text="Send OTP via SMS"
                color={colors.gray.g500_80}
              />
            )}
            <TextInput
              onFocus={() => setIsFocused('sms')}
              value={sms}
              placeholder="Enter OTP from SMS"
              onChangeText={val => setSms(val)}
              style={{padding: 0, margin: 0, flex: 1}}
              autoCapitalize="none"
            />
          </View>
        </Row>
        <Space height={10} />
        <Row
          styles={{
            // backgroundColor: colors.gray.g500_10,
            padding: 8,
            borderRadius: 16,
            justifyContent: 'flex-start',
            borderWidth: 1,
            borderColor:
              isFocused === 'email' || email
                ? colors.primary.p500
                : colors.gray.g500_20,
          }}>
          <View
            style={{
              backgroundColor:
                isFocused === 'email' || email
                  ? colors.primary.p500
                  : colors.gray.g500_20,
              padding: 10,
              borderRadius: 999,
            }}>
            <Sms
              size={20}
              color={
                isFocused === 'email' || email
                  ? colors.white.w500
                  : colors.gray.g500_80
              }
            />
          </View>
          <Space width={12} />
          <View style={{flex: 1, minHeight: 54}}>
            {(isFocused === 'email' || email) && (
              <TextComponent
                text="Send OTP via Email"
                color={colors.gray.g500_80}
              />
            )}
            <TextInput
              onFocus={() => setIsFocused('email')}
              value={email}
              placeholder="Enter OTP from Email"
              onChangeText={val => setEmail(val)}
              style={{padding: 0, margin: 0, flex: 1}}
              autoCapitalize="none"
            />
          </View>
        </Row>

        <Space height={20} />

        <ButtonComponent
          onPress={() => navigation.navigate('VerificationCode')}
          type="primary"
          value="Continue"
          backgroundColor={colors.primary.p500}
        />
      </Section>
    </Container>
  );
};

export default ForgotPassword;
