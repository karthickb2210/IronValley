import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Services from '../Components/ServicesPage/Services'
import MainPage from '../MainPage/MainPage'
import Contact from '../Components/Contact/Contact'
import EnVita from '../Components/EnVita/EnVita'
function Layout() {
  return (
    <div className='bg-black'>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<MainPage />}></Route>
        <Route path='/services' element={<Services />}>
        </Route>
        <Route path='/envita' element={<EnVita />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/envita' element={<EnVita />}></Route>
        </Routes>
        
      </BrowserRouter>  
    </div>
  )
}

export default Layout
