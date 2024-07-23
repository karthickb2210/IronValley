import React from 'react'
import Header from './Componen/Header'
import StarsCanvas from './StarBackground'
import About from './Components/Aboutus/About'
import Footer from './Components/Footer/Footer'
import Testi from './Components/Testimonials/Testi'



export default function App() {
  return (
    <>
    <div className=' bg-black '> 
      <StarsCanvas/>
      <Header/>
      <About />
      <Testi />
      <Footer />
      
    </div>
     
    </>
  )
}
