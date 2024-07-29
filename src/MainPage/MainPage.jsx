import React from 'react'
import HeadLine from '../Components/Headlinecards/HeadLine'
import About from "../Components/Aboutus/About"
import Testi from "../Components/Testimonials/Testi"
import Footer from "../Components/Footer/Footer"
function MainPage() {
  return (
    <div>
      <div className="bg-black ">
      <HeadLine />
        <About />
        <Testi />
        <Footer />
      </div>
    </div>
  )
}

export default MainPage
