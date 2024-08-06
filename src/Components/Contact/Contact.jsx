import React from 'react'
import Letter from './Letter'
import Navbar from '../../Componen/Navbar'
import Footer from '../Footer/Footer'
import Contactform from './Contactform'

function Contact() {
  return (
    <div>
    <Navbar />
      {/* <Letter /> */}
      <Contactform />
      <Footer />
    </div>
  )
}

export default Contact
