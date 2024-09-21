import React from 'react'
import Navbar from '../../Componen/Navbar'
import Footer from '../Footer/Footer'
import Valves from './Valves'
import Herosection from './Herosection'
import Aboutsection from './Aboutsection'
import StockTable from './StockTable'

function CesareBonetti() {
  return (
    <div>
        <Navbar />
        <Herosection />
        <Aboutsection />
        <StockTable />
        <Valves />
        <Footer />
    </div>
  )
}

export default CesareBonetti
