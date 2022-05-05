import React from 'react'
import styled from 'styled-components'
import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import Styled from "./Style.module.css"



const FooterDiv = styled.div`
height:400px;
background-color:black;
color:white;
width:100%;
border:1px solid black;

`
const FooterImg = styled.img`

margin:auto;

`

const FooterPara = styled.p`
color: #fff
font-weight:400
`
const Fotdiv = styled.div`
border:1px solid black;
background-color:rgb(255,206,97);
border-radius:50%;
padding:14px;
font-size:18px;
color:black;
`



const Footer = () => {
  return (
    
    <FooterDiv>
        <div style={{textAlign:"center",marginTop:"60px"}}>
            <FooterImg src="https://www.uboric.com/wp-content/uploads/2020/08/google-play1.png" alt="" />
        </div>
        <div style={{display:"flex",justifyContent:"center",gap:"40px"}}>
       
            <FooterPara id={Styled.divho}>About Usy</FooterPara>
            <FooterPara id={Styled.divho}>Contact</FooterPara>
            <FooterPara id={Styled.divho}>Shipping & Returns</FooterPara>
            <FooterPara id={Styled.divho}>My Account</FooterPara>
            <FooterPara id={Styled.divho}>Privecy police</FooterPara>
            <FooterPara id={Styled.divho}>Become A Seller</FooterPara>
            <FooterPara id={Styled.divho}>Terms & Conditions</FooterPara>
        </div>
        <div style={{textAlign:"center",marginTop:"30px"}}>
        <FooterPara>© 2019 – 2021 UBORIC. ALL RIGHTS RESERVED.</FooterPara>
        </div>

        <div style={{display:"flex" ,justifyContent:"center",gap:"10px",textAlign:"center",cursor:"pointer"}}>
            
            <Fotdiv id={Styled.divho1} ><a href="https://www.facebook.com/Uboricllp/" style={{color:"black"}}><FaFacebookF/></a></Fotdiv>
            <Fotdiv id={Styled.divho1} ><a href='https://www.instagram.com/uboric_shoes/?igshid=1scv9g4eccoi5' style={{color:"black"}}><BsInstagram/></a></Fotdiv>
          
        </div>
    </FooterDiv>
   
  )
}

export default Footer