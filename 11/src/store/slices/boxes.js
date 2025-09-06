import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  green: {
    row: 0, column: 0, value: 10,
  },
  orange: {
    row: 6, column: 6, value: 10,
  }
}

export const boxesSlice = createSlice({
  name: "boxes",
  initialState,
  reducers: {
    moveBox: (state, action) => {
      const { color, row, column } = action.payload;
      if (color === 'green') {
        state.green.row = row;
        state.green.column = column;
      } else {
        state.orange.row = row;
        state.orange.column = column;
      }
    },
    modifyValue: (state, action) => {
      const { color, amount } = action.payload;
      if (color === 'green') {
        state.green.value += amount;
      } else {
        state.orange.value += amount;
      }
    }
  },
  selectors: {
    getGreenBox: (state) => state.green,
    getOrangeBox: (state) => state.orange,
    canMove: (state) => {
      // Добавим проверку, что значение не отрицательное
      return state.green.value > 0 && state.orange.value > 0;
    }
  }
});