import { combineSlices, configureStore } from '@reduxjs/toolkit'
import { bonesSlice } from './slices/bones';

export const setupStore = () => configureStore({
  reducer: combineSlices(
    bonesSlice,
  )
});
