import React from "react";
import StarsCanvas from "./StarBackground";
import About from "./Components/Aboutus/About";
import Footer from "./Components/Footer/Footer";
import Testi from "./Components/Testimonials/Testi";
import HeadLine from "./Components/Headlinecards/HeadLine";

export default function App() {
  return (
    <>
      <StarsCanvas />
      <div className="bg-black ">
        <HeadLine />
        <About />
        <Testi />
        <Footer />
      </div>
    </>
  );
}
