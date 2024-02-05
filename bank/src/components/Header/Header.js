import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

function Header() {

  return (
    <div style={{width:'1390px',height:'80px'}}>
      <nav className="grid-container">
<NavLink to="/aboutUs" activeClassName="active">
  <p style={{marginLeft:'130px', marginTop:'15px',fontSize:'12px', }}>About Us</p>
</NavLink>

<div className='chat'>
  <NavLink to="/liveChat"  activeClassName="active"  >
    <p style={{marginTop:'20px', fontSize:'12px', marginLeft:'70px',with:'20px', backgroundColor:'aqua'}}>Live Chat</p>
    <button>
    <i className="fas fa-comment" style={{marginLeft:'5px', marginTop:'18px'}}></i>
    </button>
  </NavLink >
</div>

<NavLink to="/help"  activeClassName="active">
  <p style={{marginRight:'220px', marginTop:'16px', fontSize:'12px'}}>Help</p>
</NavLink>

      </nav>
    </div>
  );
}

export default Header;
