import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './components/App.jsx'
import { setupStore } from './store/index.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={setupStore()}>
      <App />
    </Provider>
  </StrictMode>,
)
