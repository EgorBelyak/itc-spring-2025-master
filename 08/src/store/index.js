import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { selectedSlice } from './reducers/selected'
import { onBoardSlice } from './reducers/onboard';

const reducer = combineReducers({
  [selectedSlice.reducerPath]: selectedSlice.reducer,
  [onBoardSlice.reducerPath]: onBoardSlice.reducer,
});

export const setupStore = () => configureStore({
  reducer,
});
