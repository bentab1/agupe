import React from 'react';
import Myimage from '../Assets/Myimage.png';
import './navBar.css';




function NavBar() {
  return (
      <div className='NavBar'>
        <div className='logo-png'>
          
          <img className='image' src={Myimage} alt =" logo"/>
          <div className=' logo'>
          <h2 className='a1'>A</h2>
          <h2 className='g1'>g</h2>
          <h2 className='u1'>u</h2>
          <h2 className='p1'>p</h2>
          <h2  className='e1'>e</h2>
          </div>
          </div>
                <div className=' grid'>
          <p className='person-tag'>Personal</p>
                </div>


                <div className=' grid'>
                <p className='pay-agu'>AgupePay</p>
                </div>


            <div className='grid'>
            <p className='con'>Contact Us</p>
            </div>
            
          <div  className='grid'>
            <p className='buz'>Business</p>
            </div>


              <div className='bank'>
                  <>Banking</>
                <select className='login'>
                  
                </select>
                </div>
                
                
        
      </div>
    )
}

export default NavBar
 