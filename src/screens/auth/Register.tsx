import {View, Text, Image, ToastAndroid} from 'react-native';
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
import {globalStyles} from '../../styles/globalStyles';
import {Loading} from '../../modals';
import {handleAuthAPI} from '../../apis/authAPI';
import SocialLogin from './components/SocialLogin';

const Register = ({navigation}: any) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      // signin
      const data = {
        email,
        password,
        fullname: name,
      };

      setIsLoading(true);
      try {
        const res: any = await handleAuthAPI('/register', data, 'post');
        // console.log(res.data);
        ToastAndroid.show(res.message, ToastAndroid.SHORT);
        setIsLoading(false);
        navigation.navigate('VerificationCode', {
          code: res.data.verificationCode,
          id: res.data.id,
        });
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    }
  };

  return (
    <Container>
      <Section>
        <Space height={20} />
        <View style={[globalStyles.center]}>
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
          onPress={handleSignUp}
          type="primary"
          value="Sign Up"
          backgroundColor={colors.primary.p500}
        />
        <SocialLogin />

        <Row>
          <TextComponent text="Already have an account?" />
          <Space width={4} />
          <ButtonComponent
            onPress={() => navigation.navigate('Login')}
            type="link"
            value="Login"
          />
        </Row>
      </Section>
      <Loading visible={isLoading} />
    </Container>
  );
};

export default Register;
