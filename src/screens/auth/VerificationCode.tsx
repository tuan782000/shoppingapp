import {View, Text, Image, TextInput, StyleSheet} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
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
import {globalStyles} from '../../styles/globalStyles';

const VerificationCode = ({navigation}: any) => {
  const [numbers, setNumbers] = useState<string[]>([]);
  const [nums, setNums] = useState('');

  const inputRef1 = useRef<TextInput>(null);
  const inputRef2 = useRef<TextInput>(null);
  const inputRef3 = useRef<TextInput>(null);
  const inputRef4 = useRef<TextInput>(null);

  useEffect(() => {
    inputRef1.current?.focus();
  }, []);

  const handleChangeValue = (val: string, index: number) => {
    const items = [...numbers];
    items[index] = val;

    setNumbers(items);
  };

  return (
    <Container back navigation={navigation}>
      <Section>
        <View style={[globalStyles.center]}>
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
          <Image
            source={require('../../assets/images/Enter-OTP-cuate.png')}
            style={{width: SIZES.width, height: 340}}
            resizeMode="contain"
          />
        </View>

        <Space height={40} />

        <Row justifyContent="space-around">
          <TextInput
            ref={inputRef1}
            value={numbers[0]}
            onChangeText={val => {
              handleChangeValue(val, 0);
              val && inputRef2.current?.focus();
            }}
            style={[
              localStyles.input,
              {
                backgroundColor: inputRef1.current?.isFocused()
                  ? colors.white.w500
                  : colors.light.l500,
                borderWidth: inputRef1.current?.isFocused() ? 1 : 0,
                borderColor: colors.gray.g500,
              },
            ]}
            keyboardType="number-pad"
            maxLength={1}
          />
          <TextInput
            ref={inputRef2}
            value={numbers[1]}
            onChangeText={val => {
              handleChangeValue(val, 1);
              val && inputRef3.current?.focus();
            }}
            style={[
              localStyles.input,
              {
                backgroundColor: inputRef1.current?.isFocused()
                  ? colors.white.w500
                  : colors.light.l500,
                borderWidth: inputRef1.current?.isFocused() ? 1 : 0,
                borderColor: colors.gray.g500,
              },
            ]}
            keyboardType="number-pad"
            maxLength={1}
          />
          <TextInput
            ref={inputRef3}
            value={numbers[2]}
            onChangeText={val => {
              handleChangeValue(val, 2);
              val && inputRef4.current?.focus();
            }}
            style={[
              localStyles.input,
              {
                backgroundColor: inputRef1.current?.isFocused()
                  ? colors.white.w500
                  : colors.light.l500,
                borderWidth: inputRef1.current?.isFocused() ? 1 : 0,
                borderColor: colors.gray.g500,
              },
            ]}
            keyboardType="number-pad"
            maxLength={1}
          />
          <TextInput
            ref={inputRef4}
            value={numbers[3]}
            onChangeText={val => handleChangeValue(val, 3)}
            style={[
              localStyles.input,
              {
                backgroundColor: inputRef1.current?.isFocused()
                  ? colors.white.w500
                  : colors.light.l500,
                borderWidth: inputRef1.current?.isFocused() ? 1 : 0,
                borderColor: colors.gray.g500,
              },
            ]}
            keyboardType="number-pad"
            maxLength={1}
          />
          {/* {Array.from({length: 4}).map((item, index) => (
            <Input
              key={`input${index}`}
              onChange={val => setNums((numbers[index] = val))}
              value={numbers[index]}
              autoCapitalize="none"
              keyboardType="number-pad"
              styles={[globalStyles.center, {width: 60, height: 60}]}
              inputStyles={[
                {
                  fontSize: 28,
                  padding: 0,
                  lineHeight: 38,
                  fontFamily: fonts.Bold,
                  textAlign: 'center',
                },
              ]}
              max={1}
            />
          ))} */}
          {/* <Input
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
          /> */}
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
          onPress={() => {
            console.log(numbers);
            // navigation.navigate('EnterNewPassword')
          }}
          type="primary"
          backgroundColor={colors.primary.p500}
          value="Verify"
        />
      </Section>
    </Container>
  );
};

export default VerificationCode;

const localStyles = StyleSheet.create({
  input: {
    width: 60,
    height: 60,
    borderRadius: 12,
    backgroundColor: colors.light.l500,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: fonts.Bold,
    fontSize: 28,
    lineHeight: 40,
  },
});
