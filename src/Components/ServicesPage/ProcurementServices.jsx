import React from 'react'
import baumer from "./Companylogo/baumer.png"
import emerson from "./Companylogo/emerson.png"
import honeywell from "./Companylogo/honeywell.png"
import ferris from "./Companylogo/ferris.png"
import kei from "./Companylogo/kei.png"
import peperrl from "./Companylogo/peperrl.png"
import robertshaw from "./Companylogo/robertshaw.png"
import samson from "./Companylogo/samson.png"
import wikai from "./Companylogo/wikai.png"
import baker from "./Companylogo/bakerhughes.png"

import abb from "./Companylogo/abb.png"
import allenbradley from "./Companylogo/allenbradley.png"
import conductix from "./Companylogo/conductix.png"
import illinois from "./Companylogo/illinois.png"
import interapp from "./Companylogo/interapp.png"
import rittal from "./Companylogo/rittal.png"
import kendeil from "./Companylogo/kendeil.png"
import seimens from "./Companylogo/seimens.png"
import smc from "./Companylogo/smc.png"



export default function ProcurementServices() {
  return (
    <div className='mx-12'>
      <div className="p-8 bg-black text-white relative">
      <h1 className="text-4xl font-bold mb-8 text-center">Procurement Services</h1>
      <div className="max-w-3xl  mx-auto mb-8 text-balance">
        <p className="text-lg mb-4">
          Our procurement services are designed to ensure that you receive the best products and services at the most competitive prices. We work with a diverse range of suppliers and vendors to meet your unique needs, ensuring quality and efficiency at every step.
        
          From strategic sourcing to contract management, we provide comprehensive solutions that streamline your procurement processes. Our team of experts leverages industry knowledge and advanced technologies to deliver exceptional value and drive sustainable growth.
        
          We are committed to building strong, long-term relationships with our clients, providing personalized service and tailored solutions that align with your business objectives. Trust us to handle your procurement needs with professionalism and excellence.
        </p>
      </div>
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-12">Our Clients</h2>
        <div className=" grid lg:grid-cols-4  xl:grid-cols-5 md:grid-cols-3   sm:grid-cols-2 items-center gap-16  ">
        
          <img  src={baumer} alt="1" className="rounded-xl max-w-40 object-cover  transition-transform duration-400 hover:scale-110 bg-white "/>
          
          <img  src={emerson}  alt="1" className="max-w-40 max-h-40 rounded-xl object-cover transition-transform duration-400 hover:scale-110 bg-white"/>
          <img  src={honeywell} alt="1" className="rounded-xl max-w-40 object-cover  transition-transform duration-400 hover:scale-110 bg-white"/>
          <img  src={ferris} alt="1" className="rounded-xl max-w-40 max-h-40 object-scale-down  transition-transform duration-400 hover:scale-110 bg-white"/>
          <img src={kei} alt="Client 2" className="max-w-40 max-h-40 rounded-xl object-cover transition-transform duration-400 hover:scale-110 bg-white"/>
          <img src={peperrl} alt="Client 2" className="max-w-40 max-h-40 rounded-xl object-cover transition-transform duration-400 hover:scale-110 bg-white"/>
          <img src={robertshaw} alt="Client 2" className="max-w-40 max-h-40 rounded-xl object-cover transition-transform duration-400 hover:scale-110 bg-white"/>
          <img src={samson} alt="Client 1" className="max-w-40 max-h-40 rounded-xl object-cover transition-transform duration-400 hover:scale-110 bg-white"/>
          <img src={wikai} alt="Client 2" className="max-w-40 max-h-40 rounded-xl object-cover transition-transform duration-400 hover:scale-110 bg-white"/>
          <img src={baker} alt="Client 3" className="max-w-40 max-h-40 rounded-xl object-cover transition-transform duration-400 hover:scale-110 bg-white"/>
        
          <img src={abb} alt="Client 3" className="max-w-40 max-h-40 rounded-xl object-cover transition-transform duration-400 hover:scale-110 bg-white"/>
          <img src={allenbradley} alt="Client 3" className="max-w-40 max-h-40 rounded-xl object-cover transition-transform duration-400 hover:scale-110 bg-white"/>
          <img src={conductix} alt="Client 3" className="max-w-40 max-h-40 rounded-xl object-cover transition-transform duration-400 hover:scale-110 bg-white"/>
          <img src={illinois} alt="Client 3" className="max-w-40 max-h-40 rounded-xl object-cover transition-transform duration-400 hover:scale-110 bg-white"/>
          <img src={interapp} alt="Client 3" className="max-w-40 max-h-40 rounded-xl object-cover transition-transform duration-400 hover:scale-110 bg-white"/>
          <img src={rittal} alt="Client 3" className="max-w-40 max-h-40 rounded-xl object-cover transition-transform duration-400 hover:scale-110 bg-white"/>
          <img src={seimens} alt="Client 3" className="max-w-40 max-h-40 rounded-xl object-cover transition-transform duration-400 hover:scale-110 bg-white"/>
          <img src={kendeil} alt="Client 3" className="max-w-40 max-h-40 rounded-xl object-cover transition-transform duration-400 hover:scale-110 bg-white"/>
          <img src={smc} alt="Client 3" className="max-w-40 max-h-40 rounded-xl object-cover transition-transform duration-400 hover:scale-110 bg-white"/>


        
          {/* Add more images as needed */}
        </div>
      </div>
    </div>
      
    </div>
  )
}
