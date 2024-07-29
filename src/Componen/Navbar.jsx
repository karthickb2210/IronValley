import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from "../assets/logo iv.png";
import "./nav.css"
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

const handleMouseEnter = () => {
  setIsOpen(true);
};

const handleMouseLeave = () => {
  setIsOpen(false);
};
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Home' },
    { id: 2, text: 'Products' },
    { id: 3, text: 'Services' },
    { id: 4, text: 'Company' },
    { id: 5, text: 'Contact' },
  ];

  return (
    <div className='bg-black  bg-transparent flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      {/* Logo */}
      <img src={logo} className="h-10" />

      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-2  m-2 menu'
          >
          {
            item.id===1 && <Link to={`/`}><p>{item.text}</p></Link>
          }
          { 
            item.id===2 &&  
            <div className="relative inline-block text-left" onMouseEnter={handleMouseEnter} >
      <div className="flex items-center cursor-pointer">
        <span>{item.text}</span>
        <svg
          className={`w-5 h-5 ml-2 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-black ring-1 ring-black ring-opacity-5" onMouseLeave={handleMouseLeave}>
          <div className="py-1">
            <a href="#" className="block menu px-6 py-2 text-sm text-gray-100 ">Envita</a>
            <a href="#" className="block menu px-6 py-2 text-sm text-gray-100  ">Cesare bonetti</a>
           
          </div>
        </div>
      )}
    </div>
            
          }{
            item.id===3 && <Link to={`/services`}><p>{item.text}</p></Link>
             }
             {
              item.id===5 && <Link to={`/contact`}><p>{item.text}</p></Link>
             }
             {
            item.id!=3 && item.id!=1 && item.id!=2 && item.id!=5 &&  <p href='#' className=''>{item.text}</p>
          }
         
         
           
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>
        <img src={logo} className="h-10" />
        </h1>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
