import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Import Other Componen
import App from './App.jsx'
import Admin from './pages/Admin.jsx'
import Dashboard from './admin/Dashboard.jsx'
import { AdminAccessProvider } from './UI/AdminAccessContext.jsx';
import './index.css'

// Import PDF Componen
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AdminAccessProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<App />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </AdminAccessProvider>
  </React.StrictMode>,
)