import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeAuth, Login} from '../../screens';
import Register from '../../screens/auth/Register';
import ForgotPassword from '../../screens/auth/ForgotPassword';
import VerificationCode from '../../screens/auth/VerificationCode';

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home Auth" component={HomeAuth} />
      <Stack.Screen name="Verification Code" component={VerificationCode} />
      <Stack.Screen name="Forgot Password" component={ForgotPassword} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
