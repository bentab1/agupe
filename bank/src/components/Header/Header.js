import React from 'react';
import { NavLink } from 'react-router-dom';
import LiveChat from '../Assets/LiveChat.png';
import './header.css';

function Header() {

  return (
    <div style={{width:'1370px',height:'50px'}}>
      <nav className="grid-container">
<NavLink to="/aboutUs" activeClassName="active">
  <p style={{marginLeft:'130px', marginTop:'15px',fontSize:'12px'}}>About Us</p>
</NavLink>

<div className='chat'>
  <NavLink to="/liveChat"  activeClassName="active" >
    <p style={{marginTop:'20px', fontSize:'12px', marginLeft:'70px'}}>Live Chat</p>
  </NavLink >
  <div style={{marginLeft:'0px'}}>
    <img className="image-chat" src={LiveChat} alt="liveChatImage" />
  </div>
</div>

<NavLink to="/help"  activeClassName="active">
  <p style={{marginRight:'220px', marginTop:'16px', fontSize:'12px'}}>Help</p>
</NavLink>

      </nav>
    </div>
  );
}

export default Header;
