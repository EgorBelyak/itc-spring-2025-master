import './App.css'
import { Board } from './components/Board'
import { Provider } from 'react-redux'
import { setupStore } from './store'

function App() {
  return (
    <>
      <Provider store={setupStore()}>
        <Board />
      </Provider>
    </>
  )
}

export default App
