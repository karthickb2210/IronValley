import React from 'react'
import Navbar from '../../Componen/Navbar'
import Company from './Company'
import Footer from '../Footer/Footer'
import Whoarewe from './Whoarewe'
import Whychooseus from './Whychooseus'

function CompanyPage() {
  return (
    <div>
      <Navbar />
      <Whoarewe />
      <Whychooseus />
      <Company />
      <Footer />
    </div>
  )
}

export default CompanyPage
