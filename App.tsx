/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, ScrollView, SafeAreaView, Button} from 'react-native';
import React, {useState} from 'react';
import {fonts} from './src/constants/fonts';
import {globalStyles} from './src/styles/globalStyles';
import {colors} from './src/constants/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  Avatar,
  ButtonComponent,
  Card,
  Input,
  TextComponent,
} from './src/components';
import {Heart, Lock, User} from 'iconsax-react-native';

const initialState = {
  name: '',
  age: '',
  address: '',
  phone: '',
  email: '',
  imgURL: '',
};
const App = () => {
  // cách 1:
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // cách 2: sử dụng object - khi nào dùng? khi cùng 1 nhớm nhiều hơn 2 yếu tố
  const [profile, setProfile] = useState<any>(initialState); // lý do để any là lúc map ra ko biết key là gì khi map ra nên là để any
  const handleChangeValue = (key: string, val: string) => {
    const data: any = {...profile}; // phải là any vì data đầu vào không biết trước nó là cái gì!
    // lý do object là tham chiếu - biến lưu tham chiếu là chỉ lưu đường dẫn đến giá trị của biến đó, nhưng khi mà cập nhật giá trị cho biến tham chiếu thì sẽ không được vì đường dẫn không thay đổi - không ghi nhận được trạng thái của biến đó thay đổi

    // để thay đổi được mình phải viết ra 1 biến mới lưu đường dẫn mới / địa chỉ mới xong cập nhật lại state - Biến tham chiếu thì có Array và object là biến tham chiếu - những thằng còn lại biến nguyên thuỷ
    data[`${key}`] = val;
    setProfile(data);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{padding: 20, flex: 1}}>
        <Input
          value={username}
          onChange={val => setUsername(val)}
          placeholder="User name"
          allowClear
          prefix={<User />}
          autoCapitalize="none"
        />
        <Input
          value={password}
          onChange={val => setPassword(val)}
          placeholder="Password"
          password
          allowClear
          prefix={<Lock />}
          autoCapitalize="none"
        />

        <TextComponent
          text="Manage multiple inputs"
          color={colors.dark.d500}
          size={24}
        />

        {Object.keys(profile).map(key => (
          <Input
            value={profile[`${key}`]}
            placeholder={key}
            onChange={val => handleChangeValue(key, val)}
            allowClear
            keyboardType={
              key === 'age'
                ? 'number-pad'
                : key === 'phone'
                ? 'phone-pad'
                : 'default'
            }
            autoCapitalize="none"
          />
        ))}

        {/* <Button title="OK" onPress={() => console.log(profile)} /> */}
        {/* <Button title="Clear" onPress={() => setProfile(initialState)} /> */}

        <ButtonComponent
          onPress={() => console.log(profile)}
          value="Submit"
          backgroundColor={colors.primary.p500}
          color={colors.white.w500}
        />
        <ButtonComponent
          onPress={() => setProfile(initialState)}
          value="Clear"
          backgroundColor={colors.secondary.s500}
          color={colors.white.w500}
        />

        <TextComponent text="Avatar" color={colors.dark.d500} size={24} />
        <Avatar
          source={`https://images.unsplash.com/photo-1716847214513-dfac4f00635b?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
          width={32}
          height={32}
          borderRadius={9999}
        />
        <Avatar
          source={`https://images.unsplash.com/photo-1716847214513-dfac4f00635b?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
          width={32}
          height={32}
          borderRadius={9999}
        />
        <Avatar
          source={`https://images.unsplash.com/photo-1716847214513-dfac4f00635b?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
          width={32}
          height={32}
          borderRadius={9999}
        />
        <TextComponent text="Button" color={colors.dark.d500} size={24} />
        <ButtonComponent
          onPress={() => console.log('Test Button')}
          value="Test Button"
          backgroundColor={colors.primary.p500}
          color={colors.white.w500}
          prefix={<User />}
        />
        <TextComponent text="Card" color={colors.dark.d500} size={24} />
        <Card
          source={`https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium?wid=5120&hei=2880&fmt=webp&qlt=70&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80Y0IyMmhwNm1HTHhnVk5VN0dRb3FBNEpOZTBYalh5Vk90cEc1K2wwRzFGejRMeXJHUnUva2huMjl4akFHOXNwVjA0YXFmK3VWSWZuRE9oVEFyUFR0T2g3aHFOc0RlQlduNzZ3d2xCVDdFUXZ3PT0=&traceId=1`}
          title="ABC"
          description="XYZ"
          price="3000"
          icon={<Heart />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
