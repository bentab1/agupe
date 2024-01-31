import React from 'react'
import './business.css'
function Business({ isVisible }) {
  return (
    <div style={{ display: isVisible ? 'block' : 'none' }} id="business">
      
      <h2>Business Component</h2>
    </div>
  )
}

export default Business
 