import React from 'react';
import { NavLink } from 'react-router-dom';
import './banking.css';
function Banking() {
  return (
    <div style={{width:'1270px', height:'500px'
      , display:'flex', justifyContent:'space-evenly', backgroundColor:'white'}}>
      
      <div style={{display:'grid'}} className='personal_1'>
      <div style={{display:'grid' , justifyContent:'center',width:'250px', 
           backgroundColor:'rgba(207, 232, 231, 1)',height:'150px', marginTop:'20px'}}>
          <p style={{marginTop:'20px'}}>Login Personal Account</p>
          <NavLink to="/login/personal" activeClassName="active" style={{
              marginTop:'30px', marginLeft:'25px', borderRadius:'5px', width:'130px'}} > 
               <button style={{fontSize:'12px', backgroundColor:'aqua', color:"black"}}>
                Click to login</button></NavLink>
        </div>
     
           <div style={{display:'grid' , justifyContent:'center',width:'250px', height:'150px'
          , backgroundColor:'rgba(207, 232, 231, 1)'}}>
          <p style={{marginTop:'20px'}}>Open Personal Account</p>
          <NavLink to="/register/personal" activeClassName="active" style={{
              marginTop:'30px', marginLeft:'25px', borderRadius:'5px', width:'130px'}} > 
               <button style={{fontSize:'12px', backgroundColor:'aqua', color:"black"}}>
                Click to open</button></NavLink>
        </div>
        </div>

      <div style={{display:'grid'}} className='business_1'>
      <div style={{display:'grid' , justifyContent:'center',width:'250px', 
           backgroundColor:'rgba(207, 232, 231, 1)',height:'150px', marginTop:'20px'}}>
          <p style={{marginTop:'20px'}}>Login Business Account</p>
          <NavLink to="/login/Business" activeClassName="active" style={{
              marginTop:'30px', marginLeft:'25px', borderRadius:'5px', width:'130px'}} > 
               <button style={{fontSize:'12px', backgroundColor:'aqua', color:"black"}}>
                Click to login</button></NavLink>
        </div>
     
           <div style={{display:'grid' , justifyContent:'center',width:'250px', height:'150px'
          , backgroundColor:'rgba(207, 232, 231, 1)'}}>
          <p style={{marginTop:'20px'}}>Open Business Account</p>
          <NavLink to="/register/Business" activeClassName="active" style={{
              marginTop:'30px', marginLeft:'25px', borderRadius:'5px', width:'130px'}} > 
               <button style={{fontSize:'12px', backgroundColor:'aqua', color:"black"}}>
                Click to open</button></NavLink>
        </div>
        </div>
  </div>
  )
}

export default Banking

