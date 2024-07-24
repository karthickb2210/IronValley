import React from 'react'
import logo from "../assets/logo iv.png";

function Nav() {
  return (
    <div className="flex justify-between p-2">
    <div className="mx-[20px] my-[20px]">
      <img src={logo} className="h-10" />
    </div>

    {/* Right bar */}
    <div className="flex text-xl">
    <div>
      <a href='#' className=' hover:underline-offset-2'>
      Products
      </a>
      </div>
      <div className="px-2">Company</div>
      <div className="px-2">Services</div>
      <div className="px-2">Contact</div>
    </div>
  </div>
  )
}

export default Nav
