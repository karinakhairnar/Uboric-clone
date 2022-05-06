import React from 'react'
import './cart.css'
const cart = () => {
  return (

      <div className='cart'>
            <div className='intro'>
                <h1>Cart</h1>
                <h4><a href=''>Home</a>-----  Cart </h4>
            </div>
            <button className='offer'>Amazing Offers on Checkout</button>

            <div className='fetchdata'>
                <div className='left'>
                    <div className='data'>
                        <image></image>
                        <h4>Product</h4>
                        <h4>Price</h4>
                        <h4>Quantity</h4>
                        <h4>Subtotal</h4>
                    </div>
                    <button>UPGRADE CART</button>
                </div>
                <div className='right'>
                    <h2>Cart Totals</h2>
                    <p>Subtotal <p> Subtotal:</p></p>
                    <button>Proceed To Checkout - </button>
                </div> 
            </div>
        </div>
  )
}

export default cart