import { React } from 'react';
import CountryMenu from '../CountryMenu/CountryMenu';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notification from '../Notification/Notification';
import Register from '../Register/Register';
import './business.css';
function Business() {
  
  
  return (
    <div  className='business_headpage' style={{
       display: 'grid',
      backgroundColor: 'white',
    }}>

      <div>
       <div style={{display:'flex'}}>
       <h2 style={{ paddingLeft: '50px', color: 'rgb(10, 10, 100)', marginTop:'70px', marginLeft:'80px'}}> 
          We make Business seamlessly easy with our payment services</h2>

      <div style={{display:'flex', justifyContent:'space-evenly',
       width:'160px', height:'70px', paddingRight:'2px'}}>
        <span style={{marginRight:'10px'}}> <Login /></span>
        <Register/>
        </div>
          <span style={{marginLeft:'10px'}}><CountryMenu /></span>
       </div>
        <div style={{display:'grid'}}>

        <p style={{ marginTop: '20px', padding: '40px' }}>
          Welcome to Agupe Business banking .Create your Business account today to leverage the most
          efficient banking system. Make seamless payment with our Virtual and Physical contactless card, physical and
          Virtual contactless POS for your Business.
          Connect our AgupePay to your online store? signup for Business XXXXX
        </p>
        </div>
      </div>
      
        <div className='login_business'>
          



        </div>

      <Notification />
      <Footer />
    </div>
  )
}

export default Business