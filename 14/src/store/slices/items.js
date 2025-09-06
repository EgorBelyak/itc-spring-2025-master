import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  1: [1, 2, 3],
  2: [],
  3: [],
}

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    moveItem: (state, action) => {
      const { from, to } = action.payload;

      // Проверка на пустой исходный стержень
      if (state[from].length === 0) return;

      const itemToMove = state[from][0];

      // Проверка правил перемещения
      if (state[to].length > 0 && state[to][0] < itemToMove) {
        return; // Нельзя класть больший диск на меньший
      }

      // Выполняем перемещение
      state[from].shift(); // Удаляем первый элемент
      state[to].unshift(itemToMove); // Добавляем в начало
    },
  },
  selectors: {
    getItems: (state) => state,
  },
});

export const { moveItem } = itemsSlice.actions;
export const { getItems } = itemsSlice.selectors;