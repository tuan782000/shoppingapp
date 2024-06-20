import {SearchNormal1} from 'iconsax-react-native';
import React, {useState} from 'react';
import {View} from 'react-native';
import {Container, Input, Section, Space} from '../../components';
import {colors} from '../../constants/colors';
import PopularProducts from '../home/components/PopularProducts';

const SearchScreen = ({navigation}: any) => {
  const [search, setSearch] = useState('');
  return (
    <Container back>
      <Section>
        <Space height={10} />
        <Input
          placeholder="Search..."
          prefix={<SearchNormal1 size={20} color={colors.gray.g500_80} />}
          value={search}
          onChange={val => setSearch(val)}
          allowClear
          autoCapitalize="none"
        />
        {/* <Recently /> */}
        {/* <Popular /> */}
        <View style={{marginLeft: -16}}>
          <PopularProducts />
        </View>
      </Section>
    </Container>
  );
};

export default SearchScreen;
