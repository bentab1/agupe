import React from 'react';
import { NavLink } from 'react-router-dom';
import './business.css';
function Business() {
  return (
    <div style={{
      width: '1270px', height: '450px', display: 'flex', justifyContent: 'space-evenly',
      backgroundColor: 'rgb(235, 230, 240)'
    }}>
      <div className='login_business'>
      <div style={{display:'grid' , justifyContent:'center', backgroundColor:'hsl(200, 33%, 98%)'
        , width:'250px', marginLeft:'175px', height:'200px', marginTop:'20px'}}>
          <p style={{marginTop:'60px'}}>Login Business Account</p>
          <NavLink to="/login/business" activeClassName="active" style={{
              marginTop:'50px', marginLeft:'25px', borderRadius:'5px', width:'130px'}} > 
               <button style={{fontSize:'12px',backgroundColor:'aqua', color:"black"}}>Click to login</button></NavLink>
        </div>
      </div>

      <div className='register_business' >
        <div style={{display:'grid' , justifyContent:'center', backgroundColor:'hsl(200, 33%, 98%)',
          width:'250px', marginLeft:'175px', height:'200px', marginTop:'20px'}}>
          <p style={{marginTop:'60px'}}>Open Business Account</p>
          <NavLink to="/register/business" activeClassName="active" style={{
              marginTop:'50px', marginLeft:'25px', borderRadius:'5px', width:'130px'}} > 
               <button style={{fontSize:'12px', backgroundColor:'aqua', color:"black"}}>
                Click to open</button></NavLink>
        </div>

      </div>
    </div>
  )
}

export default Business
