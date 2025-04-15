import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { rowsSlice } from './reducers/rows.js'

const reducer = combineReducers({
  [rowsSlice.reducerPath]: rowsSlice.reducer,
});

export const setupStore = () => configureStore({
  reducer,
});
