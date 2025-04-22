import { configureStore, combineReducers } from '@reduxjs/toolkit'
import figuresReducer from './reducers/figures'

const rootReducer = combineReducers({
  figures: figuresReducer
})

export const setupStore = () => configureStore({
  reducer: rootReducer
})