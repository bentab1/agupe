import React from 'react'
import LiveChat from '../Assets/LiveChat.png'
import './header.css'
function Header() {
  return (
    <div className="grid-container">
      <div className='grid-item'><p  className='about'>About Us</p>
      </div>
      <div className="grid-item"><></>
      
      </div>
      <div className='chat'>
      <div>
        <p className='live-g'>Live Chat</p>
      </div>
      <div>
        < img className= "image-chat "src={LiveChat} alt="liveChat"/>
      </div>
      </div>
      <div className="grid-item">
        
        
        </div>
      <div className="grid-item"><p className='help'>Help</p>
      
      </div>
    </div>

  )
}

export default Header  
 