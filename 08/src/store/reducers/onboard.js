import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  figures: {}, // [<row>:<col>]: slug
}

const boardKey = (row, column) => "" + row + ":" + column;
export const getFigure = (figures, row, column) => (
  figures[boardKey(row, column)]
);

export const onBoardSlice = createSlice({
  name: "onboard",
  initialState,

  reducers: {
    setFigure: (state, action) => {
      const { row, column, slug } = action.payload;
      state.figures[boardKey(row, column)] = slug;
    },
    removeFigure: (state, action) => {
      const { row, column } = action.payload;
      delete state.figures[boardKey(row, column)];
    },
    moveFigure: (state, action) => {
      const { fromRow, fromCol, toRow, toCol } = action.payload;
      const slug = state.figures[boardKey(fromRow, fromCol)];
      if (slug) {
        state.figures[boardKey(toRow, toCol)] = slug;
        delete state.figures[boardKey(fromRow, fromCol)];
      }
    }
  },
  selectors: {
    getFigures: (state) => state.figures,
  }
});


export const { setFigure, removeFigure, moveFigure } = onBoardSlice.actions;
export const { getFigures } = onBoardSlice.selectors;
export default onBoardSlice.reducer;