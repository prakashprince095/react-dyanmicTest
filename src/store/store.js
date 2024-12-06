import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from './tokenSlice';

const store = configureStore({
  reducer: {
    token: tokenReducer, // Correct way to register the token slice
  },
});

export default store;
