import React from 'react';
import { NavLink } from 'react-router-dom';
import Myimage from '../Assets/Myimage.png';
import './navBar.css';

function Navbar() {
  return (
      <div className='navbar'>
      <div className='logo-png' >

        <img className='image' src={Myimage} alt=" logo" />
        <div className=' logo'>
          <h2 className='a1'>A</h2>
          <h2 className='g1'>g</h2>
          <h2 className='u1'>u</h2>
          <h2 className='p1'>p</h2>
          <h2 className='e1'>e</h2>
        </div>
      </div>

      <nav  className=' nav_link'>

    <NavLink to="/" activeClassName="active"  className=' grid'>
        <spanc style={{color:'black'}}>Home</spanc></NavLink>

    <NavLink to="/business" activeClassName="active" className=' grid'>
      Business
    </NavLink>
    <NavLink to="/agupepay" activeClassName="active" className=' grid'> 
       <span style={{color:'rgba(231, 37, 37, 1)'}}> AgupePay</span>
    </NavLink>
    <NavLink to="/personal" activeClassName="active" className=' grid'>
      Personal
    </NavLink>
    <NavLink to="/contactus" activeClassName="active" className=' grid'>
      Contact Us
    </NavLink>
    <NavLink to="/banking" activeClassName="active" >
      <p className='bank'>Banking</p>
    </NavLink>

  </nav>
  </div>
  );
};
export default Navbar


