import { React } from 'react';
import CountryMenu from '../CountryMenu/CountryMenu';
import Footer from '../Footer/Footer';
import Notification from '../Notification/Notification';

import './banking.css';
function Banking() {

  return (
    <div style={{ justifyContent: 'space-evenly', backgroundColor: 'white'
    }} className='banking_headpage'>
      <div style={{ display: 'flex' }}>
        <div>
          <p style={{ marginTop: '5px', padding: '50px' }}>

            <h2 style={{
              paddingLeft: '110px', marginBottom: '20px',
              color: 'rgb(10, 10, 100)', padding: '20px', fontSize: '30px'
            }}>
              Welcome to Agupe digital banking, the best so far in the system. </h2>

            Agupe digital banking came at the right time to make payment very easy and seamless.
            With our mobile  contactless card you can make payment anytime anywhere just by tapping your
            mobile phone. Is that not awesome? Signup below!

          </p>
        </div>
        <div style={{ marginTop: '30px', marginRight: '30px' }}>
          <CountryMenu className='countrymenu' />
        </div>
      </div>

        <div className='personal_1'>
        
         


        </div>

      
      
      <Notification />
      <Footer/>
    </div>
  )
}

export default Banking

