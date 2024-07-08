/*
Chú ý: không phải cái gì cũng đưa vào Redux

Nên đưa vào redux các dữ liệu chung chung sử dụng nhiều nơi như: giỏ hàng, like, -- đem bảo vào trong store

Lấy ví dụ: Nút Yêu thích sản phẩm - nó nằm trang Home - Khi mà người dùng nhấn vào nó sẽ ghi nhớ - mỗi lần vào lại ứng dụng nó sẽ lấy dữ liệu đó lên lại để hiển thị.

Tóm lại cái nào sử dụng nhiều nơi, nhưng mà chức năng nhỏ nhỏ thôi thì nên cho vào redux lưu vào store

Các cái nào mang tính chất quy mô lớn như: Danh sách sản phẩm - không nên cho vào store
*/

import {createSlice} from '@reduxjs/toolkit';

const initstate = {
  email: '',
  id: '',
  isVerify: false,
  accesstoken: '',
  favourites: [],
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    data: initstate,
  },
  reducers: {
    // state: chính là initstate của mình
    // action là cái mình đang gửi đi - action.payload cái mà ta sẽ cập nhật
    addAuth: (state, action) => {
      state.data = action.payload;
    },
    logout: (state, _action) => {
      state.data = initstate;
    },
  },
});

export const authReducer = authSlice.reducer;

export const {addAuth, logout} = authSlice.actions;

export const authSelector = (state: any) => state.authReducer.data;
