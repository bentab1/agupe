
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './bankingRegister.css';



const BankingRegister = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleMenuHandler = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div style={{backgroundColor:'rgba(35, 233, 102, 0.55)', borderTopRightRadius:'20px',
      borderTopLeftRadius:'27px', borderBottomLeftRadius:'10px', borderBottomRightRadius:'20px',
      paddingLeft:'6px'}} >

       
     
<div style={{ display:'flex',borderRadius:'28px', backgroundColor:'rgba(252, 233, 67, 1)',
     height:'65px', paddingTop:'0px', paddingLeft:'10px', paddingRight:'4px'}}>
       <div 
       style={{backgroundColor:'rgba(231, 37, 37, 1)' , height:'50px', borderRadius:'25px', width:'86px'}}>
       <button onClick={toggleMenuHandler} style={{ width:'70px', paddingLeft:'5px', borderRadius:'25px', backgroundColor:'black'}}>
        SingUp
      </button>
         </div>
     
    </div>

      {toggleMenu && (
        <div className='menuStyle_bankingresgister'>
          <div style={{ paddingBottom:'4px', marginRight:'110px'}} className='close_menu' onClick={toggleMenuHandler}>
          <span style={{cursor:'pointer', fontSize:'20px', marginRight:'90px'}}  >X</span>
       </div>
               <div className='signup'>
            <span>Personal Account </span>
            <NavLink to="/personal/signup" activeClassName="active" 
       style={{backgroundColor:'rgba(231, 37, 37, 1)' , height:'50px', borderRadius:'25px', width:'86px'}}>
       <button  style={{ width:'70px', paddingLeft:'5px', borderRadius:'25px', backgroundColor:'black'}}>
        SingUp
      </button>
         </NavLink>
              </div>

              <div className='signup'>
              <span>Joint Account</span>
              <NavLink to="/joint/signup"  activeClassName="active" 
       style={{backgroundColor:'rgba(231, 37, 37, 1)' , height:'50px', borderRadius:'25px', width:'86px'}}>
       <button  style={{ width:'70px', paddingLeft:'5px', borderRadius:'25px', backgroundColor:'black'}}>
        SingUp
      </button>
         </NavLink>
            </div>

            <div className='signup'>
            <span>Business Account</span>
            <NavLink to="/business/signup" activeClassName="active" 
       style={{backgroundColor:'rgba(231, 37, 37, 1)' , height:'50px', borderRadius:'25px', width:'86px'}}>
       <button  style={{ width:'70px', paddingLeft:'5px', borderRadius:'25px', backgroundColor:'black'}}>
        SingUp
      </button>
         </NavLink>
         </div>

          <div className='signup'>
             <span>AgupePay Account </span>
             <NavLink to="/agupepay/signup" activeClassName="active" 
       style={{backgroundColor:'rgba(231, 37, 37, 1)' , height:'50px', borderRadius:'25px', width:'86px'}}>
       <button  style={{ width:'70px', paddingLeft:'5px', borderRadius:'25px', backgroundColor:'black'}}>
        SingUp
      </button>
         </NavLink>
          </div>

          <div className='signup'>
             <span>Enterprise</span>
             <NavLink to="/enterprise/signup"activeClassName="active" 
       style={{backgroundColor:'rgba(231, 37, 37, 1)' , height:'50px', borderRadius:'25px', width:'86px'}}>
       <button  style={{ width:'70px', paddingLeft:'5px', borderRadius:'25px', backgroundColor:'black'}}>
        SingUp
      </button>
         </NavLink>
          </div>

          <div className='signup'>
            <span>Link AgupePay to your Store</span>
            <NavLink to="/business/signup" activeClassName="active" 
       style={{backgroundColor:'rgba(231, 37, 37, 1)' , height:'50px', borderRadius:'25px', width:'160px'}}>
       <button  style={{ width:'120px', paddingLeft:'5px', borderRadius:'25px', backgroundColor:'black'}}>
        Learn More
      </button>
         </NavLink>
          </div>

          <div className='signup'>
            <span>For the latest update about our services</span>
            <NavLink to="/business/signup" activeClassName="active" 
       style={{backgroundColor:'rgba(231, 37, 37, 1)' , height:'50px', borderRadius:'25px', width:'86px'}}>
       <button  style={{ width:'70px', paddingLeft:'5px', borderRadius:'25px', backgroundColor:'black'}}>
        Explore
      </button>
         </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default BankingRegister;
