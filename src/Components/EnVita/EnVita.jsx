import React from 'react'
import "./envita.css"
import Navbar from '../../Componen/Navbar'
import Footer from '../Footer/Footer'
import Testienvita from './Testienvita'
import Product from './Product'
import Features from './Features'
import Comparison from './Comparison'
function EnVita() {
  return (
    <div>
		<Navbar />
		<Product />
		<Features />
		<Comparison />
		<Testienvita />
		<Footer />
	</div>
  )
}

export default EnVita
