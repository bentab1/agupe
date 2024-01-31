
import React from 'react'
import './contactUs.css'
function ContactUs({ isVisible }) {
  return (
    <div style={{ display: isVisible ? 'block' : 'none' }} id="contacts">
      
      <h2>Contacts Component</h2>
    </div>
  )
}

export default ContactUs
 