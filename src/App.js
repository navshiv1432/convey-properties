import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import InputFields from './components/InputFields'
import Projects from './components/Projects'
 import Footer from './components/Footer'

export const App = () => {
  return (
    <div className='app-conatiner'>
      <Navbar/>
      <Banner/>
      <InputFields/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App