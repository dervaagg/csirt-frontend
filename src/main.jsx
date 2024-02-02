import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageNotFound from './pages/PagenotFound.jsx'
import Admin from './pages/Admin.jsx'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
        <Route path="/31937129843/admin" element={<Admin />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>  
  </React.StrictMode>,
)