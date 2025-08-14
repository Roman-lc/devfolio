//import { useState } from 'react'

import Fondo from './components/Fondo'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import About from './components/About'
import Table from './components/Table'
import Contact from './components/Contact'
import Footer from './components/Footer'

import data from './data/Proyects.json'


function App() {

  return (
    <>
      <Fondo />
      <Navbar />
      <LandingPage />
      <About />
      <Table data={{data}} />
      <Contact />
      <Footer />
    </>
  )
}

export default App
