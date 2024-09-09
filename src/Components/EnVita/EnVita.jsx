import React from 'react'
import "./envita.css"
import Navbar from '../../Componen/Navbar'
import Footer from '../Footer/Footer'
import Testienvita from './Testienvita'
import Product from './Product'
import Features from './Features'
import Comparison from './Comparison'
import EcoFriendlyProduct from './EcoFriendlyProduct'
import DealershipInfo from './DealershipInfo'
import EnvitaInfo from './EnvitaInfo'
function EnVita() {
  return (
    <div>
		<Navbar />
		<DealershipInfo />
		<Product />
		<Features />
		<EcoFriendlyProduct />
		<Comparison />
		<EnvitaInfo />
		<Testienvita />
		<Footer />
	</div>
  )
}

export default EnVita
