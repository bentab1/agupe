import React from 'react'
import Footer from '../Footer/Footer'
import Notification from '../Notification/Notification'
import './aboutUs.css'
function About() {
  return (
    <div style={{ backgroundColor:'white' }} className='about_headpage'>
        <div style={{height:'600px'}}>
           <h4 style={{color:'rgb(10, 10, 100)', marginTop:'30px', marginLeft:'440px'}}>  WHY CHOSE AGUPE DIGITAL FINANCE TECHNOLOGY?</h4 >
           <h4 style={{color:'rgb(10, 10, 100)', marginTop:'4px', marginLeft:'550px'}}>   WE ARE THE ALTIMATE.  </h4>
       
        </div>
        <Notification />
      <Footer/>
    </div>
  )
}

export default About
 