import './App.css'
import {Routes, Route } from 'react-router-dom'
import About from './components/About'
import Header from './components/Header'
import Expertises from './components/Expertises'
import Education from './components/Education'
import Footer from './components/Footer'
import Insta from './components/Insta'
import Navbar from './components/Navbar'

function App() {
  

  return (
    <>
      <Header/>
      <About/>
      <Expertises/>
      <Education/>
      <Insta/>
      <Footer/>
    </>
  )
}

export default App
