import { configureStore } from '@reduxjs/toolkit';
import { boardReducer, resetBoard } from './reducers/board';

export const setupStore = () => {
  return configureStore({
    reducer: {
      board: boardReducer,
    },
  });
};

export { resetBoard };