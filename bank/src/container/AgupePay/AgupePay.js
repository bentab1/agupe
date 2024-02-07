import { React, useState } from 'react';
import { NavLink } from 'react-router-dom';
import CountryMenu from '../../components/CountryMenu/CountryMenu';
import './agupePay.css';
function AgupePay() {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
  };
  return (
    <div style={{ width: '1370px', backgroundColor: 'white', height: '750px', display: 'grid' }}>

      <div style={{display:'flex'}}>
      <p style={{ marginTop: '20px', padding: '40px' }}>
        <h2 style={{
          paddingLeft: '420px', marginBottom: '20px',
          color: 'royalblue'
        }}> Welcome to AgupePay
        </h2>
        Create AgupePay account  to start making and receiving seamless payment as a merchant or private
        Business owner across the globe  with our Agupepay. Our virtual and physical point of sale (POS) makes your business easy.
        Do not miss any Business because of payment means. signup below for freedom of Business transaction.

      </p>
      <div style={{marginTop:'30px', marginRight:'30px'}}>
          <CountryMenu className='countrymenu'/>

        </div>
        </div>

      <div style={{ display: 'flex' }}>
        <div style={{ display: 'grid', margin: '5px' }} className='personal'>
          <div style={{
            display: 'grid', justifyContent: 'center', width: '200px',
            backgroundColor: 'hsl(200, 33%, 98%)', height: '130px', marginTop: '10px'
          }}>
            <form style={{ marginTop: '10px', marginLeft: '10px' }}>
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
            display: 'grid', justifyContent: 'center', width: '200px',
            backgroundColor: 'hsl(200, 33%, 98%)', height: '125px'
          }}>
            <p style={{ marginTop: '30px' }}>OPen Personal Account</p>
            <NavLink to="/register/personal" activeClassName="active" style={{
              marginTop: '30px', marginLeft: '25px', borderRadius: '5px', width: '125px'
            }} >
              <button style={{ fontSize: '12px', backgroundColor: 'aqua', color: "black" }}>
                Click Open</button></NavLink>
          </div>


        </div>


        <div style={{ display: 'grid' }} className='business'>
          <div style={{
            display: 'grid', justifyContent: 'center', width: '200px',
            backgroundColor: 'hsl(200, 33%, 98%)', height: '130px', marginTop: '20px'
          }}>
            <form style={{ marginTop: '10px', marginLeft: '10px' }}>
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
            display: 'grid', justifyContent: 'center', width: '200px', height: '130px'
            , backgroundColor: 'hsl(200, 33%, 98%)'
          }}>
            <p style={{ marginTop: '30px' , marginLeft:'10px'}}>Open Merchant/Business owner Account</p>
            <NavLink to="/register/merchant" activeClassName="active" style={{
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

export default AgupePay
