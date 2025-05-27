import { createSlice } from '@reduxjs/toolkit'

const randomPinValue = () => {
  // Теперь функция возвращает только значение, цвет будет определяться позже
  return 1 + Math.floor(Math.random() * 3);
}

export const pinKey = (row, column) => ('' + row + ':' + column);

const initialState = () => {
  const pins = {};

  // Заполняем только верхнюю половину поля (первые 4 строки)
  for (let row = 0; row < 4; row++) {
    for (let column = 0; column < 8; column++) {
      const value = randomPinValue();
      // Определяем симметричную позицию
      const symRow = 7 - row;
      const symColumn = 7 - column;

      // Для оригинальной позиции выбираем случайный цвет
      const color = Math.random() > 0.5 ? 'green' : 'orange';
      pins[pinKey(row, column)] = { color, value };

      // Для симметричной позиции используем противоположный цвет и то же значение
      pins[pinKey(symRow, symColumn)] = {
        color: color === 'green' ? 'orange' : 'green',
        value
      };
    }
  }

  return { pins };
}

export const pinsSlice = createSlice({
  name: "pins",
  initialState,
  reducers: {
    cleanPins: (state, action) => {
      const { sr, sc, er, ec } = action.payload;
      for (let row = sr; row <= er; row++) {
        for (let column = sc; column <= ec; column++) {
          delete state.pins[pinKey(row, column)];
        }
      }
    },
  },
  selectors: {
    getPins: (state) => state.pins,
  },
});