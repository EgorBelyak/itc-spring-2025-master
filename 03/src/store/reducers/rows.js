// rows.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rows: [
    { id: 1, name: "Петр Сидоров", city: "Екатеринбург" },
    { id: 2, name: "Иван Сидоров", city: "Екатеринбург" },
    { id: 3, name: "Сидор Сидоров", city: "Екатеринбург" },
    { id: 4, name: "Иннокентий Сидоров", city: "Екатеринбург" },
  ],
  currentRow: null,
};

export const rowsSlice = createSlice({
  name: "rows",
  initialState,
  reducers: {
    setRow: (state, action) => {
      const index = state.rows.findIndex(row => row.id === action.payload.id);
      if (index !== -1) {
        state.rows[index] = action.payload;
      }
    },
    setCurrentRow: (state, action) => {
      state.currentRow = action.payload;
    }
  },
  selectors: {
    getRows: (state) => state.rows,
    getCurrentRow: (state) => state.currentRow,
  },
});

export const { actions, reducer, selectors } = rowsSlice;