import React from 'react'
import Styled from "./Style.module.css" 
const FooterAbove = () => {
  return (
    
        <div style={{marginTop:"1500px"}}>
        
      <div id={Styled.footertop}>
        <div>
          <h2>What Our Customer Says</h2>
        </div>
        <div id={Styled.ftin}>
          <div id={Styled.txtf}>
            Auspicious range of foot wares. Premium branded products. Good
            service and delivery duration. Super high value of customer. <br />
            <br />
            <br />
            <br />
            <p>praveen kumar</p>
            ⭐⭐⭐⭐-Cutomer
          </div>
          <div id={Styled.txtf}>
            Very big range of products and the services are very fast. i ordered
            footwear and they delivered very quick.<br />
            <br />
            <br />
            <br />
            <br />
            <p>praveen kumar</p>
            ⭐⭐⭐⭐-Cutomer
          </div>
          <div id={Styled.txtf}>
            Amazing veriaty of shoes in all brand..... Best showroom in Rajkot.
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <p>praveen kumar</p>
            ⭐⭐⭐⭐ -Cutomer
          </div>
        </div>
        <div >
          <button id={Styled.bttn}>Add Your Review</button>
        </div>
      </div>
    </div>
    
  )
}

export default FooterAbove