import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import productReducer from '../features/product/productSlice';
import userReducer from '../features/user/userSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    product: productReducer,
    user: userReducer
  },
});
