import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import AboutMe from './pages/AboutMe.jsx'
import Portfolio from "./pages/Portfolio.jsx"
import Contacts from "./pages/Contacts.jsx"



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
