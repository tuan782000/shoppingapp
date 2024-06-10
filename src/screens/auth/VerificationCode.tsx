import {View, Text, Image} from 'react-native';
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

const VerificationCode = () => {
  const [numberOne, setnumberOne] = useState('');
  const [numberTwo, setnumberTwo] = useState('');
  const [numberThree, setnumberThree] = useState('');
  const [numberFour, setnumberFour] = useState('');
  return (
    <Container back>
      <Section>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TextComponent
            textAlign="center"
            text="Enter Verification Code"
            size={25}
            font={fonts.Bold}
          />
          <Space height={10} />
          <TextComponent
            textAlign="center"
            text="We have sent the code verification to your mobile number"
            color={colors.gray.g500_80}
            numberOfLines={2}
            styles={{width: 300}}
          />
        </View>

        <Image
          source={require('../../assets/images/sms.png')}
          style={{width: SIZES.width, height: 340}}
          resizeMode="contain"
        />

        <Space height={40} />

        <Row>
          <Input
            onChange={val => setnumberOne(val)}
            value={numberOne}
            autoCapitalize="none"
            keyboardType="number-pad"
            // inputStyles={{width: 30}}
            styles={{width: 60, height: 60}}
          />
          <Space width={20} />
          <Input
            onChange={val => setnumberTwo(val)}
            value={numberTwo}
            autoCapitalize="none"
            keyboardType="number-pad"
            // inputStyles={{width: 30}}
            styles={{width: 60, height: 60}}
          />
          <Space width={20} />

          <Input
            onChange={val => setnumberThree(val)}
            value={numberThree}
            autoCapitalize="none"
            keyboardType="number-pad"
            // inputStyles={{width: 30}}
            styles={{width: 60, height: 60}}
          />
          <Space width={20} />

          <Input
            onChange={val => setnumberFour(val)}
            value={numberFour}
            autoCapitalize="none"
            keyboardType="number-pad"
            // inputStyles={{width: 30}}
            styles={{width: 60, height: 60}}
          />
        </Row>
        <Space height={10} />
        <Row justifyContent="flex-end">
          <TextComponent text="00:30" />
          <Space width={5} />
          <ButtonComponent
            onPress={() => console.log('resend otp')}
            type="text"
            value="Resend it"
            color={colors.primary.p500}
          />
        </Row>
        <Space height={20} />
        <ButtonComponent
          onPress={() => console.log('Verify')}
          type="primary"
          backgroundColor={colors.primary.p500}
          value="Verify"
        />
      </Section>
    </Container>
  );
};

export default VerificationCode;
