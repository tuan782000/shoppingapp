import { createSlice } from "@reduxjs/toolkit";

const initstate = {
  email: '',
  id: '',
  isVerify: false,
  accesstoken: ''
};

const authSlide = createSlice({
  name: 'auth',
  initialState: {
    data: initstate
  },
  reducers: {
    addAuth: (state, action) => {
      state.data = action.payload;
    },
    logout: (state, _action) => {
      state.data = initstate;
    }
  }
});

export const authReducer = authSlide.reducer;
export const { addAuth, logout } = authSlide.actions;
export const authSelector = (state: any) => state.authReducer.data;