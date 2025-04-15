import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { setupStore } from './store/index.js'
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Изменено с 'react-router' на 'react-router-dom'

import { Table } from './components/Table.jsx'
import { Form } from './components/Form.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={setupStore()}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Table />} />
          <Route path="/edit/:id" element={<Form />} /> {/* Изменено с /form/:id на /edit/:id */}
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)