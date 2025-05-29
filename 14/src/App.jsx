import './App.css'
import { Towers } from './components/Towers'
import { Provider } from 'react-redux'
import { setupStore } from './store'

function App() {
  return (
    <Provider store={setupStore()}>
      <Towers />
    </Provider>
  )
}

export default App
