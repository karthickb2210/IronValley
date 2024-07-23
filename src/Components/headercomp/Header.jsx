import React, { useState, useEffect } from 'react';

const Header = () => {
  
  return (
    
<>
    <header className="bg-black text-silver p-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">MyLogo</div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-gray-400">Home</a></li>
            <li><a href="#" className="hover:text-gray-400">About</a></li>
            <li><a href="#" className="hover:text-gray-400">Services</a></li>
            <li><a href="#" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>


</>
  );
};

export default Header;
