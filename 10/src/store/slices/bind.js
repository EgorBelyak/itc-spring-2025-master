import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  direction: null,
  bindings: {
    left: 'ArrowLeft',
    right: 'ArrowRight',
    up: 'ArrowUp',
    down: 'ArrowDown'
  }
}

export const bindSlice = createSlice({
  name: "bind",
  initialState,
  reducers: {
    setBind: (state, action) => {
      const { direction, key } = action.payload;
      state.bindings[direction] = key;
    },
    selectDirection: (state, action) => {
      state.direction = action.payload;
    }
  },
  selectors: {
    getBinds: (state) => state.bindings,
    getDirection: (state) => state.direction,
  }
});