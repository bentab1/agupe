import React from 'react'
import './banking.css'
function Banking({ isVisible }) {
  return (
    <div style={{ display: isVisible ? 'block' : 'none' }} id="banking">
    
    <h2>Banking Component</h2>
  </div>
  )
}

export default Banking
 