import { useEffect, useState } from 'react'
import Fondo from './components/Fondo'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import About from './components/About'
import Table from './components/Table'
import Contact from './components/Contact'
import Footer from './components/Footer'
import data from './data/Proyects.json'

function App() {
  const [theme, setTheme] = useState(() => {
    if (localStorage.theme) return localStorage.theme
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.theme = theme
  }, [theme])

  const handleChangeTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <>
      <Fondo />
      <Navbar theme={theme} handleChangeTheme={handleChangeTheme} />
      <LandingPage />
      <About />
      <div className="w-full h-screen dark:bg-transparent transition-colors duration-300"></div>
      <Table data={data} />
      <Contact />
      <Footer />
    </>
  )
}

export default App
