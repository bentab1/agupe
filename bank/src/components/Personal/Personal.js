import { React, useState } from 'react';
import { NavLink } from 'react-router-dom';
import CountryMenu from '../CountryMenu/CountryMenu';
import Footer from '../Footer/Footer';
import Notification from '../Notification/Notification';
import './personal.css';
function Personal() {

  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
  };
  return (
    <div className='personal_headpage' style={{
       justifyContent: 'space-evenly',
      backgroundColor: 'white'
    }}>
      <div style={{display:'flex'}}>
      <p style={{ padding: '40px', fontWeight: 'initial', height: '80px' }}>

        <h2 style={{
          paddingLeft: '300px', marginBottom: '20px',
          color: 'rgb(10, 10, 100)'
        }}>Hey!, No need to carry your card around!</h2>

        Go with the best !!  Our individual or joint account gives you opportunity to make and receive seamless
        payment with our virtual and physical contactless card you make alltime payment with just your mobile phone.
        No need to carry your card around. Signup below?
      </p>

      <div style={{marginTop:'30px', marginRight:'30px'}}>
          <CountryMenu className='countrymenu'/>

        </div>
        </div>
      <div style={{ display: 'flex' }}>
        <div className='login_personal'>
          <div style={{
            display: 'grid', justifyContent: 'center', backgroundColor: 'antiquewhite'
            , width: '250px', marginLeft: '175px', height: '200px', marginTop: '20px'
          }}>
            <form style={{ marginTop: '30px', marginLeft: '30px' }}>
              <label>Email/Username:</label>
              <input
                type="text"
                value={emailOrUsername}
                onChange={(e) => setEmailOrUsername(e.target.value)}
              />

              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button onClick={handleLogin} style={{
                fontSize: '12px', marginTop: '10px', backgroundColor: 'aqua',
                color: "black"
              }}>Login</button>

            </form>
          </div>

        </div>
        <div className='register_personal'>
          <div style={{
            display: 'grid', justifyContent: 'center', backgroundColor: 'antiquewhite',
            width: '250px', marginLeft: '175px', height: '200px', marginTop: '20px'
          }}>
            <p style={{ marginTop: '60px' }}>Open Personal Account</p>
            <NavLink to="/register/personal" activeClassName="active" style={{
              marginTop: '50px', marginLeft: '25px', borderRadius: '5px', width: '130px'
            }} >
              <button style={{ fontSize: '12px', backgroundColor: 'aqua', color: "black" }}>
                Click Open</button></NavLink>
          </div>
        </div>
        <div className='register_joint'>
          <div style={{
            display: 'grid', justifyContent: 'center', backgroundColor: 'antiquewhite',
            width: '250px', marginLeft: '175px', height: '200px', marginTop: '20px'
          }}>
            <p style={{ marginTop: '60px' }}>Open Joint Account</p>
            <NavLink to="/register/personal/joint" activeClassName="active" style={{
              marginTop: '50px', marginLeft: '25px', borderRadius: '5px', width: '130px'
            }} >
              <button style={{ fontSize: '12px', backgroundColor: 'aqua', color: "black" }}>
                Click Open</button></NavLink>
          </div>
        </div>

      </div>
      <Notification />
      <Footer />
    </div>
  )

}
export default Personal
