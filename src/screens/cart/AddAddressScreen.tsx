import {View, Text, Platform, TouchableOpacity, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  ButtonComponent,
  Container,
  DropdownPicker,
  Input,
  Row,
  Section,
  Space,
  TextComponent,
} from '../../components';
import {colors} from '../../constants/colors';
import {globalStyles} from '../../styles/globalStyles';
import {ArrowLeft2} from 'iconsax-react-native';
import {fonts} from '../../constants/fonts';
import axios from 'axios';
import axiosClient from '../../api/axiosClient';
import Divider from '../../components/Divider';
import {Loading} from '../../modals';
import {HandleAPI} from '../../api/handleAPI';
import {useSelector} from 'react-redux';
import {authSelector} from '../../redux/reducers/authReducer';

const initialState = {
  name: '',
  phone: '',
  street: '',
  ward: '',
  district: '',
  province: '',
};

export interface SelectModel {
  id: string;
  name: string;
}

const baseURL = `https://vapi.vnappmob.com/api`;

const AddAddressScreen = ({navigation, param}: any) => {
  const [address, setAddress] = useState(initialState);
  const [provinces, setProvinces] = useState<SelectModel[]>([]);
  const [districts, setDistricts] = useState<SelectModel[]>([]);
  const [wards, setWards] = useState<SelectModel[]>([]);
  const [provinceSelected, setProvinceSelected] = useState<SelectModel>();
  const [districtSelected, setDistrictSelected] = useState<SelectModel>();
  const [wardSelected, setWardSelected] = useState<SelectModel>();
  const [isLoading, setIsLoading] = useState(false);

  const user = useSelector(authSelector);

  useEffect(() => {
    getData(`/province`);
  }, []);

  const handleChangeValue = (val: string, key: string) => {
    // lấy ra toàn bộ các cái thuộc tính address - gán vào items - dựa vào key và val lấy ra và set
    const items: any = {...address};
    items[`${key}`] = val;
    setAddress(items);
  };

  const handleAddAddress = async () => {
    // console.log(address);
    const values: string[] = []; // mảng này dùng xét xem index của các input
    const items: any = {...address}; // dữ liệu các ô input

    for (let i in items) {
      items[i] === '' && values.push(i); // sau khi trải qua vòng lăp - đẩy các index nào bỏ trống vào values
    }

    // console.log(values);
    if (values.length === 0) {
      // chỉ cần không có ô nào bỏ trống sẽ được vào đây
      //   console.log(address);
      // Lưu xuống database
      setIsLoading(true);
      try {
        const infoAddress: any = {...address};
        let concatAddress = '';

        // Định nghĩa thứ tự các khóa
        const order = [
          'name',
          'street',
          'ward',
          'district',
          'province',
          'phone',
        ];

        for (const key of order) {
          if (infoAddress.hasOwnProperty(key)) {
            concatAddress += infoAddress[key] + ' ';
          }
        }

        // console.log(concatAddress);

        const res = await HandleAPI.Address(
          '/add-address',
          {address: concatAddress, uid: user.id},
          'post',
        );

        console.log(res);
        navigation.goBack();
      } catch (error: any) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    } else {
      Alert.alert('', 'Please fill info your address'); // 1 ô trống thui sẽ báo lỗi
    }
  };

  // call api bên thứ 3 để mà lấy dữ liệu
  const getData = async (api: string) => {
    console.log(api);
    const res = await handleGetVapiData(api);
    // console.log(res);
    if (res) {
      // setProvinces(res);
      // res này nó trả về api call được - mảng chưa đúng chuẩn của mình - dùng forEach để biến đổi thành mảng chuẩn
      const items: any[] = [];
      res.forEach((item: any) =>
        items.push({id: item.province_id, name: item.province_name}),
      );

      //   console.log(items);
      setProvinces(items);
    }
  };

  //   console.log(provinces);

  // Lấy ra tỉnh quận huyện
  const handleGetVapiData = async (url: string) => {
    try {
      console.log(`${baseURL}${url}`);
      const res = await axios(`${baseURL}${url}`);

      if (res && res.data && res.status === 200) {
        return res.data.results;
      }
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  return (
    // <>
    //   <Row
    //     styles={{
    //       paddingTop: Platform.OS === 'ios' ? 40 : 20,
    //       backgroundColor: colors.white.w500,
    //     }}>
    //     <Space width={5} />
    //     <TouchableOpacity
    //       onPress={() => navigation.goBack()}
    //       style={[
    //         globalStyles.center,
    //         {
    //           height: 42,
    //           width: 42,
    //           borderRadius: 100,
    //           // backgroundColor: 'rgba(0,0,0,0.5)',
    //         },
    //       ]}>
    //       <ArrowLeft2 color={colors.dark.d500} />
    //     </TouchableOpacity>
    //     <TextComponent
    //       flex={1}
    //       textAlign="center"
    //       numberOfLines={1}
    //       font={fonts.Bold}
    //       size={18}
    //       color={colors.dark.d500}
    //       styles={{paddingRight: 30}} // bên phải có icon thì xoá này đi
    //       // text={product.title}
    //       text="Address"
    //     />
    //   </Row>
    // </>
    <Container back title="Address" titlePosition="center">
      <Section>
        <Space height={20} />
        <Input
          onChange={val => handleChangeValue(val, 'name')}
          value={address.name}
          allowClear
          placeholder="Name"
          autoCapitalize="none"
        />
        <Input
          onChange={val => handleChangeValue(val, 'phone')}
          value={address.phone}
          allowClear
          placeholder="Phone"
          keyboardType="phone-pad"
        />
        <Input
          onChange={val => handleChangeValue(val, 'street')}
          value={address.street}
          allowClear
          placeholder="Street"
          autoCapitalize="none"
        />

        <DropdownPicker
          data={{
            title: 'Province',
            values: provinces,
          }}
          selected={provinceSelected?.id}
          placeholder="Select your province"
          onSelect={async val => {
            setProvinceSelected(val);
            handleChangeValue(val.name, 'province');

            const res = await handleGetVapiData(`/province/district/${val.id}`);

            if (res) {
              const items: any[] = [];
              res.forEach((item: any) =>
                items.push({id: item.district_id, name: item.district_name}),
              );
              setDistricts(items);
              //   console.log(items);
            }
          }}
        />
        <DropdownPicker
          data={{
            title: 'Districts',
            values: districts,
          }}
          disable={!provinceSelected}
          selected={districtSelected?.id}
          placeholder="Select your district"
          onSelect={async val => {
            setDistrictSelected(val);
            handleChangeValue(val.name, 'district');

            const res = await handleGetVapiData(`/province/ward/${val.id}`);

            if (res) {
              const items: any[] = [];
              res.forEach((item: any) =>
                items.push({id: item.ward_id, name: item.ward_name}),
              );
              setWards(items);
              //   console.log(items);
            }
          }}
        />
        <DropdownPicker
          data={{
            title: 'Wards',
            values: wards,
          }}
          disable={!districtSelected}
          selected={wardSelected?.id}
          placeholder="Select your ward"
          onSelect={val => {
            setWardSelected(val);
            handleChangeValue(val.name, 'ward');
          }}
        />
      </Section>

      <Section>
        <Row>
          <Space width={5} />
          <Divider />
          <Space width={10} />
          <TextComponent text="Or" textAlign="center" />
          <Space width={10} />
          <Divider />
          <Space width={5} />
        </Row>
      </Section>

      <Space height={12} />
      <Section>
        <ButtonComponent
          type="text"
          value="Choice in map"
          buttonStyles={{alignItems: 'center'}}
          onPress={() =>
            navigation.navigate('MapScreen', {
              address,
            })
          }
        />
      </Section>
      <Space height={12} />
      <Section>
        <ButtonComponent
          type="primary"
          backgroundColor={colors.primary.p500}
          value="Accept"
          //   onPress={() => console.log(address)}
          //   onPress={() => console.log(address)}
          onPress={handleAddAddress}
        />
      </Section>
      <Loading visible={isLoading} />
    </Container>
  );
};

export default AddAddressScreen;
