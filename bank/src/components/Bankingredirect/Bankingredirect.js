
import React, { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
import './bankingredirect.css';



const Bankingredirect = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleMenuHandler = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className='containerStyle'>
       
      <button className='buttonStyle' onClick={toggleMenuHandler} style={{with:'30px',padding:'9px'
         , marginright:'40px', height:'50px', backgroundColor:'rgba(35, 233, 108, 5)'}}>
        <HiMenu style={{fontSize:'21px', fontFamily:'cursive', marginBottom:'4px', paddingTop:'0', color:'black'}} />
      </button>

      {toggleMenu && (
        <div className='menuStyle' >
          <div style={{ marginBottom:'50px', paddingBottom:'10px'}} className='close_menu' onClick={toggleMenuHandler}>
          <span style={{cursor:'pointer', fontSize:'20px'}}  >X</span>
       </div>
           <NavLink to="/personal" activeClassName="active" style={{margin:'9px', marginLeft:'50px'}}>
            Personal Account features </NavLink>
            <NavLink to="/personal" activeClassName="active" style={{margin:'9px', marginLeft:'50px'}}>
            Joint Account features </NavLink>
         <NavLink to="/business" activeClassName="active" style={{margin:'9px' , marginLeft:'50px'}}>
             Business Account features</NavLink>
          <NavLink to="/agupepay" activeClassName="active" style={{margin:'9px' , marginLeft:'50px'}}>
             AgupePay Account features</NavLink>
          <NavLink to="/business" activeClassName="active" style={{margin:'9px' , marginLeft:'50px'}}>
            Enterprise features</NavLink>
          <NavLink to="/business" activeClassName="active" style={{margin:'9px' , marginLeft:'50px'}}>
            One Tap Payment</NavLink>
          <NavLink to="/personal" activeClassName="active" style={{margin:'9px' , marginLeft:'50px'}} >
            Learn More </NavLink>
        </div>
      )}
    </div>
  );
};

export default Bankingredirect;
