import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "../Pages/Home"
import Category from "../Pages/Category"
import Coustomer from "../Pages/Coustomer"
import Merchant from "../Pages/Merchant"
import Seller from "../Pages/Seller"



import Baneer from "./Baneer";
import Footer from './Footer';
import Navbar from './Navbar';
import FooterAbove from './FooterAbove'




const MainRoutes = () => {
  return (
    <div>
        <Baneer/>
      <Navbar/>
      <FooterAbove/>
      <Footer/>


        <Routes>
          <Route path='home' element={<Home/>}/>
          <Route path='category' element={<Category/>}/>
          <Route path='coustomer' element={<Coustomer/>}/>
          <Route path='merchant' element={<Merchant/>}/>
          <Route path='seller' element={<Seller/>}/>
        </Routes>
    </div>
  )
}

export default MainRoutes