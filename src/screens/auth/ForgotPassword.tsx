import {View, Text, Image, TextInput} from 'react-native';
import React, {useRef, useState} from 'react';
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
import {Home, Message, Mobile, Sms} from 'iconsax-react-native';
import {globalStyles} from '../../styles/globalStyles';
import {InfoModal} from '../../modals';

const ForgotPassword = ({navigation}: any) => {
  const [otp, setOtp] = useState('');
  const [sms, setSms] = useState('');
  const [isVisibleModalInfo, setIsVisibleModalInfo] = useState(false);

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
        <Row
          styles={{
            backgroundColor: '#e0e0e0',
            marginBottom: 16,
            padding: 8,
            borderRadius: 12,
          }}>
          <Home size={24} color="coral" />
          <Space width={12} />
          <View style={{flex: 1, minHeight: 58}}>
            {(isFocused === 'email' || sms) && (
              <TextComponent text="Email" color={colors.gray.g500_80} />
            )}
            <TextInput
              onFocus={() => setIsFocused('email')}
              value={sms}
              style={{padding: 0, margin: 0, flex: 1}}
              placeholder="Send OTP via Email"
              onChangeText={val => setSms(val)}
            />
          </View>
        </Row>
        {/* <Input
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

        <ButtonComponent
          onPress={() => setIsVisibleModalInfo(true)}
          // onPress={() => navigation.navigate('VerificationCode')}
          type="primary"
          value="Continue"
          backgroundColor={colors.primary.p500}
        />
      </Section>

      <InfoModal
        visible={isVisibleModalInfo}
        onOk={() => setIsVisibleModalInfo(false)}
        title="Password update successfully!"
        description="Your password has been update successfully!"
        okText="Back to HomeScreen"
        icon={<Mobile size={100} color={colors.primary.p500} />}
      />
    </Container>
  );
};

export default ForgotPassword;
