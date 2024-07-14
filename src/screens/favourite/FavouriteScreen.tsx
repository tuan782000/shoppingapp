import {View, Text, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Container, Section, Space, TextComponent} from '../../components';
import {fonts} from '../../constants/fonts';
import {globalStyles} from '../../styles/globalStyles';
import {ProductModel} from '../../models/ProductModel';
import ProductList from '../../components/ProductList';
import {HandleAPI} from '../../api/handleAPI';
import {useSelector} from 'react-redux';
import {profileSelector} from '../../redux/reducers/profileReducer';
import {authSelector} from '../../redux/reducers/authReducer';

const FavouriteScreen = () => {
  const [isLoading, setisLoading] = useState(false);
  const [products, setProducts] = useState<ProductModel[]>([]);

  const profile = useSelector(profileSelector);
  const user = useSelector(authSelector);

  useEffect(() => {
    handleFavouriteProducts(profile.favourites ?? []);
  }, [profile.favourites]);

  // const handleFavouriteProducts = async () => {
  //   setisLoading(true);
  //   const api = `/all-products`;

  //   try {
  //     const res = await HandleAPI.Product(api);
  //     const listProducts = res.data;
  //     // console.log(res.data);
  //     if (user.id) {
  //       const favourites: string[] = [...(profile.favourites ?? [])];
  //       console.log(favourites);

  //       // Tạo một mảng các sản phẩm yêu thích dựa trên _id
  //       // so sánh 2 mảng với nhau - tìm ra điểm chung giữa 2 mảng
  //       const favouriteProducts = listProducts.filter(
  //         (product: {_id: string}) => favourites.includes(product._id),
  //       );

  //       // Thực hiện các thao tác với favouriteProducts nếu cần
  //       // console.log('Favourite Products:', favouriteProducts);
  //       setProducts(favouriteProducts);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setisLoading(false);
  //   }
  // };

  const handleFavouriteProducts = async (listProdcutFavourites: []) => {
    setisLoading(true);
    const api = `/get-product-favourites`;

    try {
      const listProducts = await HandleAPI.Product(
        api,
        listProdcutFavourites,
        'post',
      );

      if (user.id) {
        setProducts(listProducts.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setisLoading(false);
    }
  };

  return (
    <Container
      isScroll={false}
      back
      title="Favourite Products"
      titlePosition="center">
      {isLoading ? (
        <Section styles={[globalStyles.center]} flex={1}>
          <ActivityIndicator />
        </Section>
      ) : (
        <ProductList items={products} />
      )}
    </Container>
  );
};

export default FavouriteScreen;
