import { combineSlices, configureStore } from '@reduxjs/toolkit'
import { moveSlice } from './slices/move';
import { itemsSlice } from './slices/items';

const reducer = combineSlices(moveSlice, itemsSlice);

export const setupStore = () => configureStore({
  reducer,
});
