import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    <Toaster />
  </BrowserRouter>
)
