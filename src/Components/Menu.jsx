import React from 'react'
// import styled from 'styled-components'
import Styled from "./Style.module.css"
import {Link} from "react-router-dom"






const Menu = () => {
  return (
    <div  id= {Styled.main} style={{display:"flex",justifyContent:"center",gap:"30px",visibility:'visible'}}>
        <div><Link style={{textDecoration:"none",color:"black"}} to="/home">Home</Link></div>
        <div><Link style={{textDecoration:"none",color:"black"}} to="/category">Category</Link></div>
        <div><Link style={{textDecoration:"none",color:"black"}} to="/coustomer">Customer/Guest login</Link></div>
        <div><Link style={{textDecoration:"none",color:"black"}} to="/merchant">Merchant/Bul Order</Link></div>
        <div><Link style={{textDecoration:"none",color:"black"}} to="/seller">Become A Seller</Link></div>
    </div>
  )
}

export default Menu