import { React, useState } from 'react';
import { NavLink } from 'react-router-dom';
import CountryMenu from '../CountryMenu/CountryMenu';
import Footer from '../Footer/Footer';
import Notification from '../Notification/Notification';
import './business.css';
function Business() {

  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    
  };
  return (
    <div  className='business_headpage' style={{
       display: 'grid',
      backgroundColor: 'white',
    }}>

      <div>

        <div style={{display:'flex'}}>
        <p style={{ marginTop: '20px', padding: '40px' }}>

          <h2 style={{
            paddingLeft: '50px', marginBottom: '20px',
            color: 'royalblue'
          }}> We make Business seamlessly easy with our payment services</h2>


          Welcome to Agupe Business banking .Create your Business account today to leverage the most
          efficient banking system. Make seamless payment with our Virtual and Physical contactless card, physical and
          Virtual contactless POS for your Business.
          Connect our AgupePay to your online store? signup for Business XXXXX
        </p>

        <div style={{marginTop:'30px', marginRight:'30px'}}>
          <CountryMenu className='countrymenu'/>

        </div>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div className='login_business'>
          <div style={{
            display: 'grid', justifyContent: 'center', backgroundColor: 'hsl(200, 33%, 98%)'
            , width: '200px', marginLeft: '230px', height: '150px', marginTop: '20px'
          }}>


            <form style={{ marginTop: '30px', marginLeft: '10px' }}>
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

        <div className='register_business' >
          <div style={{
            display: 'grid', justifyContent: 'center', backgroundColor: 'hsl(200, 33%, 98%)',
            width: '200px', marginLeft: '230px', height: '150px', marginTop: '20px'
          }}>
            <p style={{ marginTop: '40px', marginLeft:'20px'}}>New? Open Business Account</p>
            <NavLink to="/register/business" activeClassName="active" style={{
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

export default Business