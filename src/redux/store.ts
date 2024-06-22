import {configureStore} from '@reduxjs/toolkit';
import {authReducer} from './reducers/authReducer';

const store = configureStore({
  // reducer chứa các reducer con - các reducer con do mình tạo ra
  // trong reducer con có chứa action và payload - payload là nội dung người dùng gửi lên
  reducer: {
    authReducer,
  },
});

export default store;

// redux giống useState dạng Global
