import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  row: 0,
  column: 0,
};

export const knightSlice = createSlice({
  name: 'knight',
  initialState,

  reducers: {
    setPosition: (state, action) => {
      state.row = action.payload.row;
      state.column = action.payload.column;
    },
  },
  selectors: {
    getRow: (state) => state.row,
    getColumn: (state) => state.column,
  },
});

export const { setPosition } = knightSlice.actions;
export const { getRow, getColumn } = knightSlice.selectors;

export default knightSlice.reducer;