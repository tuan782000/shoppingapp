import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Tabbar, TextComponent, Section, Tag} from '../../../components';
import {colors} from '../../../constants/colors';

const TopCategories = () => {
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    // const api = await fetch('');
    try {
      setCategories([
        {
          id: '1',
          title: 'Hat',
        },
        {
          id: '2',
          title: 'Men',
        },
        {
          id: '3',
          title: 'Women',
        },
        {
          id: '4',
          title: 'Kids wear',
        },
        {
          id: '5',
          title: 'Sport',
        },
        {
          id: '6',
          title: 'Underwear',
        },
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  /*
    const [itemsSelected, setItemsSelected] = useState<string[]>([])
    const handleToggleSelected = (id:string) => {
        const items = [...itemsSelected]

        const index = items.findIndex(element => element === id)

        if(index !== -1) {
            items.push(id)
        } else {
            items.splice(index, 1)
        }

        setItemsSelected(items);
    }
  */

  return (
    <>
      {/* <Tabbar title="Top categories" viewAll onViewAll={() => {}} /> */}
      <View style={{paddingHorizontal: 16}}>
        <Tabbar title="Top categories" />
      </View>
      {categories.length > 0 && (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories}
          style={{paddingHorizontal: 16, paddingVertical: 12}}
          ListHeaderComponent={
            // <View style={{paddingLeft: 16}}>
            //   <TextComponent text={'All'} />
            // </View>
            <Tag
              styles={{
                backgroundColor: colors.primary.p500,
                paddingLeft: 16,
                marginRight: 16,
              }}
              item={{
                id: 'all',
                title: 'All',
              }}
              onCheck={vals => {
                console.log(vals);
              }}
              checked={['all']}
              textStyles={{color: colors.white.w500}}
            />
          }
          renderItem={({item, index}) => (
            // <View
            //   key={item.id}
            //   style={{paddingHorizontal: 16, marginRight: 12}}>
            //   <TextComponent text={item.title} />
            // </View>
            <Tag
              styles={{marginRight: index < categories.length - 1 ? 16 : 0}}
              key={item.id}
              item={item}
              onCheck={id => console.log(id)}
            />
          )}
        />
      )}
    </>
  );
};

export default TopCategories;
