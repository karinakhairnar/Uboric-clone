import { useState } from "react";
import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
const initData = {
    "firstName": "",
    "lastName": "",
    "userName": "",
    "email": "",
    "confirmMail": "",
    "venderName": "",
    "panNumber": false,
    "gstNumber": "",
    "contactNumber" :""
  }
import'./cart.css'
const Seller = () => {
    const [fdata,setData] = useState(initData);
    const handleChange = (e) => {
        console.log("change");
        let {name,value} = e.target;
        setData({...fdata,[name]:value})
      }
      const handleSubmit = async(e) => {
        console.log(e);
        e.preventDefault();
        alert("New Seller has been Added")
        try{
            console.log(e);
          let res = await fetch("http://localhost:8080/posts",{
            method: "POST",
            headers: {"Content-type":"application/json"},
            body: JSON.stringify(fdata)
           
          })
        }catch(err){
          console.log(err);
        }
      }
  return (
      
    <div className="seller">
        <div className='intro'>
                <h1>Cart</h1>
                <h4><a href="">Home</a> <FaArrowRight/> Become a Seller </h4>
            </div>
            <form onSubmit={handleSubmit}>
        <label> First Name</label>
        <input name="firstName" type="text" id="small" value={fdata.firstName} onChange={handleChange} required />
        <label>Last Name</label>
        <input name="lastName" value={fdata.lastName} type="text" id="small" onChange={handleChange} required />
        <br />
        <label>Login Username</label>
        <input name="userName" value={fdata.userName} type="text" id="long" onChange={handleChange} required />
        <br />
        <label>Email</label>
        <input name="email" value={fdata.email} type="email" id="small" onChange={handleChange} required />
        <label>Confirm Email</label>
        <input name="confirmMail" value={fdata.confirmMail} type="email" id="small" onChange={handleChange} required />
        <br />
        <label>Vender Name</label>
        <input name="venderName" checked={fdata.venderName} type="text" id="long" onChange={handleChange}/>
        <p>Important: This is the name that customers see when purchasing your products. Please choose carefully.</p>
        <label>Please describe something about your company and what you sell</label>
        <textarea rows="6" cols="95"></textarea>
        <br/>
        <label>Pan Number</label>
        <input name="panNumber" checked={fdata.panNumber} type="number" id="small" onChange={handleChange}/>
        <label>GST Number</label>
        <input name="gstNumber" value={fdata.gstNumber} type="number" id="small" onChange={handleChange} required />
        <br/>
        <label>Contact Number</label>
        <input name="contactNumber" value={fdata.contactNumber} type="number"id="small"  onChange={handleChange} required />
        <br/>
        <input className="submitBtn" type="submit" />
      </form>
    </div>
  )
}

export default Seller