import { React } from 'react';
import { Footer, Notification, } from '../../components';
import CountryMenu from '../../components/CountryMenu/CountryMenu';
import './agupePay.css';
function AgupePay() {
 
  return (
    <div style={{ backgroundColor: 'white',}} className='agupepay_headpage'> 

      <div style={{display:'flex'}}>
      <p style={{ marginTop: '20px', padding: '40px' }}>
        <h2 style={{
          paddingLeft: '420px', marginBottom: '20px',
          color: 'rgb(10, 10, 100)'
        }}> Welcome to AgupePay
        </h2>
        Create AgupePay account  to start making and receiving seamless payment as a merchant or private
        Business owner across the globe  with our Agupepay. Our virtual and physical point of sale (POS) makes your business easy.
        Do not miss any Business because of payment means. signup below for freedom of Business transaction.

      </p>
      <div style={{marginTop:'30px', marginRight:'30px'}}>
          <CountryMenu className='countrymenu'/>

        </div>
        </div>

      
        <div style={{ display: 'grid', margin: '5px' }} className='personal'>
         
        </div>
      <Notification/>
     <Footer/>
    </div>
  )
}

export default AgupePay
