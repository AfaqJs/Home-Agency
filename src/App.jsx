import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Business from './components/Business'
import Footer from './components/Footer'


const App = () => {
  return (
    <>
    <div className=" ss:pr-[4rem] ss:pl-[4rem] pr-[2rem] pl-[2rem]">
      <Header/>
    </div>
    <Hero/>
    <About/>
    <Portfolio/>
    <Business/>
    <Footer/>
    
    
    </>
  )
}

export default App
