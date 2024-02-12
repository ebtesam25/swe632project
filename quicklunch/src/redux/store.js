// In store.js
import { configureStore } from '@reduxjs/toolkit';
import orderReducer from './menuSlice';
import userReducer from './userSlice';



export const store = configureStore({
    reducer: {
      user: userReducer,
      order: orderReducer,
      // Add other reducers here
    },
  });