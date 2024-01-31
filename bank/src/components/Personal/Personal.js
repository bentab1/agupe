import React from 'react'
import './personal.css'
function Personal({ isVisible }) {
  return (
    <div style={{ display: isVisible ? 'block' : 'none' }} id="personal">
      
      <h2>Personal Component</h2>
    </div>
  )
}

export default Personal
 