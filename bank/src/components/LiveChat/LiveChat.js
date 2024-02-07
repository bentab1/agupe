import React from 'react'
import Footer from '../Footer/Footer'
import Notification from '../Notification/Notification'
import './liveChat.css'
function LiveChat() {
  return (
    <div style={{ backgroundColor:'white'}} className='livechat_headpage'>
      <div style={{height:'600px'}}>
                     <h4 style={{marginTop:'30px', marginLeft:'350px', color:'royalblue'}}> HOW MAY WE HELP YOU TODAY</h4>

        
      </div>

   <Notification/>
 <Footer/>
    </div>
  )
}

export default LiveChat
 