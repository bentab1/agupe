import { React, useState } from 'react';
import { NavLink } from 'react-router-dom';
import CountryMenu from '../CountryMenu/CountryMenu';

import './banking.css';
function Banking() {

  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
  };
  return (
    <div style={{
      width: '1370px', height: '750px'
      , display: 'grid', justifyContent: 'space-evenly', backgroundColor: 'white'
    }}>
      <div style={{ display: 'flex' }}>
        <div>
          <p style={{ marginTop: '5px', padding: '50px' }}>

            <h2 style={{
              paddingLeft: '100px', marginBottom: '20px',
              color: 'royalblue', padding: '20px', fontSize: '30px'
            }}>
              Welcome to Agupe digital banking, the best so far in the system. </h2>

            Agupe digital banking came at the right time to make payment very easy and seamless.
            With our mobile  contactless card you can make payment anytime anywhere just by tapping your
            mobile phone. Is that not awesome? Signup below!

          </p>
        </div>
        <div style={{ marginTop: '30px', marginRight: '30px' }}>
          <CountryMenu className='countrymenu' />

        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <div style={{ display: 'grid' }} className='personal_1'>
          <div style={{
            display: 'grid', width: '250px',
            backgroundColor: 'rgba(207, 232, 231, 1)', height: '110px', marginTop: '20px', marginLeft: '35px'
          }}>
            <form style={{ marginTop: '30px', marginLeft: '35px' }}>
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
          <div style={{ display: 'flex', height: '250px', width: '600px', justifyContent: 'space-around' }}>
            <div style={{
              display: 'grid', justifyContent: 'center', height: '100px', width: '200px'
              , backgroundColor: 'rgba(207, 232, 231, 1)', marginTop: '120px'
            }}>
              <p style={{ marginTop: '20px' }}>Open Personal Account</p>
              <NavLink to="/register/personal" activeClassName="active" style={{
                marginTop: '30px', borderRadius: '5px', width: '120px'
              }} >
                <button style={{ fontSize: '12px', backgroundColor: 'aqua', color: "black" }}>
                  Click Open</button></NavLink>
            </div>

            <div style={{
              display: 'grid', justifyContent: 'center', height: '100px', width: '200px'
              , backgroundColor: 'rgba(207, 232, 231, 1)', marginTop: '120px'
            }}>
              <p style={{ marginTop: '20px' }}>Open joint Account</p>
              <NavLink to="/register/personal/joint" activeClassName="active" style={{
                marginTop: '30px', borderRadius: '5px', width: '120px'
              }} >
                <button style={{ fontSize: '12px', backgroundColor: 'aqua', color: "black" }}>
                  Click Open</button></NavLink>
            </div>
          </div>


        </div>

        <div style={{ display: 'grid' }} className='business_1'>
          <div style={{
            display: 'grid', justifyContent: 'center', width: '250px',
            backgroundColor: 'rgba(207, 232, 231, 1)', height: '150px', marginTop: '20px'
          }}>
            <form style={{ marginTop: '30px', marginLeft: '35px' }}>
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

          <div style={{
            display: 'grid', justifyContent: 'center', width: '250px', height: '150px'
            , backgroundColor: 'rgba(207, 232, 231, 1)'
          }}>
            <p style={{ marginTop: '20px' }}>Open Business Account</p>
            <NavLink to="/register/Business" activeClassName="active" style={{
              marginTop: '30px', marginLeft: '25px', borderRadius: '5px', width: '130px'
            }} >
              <button style={{ fontSize: '12px', backgroundColor: 'aqua', color: "black" }}>
                Click Open</button></NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banking

