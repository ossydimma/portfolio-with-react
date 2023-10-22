import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import AboutMe from './pages/AboutMe'
import Portfolio from "./pages/Portfolio"
import Contacts from "./pages/Contacts"



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={ <App/>} />
        <Route path='/AboutMe' element={<AboutMe/>} />
        <Route path='/Portfolio' element={<Portfolio/>} />
        <Route path='/Contacts' element={<Contacts/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
