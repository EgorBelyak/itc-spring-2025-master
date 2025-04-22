import './App.css'
import { Board } from './components/Board'
import { setupStore } from './store'
import { Provider } from 'react-redux'

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
