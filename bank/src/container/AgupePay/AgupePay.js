import React from 'react';
import { NavLink } from 'react-router-dom';
import './agupePay.css';
function AgupePay() {
  return (
    <div  style={{width:'1270px', backgroundColor:'white', height:'450px', display:'flex', justifyContent:'space-evenly'}}>
    
  
    <div style={{display:'grid', margin:'5px'}} className='personal'>
    <div style={{display:'grid' , justifyContent:'center', width:'250px', 
         backgroundColor:'rgb(241, 227, 70)',height:'150px', marginTop:'20px'}}>
          <p style={{marginTop:'20px'}}>Login Personal Account</p>
          <NavLink to="/login/personal" activeClassName="active" style={{
              marginTop:'30px', marginLeft:'25px', borderRadius:'5px', width:'130px'}} > 
               <button style={{fontSize:'12px', backgroundColor:'aqua', color:"black"}}>
                Click to login</button></NavLink>
        </div>
     
           <div style={{display:'grid' , justifyContent:'center',width:'250px',
           backgroundColor:'rgb(241, 227, 70)', height:'150px'}}>
          <p style={{marginTop:'20px'}}>Open Personal Account</p>
          <NavLink to="/register/personal" activeClassName="active" style={{
              marginTop:'30px', marginLeft:'25px', borderRadius:'5px', width:'130px'}} > 
               <button style={{fontSize:'12px', backgroundColor:'aqua', color:"black"}}>
                Click to open</button></NavLink>
        </div>

           
        </div>
        

      <div style={{display:'grid'}} className='business'>
      <div style={{display:'grid' , justifyContent:'center',width:'250px', 
           backgroundColor:'rgb(241, 227, 70)',height:'150px', marginTop:'20px'}}>
          <p style={{marginTop:'20px'}}>Login Merchant Account</p>
          <NavLink to="/register/merchant" activeClassName="active" style={{
              marginTop:'30px', marginLeft:'25px', borderRadius:'5px', width:'130px'}} > 
               <button style={{fontSize:'12px', backgroundColor:'aqua', color:"black"}}>
                Click to login</button></NavLink>
        </div>
     
           <div style={{display:'grid' , justifyContent:'center',width:'250px', height:'150px'
          , backgroundColor:'rgb(241, 227, 70)'}}>
          <p style={{marginTop:'20px'}}>Open Merchant Account</p>
          <NavLink to="/register/merchant" activeClassName="active" style={{
              marginTop:'30px', marginLeft:'25px', borderRadius:'5px', width:'130px'}} > 
               <button style={{fontSize:'12px', backgroundColor:'aqua', color:"black"}}>
                Click to open</button></NavLink>
        </div>
        </div>
    </div>
  )
}

export default AgupePay
 