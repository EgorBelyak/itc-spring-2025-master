import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  source: null,
}

export const moveSlice = createSlice({
  name: 'move',
  initialState,
  reducers: {
    setSource: (state, action) => {
      state.source = action.payload;
    },
    dropSource: (state) => {
      state.source = null;
    },
  },
  selectors: {
    getSource: (state) => state.source,
  },
});

export const { setSource, dropSource } = moveSlice.actions;
export const { getSource } = moveSlice.selectors;