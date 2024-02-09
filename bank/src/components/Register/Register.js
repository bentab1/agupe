
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';




const Register = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleMenuHandler = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div style={{borderRadius:'20px', width:'63px', backgroundColor:'rgba(252, 233, 67, 1)', height:'50px'}}>
       
      <button  onClick={toggleMenuHandler} style={{width:'50px'
         , marginright:'1px', height:'40px',fontSize:'12px', backgroundColor:'rgb(10, 10, 100)', 
            paddingLeft:'5px', paddingTop:'10px', borderRadius:'120px', }}>
        SingUp
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

export default Register;
