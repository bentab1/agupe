import { React, useState } from 'react';
import Myimage from '../Assets/Myimage.png';
import './navBar.css';

function Navbar({ setRoute }) {
  const [Menu, setMenu] = useState(false);
 
  const handleMenu =()=> setMenu (!Menu)


const menu = ( )=>{
  return(
        <div className='Active'>
    <ul  style={{display:'grid'}}>
    <li> 
    <a href="#banking" onClick={() => setRoute('Banking')}>
              Banking
            </a>
      Banking</li>

      <li>
      <a href="#contactUs" onClick={() => setRoute('ContactUs')} className='con'>
              Contact Us
            </a>
         ContactUs</li>

      <li> 
    <a href="#agupepay" onClick={() => setRoute('AgupePay')} className='pay-agu'>
              Agupepay
            </a> 

      AgupePay</li>
    <li>
    <a href="#personal" onClick={() => setRoute('Personal')}>
              Personal
            </a>
       Personal</li>
    
    
     <li>
     <a href="#business" onClick={() => setRoute('Business')} className='buz'>
              Business
            </a>
      Business</li>
    </ul>
        </div>
  );

}






  return (
    <div className='NavBar'>
      <div className='logo-png'>

        <img className='image' src={Myimage} alt=" logo" />
        <div className=' logo'>
          <h2 className='a1'>A</h2>
          <h2 className='g1'>g</h2>
          <h2 className='u1'>u</h2>
          <h2 className='p1'>p</h2>
          <h2 className='e1'>e</h2>
        </div>
      </div>

      <nav className=' nav_link'>
        <ul className='nav_ul' style={{ display: 'flex' }}>
          <li className=' grid'>
            <a href="#personal" onClick={() => setRoute('Personal')}>
              Personal
            </a>
          </li>
          <li className=' grid'>
            <a href="#agupepay" onClick={() => setRoute('AgupePay')} className='pay-agu'>
              Agupepay
            </a>
          </li>
          <li className=' grid'>
            <a href="#contactUs" onClick={() => setRoute('ContactUs')} className='con'>
              Contact Us
            </a>
          </li>
          <li className=' grid'>
            <a href="#business" onClick={() => setRoute('Business')} className='buz'>
              Business
            </a>
          </li>
          <li className='bank'>
            <a href="#banking" onClick={() => setRoute('Banking')}>
              Banking
            </a>
            <label  html="navigationSelect"> </label>
            
            <select className='login' onClick={handleMenu}>
              
              </select>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar
