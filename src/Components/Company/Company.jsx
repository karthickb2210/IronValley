import React from 'react'
import Slider from 'react-slick';
import bgr from "./images/bgrenergy.png"
import ind from "./images/indianoil.png"
import sugunafoods from "./images/sugunafoods.png"

import kwaitoil from "./images/kwaitoil.png"
import knpc from "./images/knpc.jpeg"
import kipic from "./images/kipic.png"

import dolphine from "./images/quatar/dolphinenergy.png"
import qchen from "./images/quatar/q chen.jpeg"
import qsteel from "./images/quatar/qsteel.png"
import quapco from "./images/quatar/quapco.jpeg"
import rloc from "./images/quatar/rloc.png"

import omandrydock from "./images/oman/omandrydock.jpg"
import omanoil from "./images/oman/omanoil.png"
import orpic from "./images/oman/orpic.png"

import "slick-carousel/slick/slick.css";
import ces from "./images/ces.png"
import "slick-carousel/slick/slick-theme.css";
function Company() {
    const settings3 = {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        infinite:true,
        autoplaySpeed: 1200,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    };
    const settingsIndia = {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        infinite:true,
        autoplaySpeed: 1700,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };
    const settings2 = {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        infinite:true,
        autoplaySpeed: 1400,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    };
    const settings4 = {
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        infinite:true,
        autoplaySpeed: 1600,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    };
  return (
    <div className=' mx-16'>
    <h1 class=" text-4xl font-medium title-font text-center text-white mb-10">We provide our services to clients like 
    </h1>
    <div className="customer-logos ">
        <h1 className=' text-white text-4xl text-center my-16'>India</h1>
            <Slider  {...settingsIndia}>
                <div className='max-w-40 max-h-32'><img className='rounded-xl'  src={bgr} alt="Logo 1" /></div>
                <div className=' max-w-40'><img className='rounded-xl' src={ind} alt="Logo 2" /></div>
                <div className=' max-w-40'><img className='rounded-xl' src={sugunafoods} alt="Logo 3" /></div>
                {/* <div className=' max-w-40'><img className='rounded-xl' src={ces} alt="Logo 4" /></div> */}
                {/* Add more logos as needed */}
            </Slider>
            <div>
            <h1 className=' text-white text-4xl text-center my-16'>Kuwait</h1>
            <Slider {...settings3}>
                <div className='max-w-40'><img className='rounded-xl'  src={kwaitoil} alt="Logo 1" /></div>
                <div className=' max-w-40'><img className='rounded-xl' src={kipic} alt="Logo 2" /></div>
                <div className=' max-w-40'><img className='rounded-xl' src={knpc} alt="Logo 3" /></div>
                
            </Slider>
            </div>
            <div>
            <h1 className=' text-white text-4xl text-center my-16'>Qatar</h1>
            <Slider {...settings4}>
                <div className='max-w-40'><img className='rounded-xl'  src={dolphine} alt="Logo 1" /></div>
                <div className=' max-w-40'><img className='rounded-xl' src={qchen} alt="Logo 2" /></div>
                <div className=' max-w-40'><img className='rounded-xl' src={qsteel} alt="Logo 3" /></div>
                <div className=' max-w-40'><img className='rounded-xl' src={quapco} alt="Logo 3" /></div>
                <div className=' max-w-40'><img className='rounded-xl' src={rloc} alt="Logo 3" /></div>
                
            </Slider>
            </div>
            <div>
            <h1 className=' text-white text-4xl text-center my-16'>Oman</h1>
            <Slider {...settings3}>
                <div className='max-w-40'><img className='rounded-xl'  src={omanoil} alt="Logo 1" /></div>
                <div className=' max-w-40'><img className='rounded-xl' src={omandrydock} alt="Logo 2" /></div>
                <div className=' max-w-40'><img className='rounded-xl' src={orpic} alt="Logo 3" /></div> 
            </Slider>
            </div>
    </div>
    </div>
  );
}

export default Company
