import './App.css'
import { Board } from './Board'
import { Solved } from './Solved'
import { Shuffle } from './Shuffle'

export function App() {
  return (
    <>
      <Board />
      <Solved />
      <Shuffle />
    </>
  )
}
