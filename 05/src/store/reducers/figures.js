import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  knight: { row: 0, column: 0 },
  rook: { row: 0, column: 4 },
  currentFigure: null,
  turn: 'knight' 
}

export const figuresSlice = createSlice({
  name: 'figures',
  initialState,
  reducers: {
    setCurrentFigure: (state, action) => {
      
      if (action.payload === state.turn) {
        state.currentFigure = action.payload
      }
    },
    setToPosition: (state, action) => {
      if (!state.currentFigure) return
      
      const { row, column } = action.payload
      
      if (state.currentFigure === 'knight') {
        const dx = Math.abs(column - state.knight.column)
        const dy = Math.abs(row - state.knight.row)
        if ((dx === 2 && dy === 1) || (dx === 1 && dy === 2)) {
          state.knight = { row, column }
          state.currentFigure = null
          state.turn = 'rook' 
        }
      } else if (state.currentFigure === 'rook') {
        if (row === state.rook.row || column === state.rook.column) {
          state.rook = { row, column }
          state.currentFigure = null
          state.turn = 'knight' 
        }
      }
    },
    
    passTurn: (state) => {
      state.currentFigure = null
      state.turn = state.turn === 'knight' ? 'rook' : 'knight'
    }
  }
})

export const { setCurrentFigure, setToPosition, passTurn } = figuresSlice.actions

export const selectFigures = (state) => state.figures
export const selectKnightPosition = (state) => state.figures.knight
export const selectRookPosition = (state) => state.figures.rook
export const selectCurrentFigure = (state) => state.figures.currentFigure
export const selectTurn = (state) => state.figures.turn 

export default figuresSlice.reducer