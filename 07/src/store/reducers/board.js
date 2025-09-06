import { createSlice } from "@reduxjs/toolkit";

const boardWidth = 7;
const middle = Math.floor(boardWidth / 2);

export const onBoard = (x, y) => {
  return (
    x >= 0 && x < boardWidth &&
    y >= 0 && y < boardWidth &&
    (Math.abs(x - middle) <= 1 || Math.abs(y - middle) <= 1)
  );
}

const fillBoard = () => {
  const result = {};
  for (let i = 0; i < boardWidth; i++) {
    for (let j = 0; j < boardWidth; j++) {
      if (onBoard(i, j)) {
        result[`${i}:${j}`] = true;
      }
    }
  }
  result["3:3"] = false; // remove middle
  return result;
}

const initialState = {
  selected: null,
  cells: fillBoard(),
}

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    selectCell: (state, action) => {
      const { row, col } = action.payload;
      const key = `${row}:${col}`;
      
      if (!state.selected && state.cells[key]) {
        state.selected = { row, col }; // select peg
      } 
      else if (state.selected?.row === row && state.selected?.col === col) {
        state.selected = null; // deselect
      }
      else if (state.selected) {
        // Check valid move
        const dx = row - state.selected.row;
        const dy = col - state.selected.col;
        const isVerticalMove = Math.abs(dx) === 2 && dy === 0;
        const isHorizontalMove = Math.abs(dy) === 2 && dx === 0;
        
        if (isVerticalMove || isHorizontalMove) {
          const midRow = state.selected.row + dx/2;
          const midCol = state.selected.col + dy/2;
          const midKey = `${midRow}:${midCol}`;
          
          if (state.cells[midKey] && !state.cells[key] && onBoard(row, col)) {
            // Make the move
            state.cells[`${state.selected.row}:${state.selected.col}`] = false;
            state.cells[midKey] = false;
            state.cells[key] = true;
            state.selected = null;
          }
        }
      }
    },
    resetBoard: (state) => {
      state.selected = null;
      state.cells = fillBoard();
    },
  },
});

export const { selectCell, resetBoard } = boardSlice.actions;
export const boardReducer = boardSlice.reducer;

// Selectors
export const getSelected = (state) => state.board.selected;
export const getCells = (state) => state.board.cells;
export const getRemainingPegs = (state) => 
  Object.values(state.board.cells).filter(Boolean).length;