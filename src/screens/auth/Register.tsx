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
import {Lock1, Sms, User} from 'iconsax-react-native';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
    }
  };

  return (
    <Container>
      <Section>
        <Space height={20} />
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={require('../../assets/images/icon-logo.png')}
            style={{
              width: 70,
              height: 70,
            }}
          />
          <Space height={20} />
          <TextComponent
            text="Create New Account"
            size={25}
            font={fonts.Bold}
          />
          <Space height={10} />
          <TextComponent
            text="Looks like you don't have an account or connect with social networks"
            size={16}
            color={colors.gray.g500_80}
            numberOfLines={2}
            styles={{width: 300}}
            textAlign="center"
          />
        </View>
        <Space height={25} />
        <Input
          value={name}
          onChange={val => setName(val)}
          placeholder="Name"
          prefix={<User size={20} color={colors.gray.g500_80} />}
          allowClear
          autoCapitalize="none"
        />
        <Input
          value={email}
          onChange={val => setEmail(val)}
          placeholder="Email"
          prefix={<Sms size={20} color={colors.gray.g500_80} />}
          allowClear
          autoCapitalize="none"
        />
        <Input
          value={password}
          onChange={val => setPassword(val)}
          placeholder="Password"
          prefix={<Lock1 size={20} color={colors.gray.g500_80} />}
          allowClear
          autoCapitalize="none"
          password
        />
        <Input
          value={confirmPassword}
          onChange={val => setConfirmPassword(val)}
          placeholder="Confirm password"
          prefix={<Lock1 size={20} color={colors.gray.g500_80} />}
          allowClear
          autoCapitalize="none"
          password
        />

        <ButtonComponent
          onPress={() => console.log('SignUp')}
          type="primary"
          value="Sign Up"
          backgroundColor={colors.primary.p500}
        />
        <Row>
          <View
            style={{
              height: 1,
              width: '34%',
              backgroundColor: colors.gray.g500_80,
            }}></View>
          <Space width={10} />
          <TextComponent text="Or login with" />
          <Space width={10} />
          <View
            style={{
              height: 1,
              width: '34%',
              backgroundColor: colors.gray.g500_80,
            }}></View>
        </Row>
        <Space height={20} />

        <ButtonComponent
          onPress={() => console.log('Login with google')}
          type="primary"
          value="Login with Google"
          backgroundColor={colors.gray.g500_10}
          color={colors.dark.d500}
          borderRadius={10}
          icon={
            <Image
              source={require('../../assets/images/google-icon.png')}
              style={{width: 30, height: 30, marginRight: 5}}
            />
          }
        />
        <ButtonComponent
          onPress={() => console.log('Login with facebook')}
          type="primary"
          value="Login with Facebook"
          backgroundColor={colors.gray.g500_10}
          color={colors.dark.d500}
          borderRadius={10}
          icon={
            <Image
              source={require('../../assets/images/facebook-icon.png')}
              style={{width: 20, height: 20, marginRight: 5}}
            />
          }
        />

        <Row>
          <TextComponent text="Already have an account?" />
          <Space width={4} />
          <ButtonComponent
            onPress={() => console.log('Login')}
            type="link"
            value="Login"
          />
        </Row>
      </Section>
    </Container>
  );
};

export default Register;
