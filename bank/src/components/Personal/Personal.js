import { React } from 'react';
import CountryMenu from '../CountryMenu/CountryMenu';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notification from '../Notification/Notification';
import Register from '../Register/Register';
import './personal.css';
function Personal() {


  return (
    <div className='personal_headpage' style={{
       justifyContent: 'space-evenly',
      backgroundColor: 'white'
    }}>
      <div style={{display:'grid'}}>

      <div style={{display:'flex'}}>
       <h2 style={{ paddingLeft: '50px', color: 'rgb(10, 10, 100)', marginTop:'70px', marginLeft:'295px'}}> 
       Hey!, No need to carry your card around!</h2>

      <div style={{display:'flex', justifyContent:'space-evenly',
       width:'160px', height:'70px', paddingRight:'2px', marginLeft:'140px'}}>
        <span style={{marginRight:'10px'}}> <Login /></span>
        <Register/>
        </div>
          <span style={{marginLeft:'10px'}}><CountryMenu /></span>
       </div>

      <p style={{ padding: '40px', fontWeight: 'initial', height: '80px' }}>
        Go with the best !!  Our individual or joint account gives you opportunity to make and receive seamless
        payment with our virtual and physical contactless card you make alltime payment with just your mobile phone.
        No need to carry your card around. Signup below?
      </p>
        </div>
        <div className='login_personal'>
          



        </div>
      <Notification />
      <Footer />
    </div>
  )

}
export default Personal
