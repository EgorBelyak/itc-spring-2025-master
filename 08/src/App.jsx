import './App.css'
import classes from './App.module.css'
import { Board } from './components/Board'
import { FigureBox } from './components/figures/Box'
import { Provider } from 'react-redux'
import { setupStore } from './store'

function App() {
  return (
    <div className={classes.container}>
      <Provider store={setupStore()}>
        <Board />
        <FigureBox />
      </Provider>
    </div>
  )
}

export default App
