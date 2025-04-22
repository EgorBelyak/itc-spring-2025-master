import { configureStore } from '@reduxjs/toolkit';
import knightReducer from './reducers/KnightSlice';

export const setupStore = () => configureStore({
  reducer: {
    knight: knightReducer
  },
});