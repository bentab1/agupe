
import React from 'react'
import Footer from '../Footer/Footer'
import Notification from '../Notification/Notification'
import './contactUs.css'
function ContactUs() {
  return (
    <div style={{ backgroundColor:'white'}} className='contactus_headpage'>
      <div style={{height:'600px'}}>
                  <h4 style={{marginTop:'30px', marginLeft:'470px', color:'royalblue'}}> WE ARE AVAILABLE AT YOUR SERVICE 24/7</h4>



      </div>
      <Notification />
     <Footer/> 
    </div>
  )
}

export default ContactUs
 