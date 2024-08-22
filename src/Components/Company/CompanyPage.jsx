import React from 'react'
import Navbar from '../../Componen/Navbar'
import Company from './Company'
import Footer from '../Footer/Footer'
import Whoarewe from './Whoarewe'
import Whychooseus from './Whychooseus'
import Brands from './Brands'
import Download from './Download'


function CompanyPage() {
  return (
    <div>
      <Navbar />
     
      <Whoarewe />
      <Download />
      <Whychooseus />
      <Brands />
      <Company />
      
      <Footer />
    </div>
  )
}

export default CompanyPage
