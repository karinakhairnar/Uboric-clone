import React from 'react'
import styled from "styled-components"


const BannerStyle = styled.div`
 
    line-height: 2em;
    padding: 5px 0px 6px;
    background: #1e516c;
    margin:  auto;
    text-align: center;
    width: 100%;
    color: white;
    font-size: 15px;
    font-family: Helvetica, Arial, sans-serif;
    font-weight: 300;
`


const Baneer = () => {
  return (
    <div>
     <BannerStyle>
       
       FOR ONLINE PAYMENT EXTRA  <span>&#8377;</span>100 DISCOUNT ON ORDERS ABOVE <span>&#8377;</span>500
     
     </BannerStyle>
    </div>
  )
}

export default Baneer