import {Lock1, Sms} from 'iconsax-react-native';
import React, {useState} from 'react';
import {Alert, Image, View} from 'react-native';
import {
  ButtonComponent,
  Container,
  Input,
  Row,
  Section,
  Space,
  TextComponent,
} from '../../components';
import {colors} from '../../constants/colors';
import {fonts} from '../../constants/fonts';
import {globalStyles} from '../../styles/globalStyles';
import {Loading} from '../../modals';
import {handleAuthAPI} from '../../apis/authAPI';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {addAuth} from '../../redux/reducers/authReducer';

const Login = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const handleLogin = async () => {
    if (email && password) {
      const data = {email, password};
      setIsLoading(true);
      try {
        const res = await handleAuthAPI('/login', data, 'post');
        console.log(res.data);

        await AsyncStorage.setItem('authData', JSON.stringify(res.data));
        dispatch(addAuth(res.data));
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    } else {
      Alert.alert('', 'Missing value');
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
          <TextComponent text="Welcome Back" size={25} font={fonts.Bold} />
          <Space height={10} />
          <TextComponent
            text="Login to your account using email or social networks"
            size={16}
            color={colors.gray.g500_80}
            numberOfLines={2}
            styles={{width: 280}}
            textAlign="center"
          />
        </View>
        <Space height={25} />
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
        {/* <Space height={5} /> */}
        <View style={{alignItems: 'flex-end'}}>
          <ButtonComponent
            onPress={() => navigation.navigate('ForgotPassword')}
            type="link"
            value="Forgot Password?"
          />
        </View>
        <Space height={25} />
        <ButtonComponent
          onPress={handleLogin}
          type="primary"
          value="Login"
          backgroundColor={colors.primary.p500}
        />
        <Row>
          <View
            style={{
              height: 1,
              flex: 1,
              backgroundColor: colors.gray.g500_80,
            }}
          />
          <Space width={10} />
          <TextComponent text="Or login with" />
          <Space width={10} />
          <View
            style={{
              height: 1,
              flex: 1,
              backgroundColor: colors.gray.g500_80,
            }}
          />
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
          <TextComponent text="First time here?" />
          <Space width={4} />
          <ButtonComponent
            onPress={() => navigation.navigate('Register')}
            type="link"
            value="SignUp"
          />
        </Row>
      </Section>
      <Loading visible={isLoading} />
    </Container>
  );
};

export default Login;
