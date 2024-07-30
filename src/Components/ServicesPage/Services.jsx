import React from 'react'
import Navbar from '../../Componen/Navbar'
import OfferedServices from './OfferedServices'
import Footer from '../Footer/Footer'
import Ourservices from './Ourservices'
import ServiceCard from './ServiceCard'

function Services() {
  return (
    <div>
      <Navbar />
      <Ourservices />
      {/* <ServiceCard /> */}
      <OfferedServices />
      <Footer />
    </div>
  )
}

export default Services
