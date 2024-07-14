import {View, Text, Modal, TouchableOpacity, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import TextComponent from './TextComponent';
import Row from './Row';
import {globalStyles} from '../styles/globalStyles';
import {ArrowDown2, SearchNormal1, TickCircle} from 'iconsax-react-native';
import {colors} from '../constants/colors';
import {fonts} from '../constants/fonts';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Section from './Section';
import Input from './Input';
import Space from './Space';
import {replaceName} from '../utils/replaceName';

interface Props {
  data: {
    title: string;
    values: {
      id: string;
      name: string;
    }[];
  };
  selected?: string;
  onSelect: (val: {id: string; name: string}) => void;
  disable?: boolean;
  placeholder?: string;
}

const DropdownPicker = (props: Props) => {
  const {data, selected, onSelect, disable, placeholder} = props;
  const [isVisibleModalSelect, setIsVisibleModalSelect] = useState(false);
  const [searchKey, setSearchKey] = useState('');

  // search thành phố
  const [results, setResults] = useState<{id: string; name: string}[]>([]);

  useEffect(() => {
    data.values.length > 0 && setResults(data.values);
  }, [data.values, isVisibleModalSelect]);

  // useEffect này sẽ chạy - bắt khi mà searchKey thay đổi để cập nhật lại restlts
  useEffect(() => {
    if (!searchKey) {
      // ko có search keylấy toàn bộ
      setResults(data.values);
    } else {
      // có phải tìm - đối tượng này có chứa searchKey hay không - có trả về lưu vào mảng items - không có false
      const items = data.values.filter(element =>
        replaceName(element.name).includes(replaceName(searchKey)),
      );
      //   console.log(items);
      setResults(items);
    }
  }, [searchKey]);

  return (
    <>
      <Row
        onPress={
          disable
            ? undefined
            : () => setIsVisibleModalSelect(!isVisibleModalSelect)
        }
        styles={[globalStyles.inputContainer, {marginBottom: 16}]}>
        <TextComponent
          flex={1}
          text={
            selected
              ? results.find(element => element.id === selected)?.name ?? ''
              : placeholder ?? 'Choice'
          }
          //   styles={placeholder ? {color: colors.gray.g500} : undefined}
        />
        <ArrowDown2 size={18} color={colors.gray.g500} />
      </Row>
      <Modal
        visible={isVisibleModalSelect}
        style={{flex: 1}}
        animationType="slide"
        statusBarTranslucent>
        <Section styles={{paddingTop: 40}}>
          <Row>
            <TextComponent
              text={data.title ?? ''}
              font={fonts.Medium}
              styles={{flex: 1}}
            />
            <TouchableOpacity
              onPress={() => setIsVisibleModalSelect(!isVisibleModalSelect)}>
              <AntDesign name="close" size={24} color={colors.dark.d500} />
            </TouchableOpacity>
          </Row>
          <Space height={12} />
          <Input
            value={searchKey}
            onChange={val => setSearchKey(val)}
            placeholder="Search"
            prefix={<SearchNormal1 size={20} color={colors.gray.g500} />}
          />

          <FlatList
            showsVerticalScrollIndicator={false}
            data={results}
            renderItem={({item}) => (
              <Row
                key={item.id}
                styles={{marginVertical: 12}}
                onPress={() => {
                  onSelect(item);
                  setIsVisibleModalSelect(!isVisibleModalSelect);
                  setSearchKey('');
                }}>
                <TextComponent
                  text={item.name}
                  flex={1}
                  color={
                    item.id === selected
                      ? colors.primary.p500
                      : colors.dark.d500
                  }
                />
                {item.id === selected && (
                  <TickCircle
                    size={18}
                    color={colors.primary.p400}
                    variant="Bold"
                  />
                )}
              </Row>
            )}
          />
        </Section>
      </Modal>
    </>
  );
};

export default DropdownPicker;
