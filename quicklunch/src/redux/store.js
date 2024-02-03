// In store.js
import { configureStore } from '@reduxjs/toolkit';
import orderReducer from './menuSlice';



export const store = configureStore({
    reducer: {
      order: orderReducer,
      // Add other reducers here
    },
  });