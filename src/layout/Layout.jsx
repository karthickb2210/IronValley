import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Services from '../Components/ServicesPage/Services'
import MainPage from '../MainPage/MainPage'
import Contact from '../Components/Contact/Contact'
function Layout() {
  return (
    <div className='bg-black'>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<MainPage />}></Route>
        <Route path='/services' element={<Services />}>
        </Route>
        <Route path='/contact' element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>  
    </div>
  )
}

export default Layout
