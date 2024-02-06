import '@fortawesome/fontawesome-free/css/all.min.css';
import { React } from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

function Header() {
  

  return (
    <div style={{width:'1390px',height:'55px'}}>
      <nav className="grid-container">
<NavLink to="/aboutUs" activeClassName="active">
  <p style={{marginLeft:'120px', marginTop:'25px',fontSize:'12px', }}>About Us</p>
</NavLink>

<div className='chat'>
  <NavLink to="/liveChat"  activeClassName="active"  >
    <div style={{display:'flex'}}>
    <p style={{marginTop:'26px', fontSize:'12px', marginLeft:'70px',with:'20px'}}>Live Chat</p>
    
    <i className="fas fa-comment" style={{marginLeft:'5px', marginTop:'25px'}}></i>
    </div>
  </NavLink >
</div>

<NavLink to="/help"  activeClassName="active">
  <p style={{marginRight:'220px', marginTop:'25px', fontSize:'12px'}}>Help</p>
</NavLink>

      </nav>
    </div>
  );
}

export default Header;
