import React from 'react';
import { NavLink } from 'react-router-dom';
import './personal.css';
function Personal() {
  return (
    <div style={{
      width: '1270px', height: '450px', display: 'flex', justifyContent: 'space-evenly',
      backgroundColor: 'rgb(235, 230, 240)'
    }}>

      <div className='login_personal'>
        <div style={{
          display: 'grid', justifyContent: 'center', backgroundColor: 'antiquewhite'
          , width: '250px', marginLeft: '175px', height: '200px', marginTop: '20px'
        }}>
          <p style={{ marginTop: '60px' }}>Login Personal or joint Account</p>
          <NavLink to="/login/persona;l" activeClassName="active" style={{
            marginTop: '50px', marginLeft: '25px', borderRadius: '5px', width: '130px'
          }} >
            <button style={{ fontSize: '12px', backgroundColor: 'aqua', color: "black" }}>Click to login</button></NavLink>
        </div>

      </div>
      <div className='register_personal'>
        <div style={{
          display: 'grid', justifyContent: 'center', backgroundColor: 'antiquewhite',
          width: '250px', marginLeft: '175px', height: '200px', marginTop: '20px'
        }}>
          <p style={{ marginTop: '60px' }}>Open Personal or joint Account</p>
          <NavLink to="/register/personal" activeClassName="active" style={{
            marginTop: '50px', marginLeft: '25px', borderRadius: '5px', width: '130px'
          }} >
            <button style={{ fontSize: '12px', backgroundColor: 'aqua', color: "black" }}>
              Click to open</button></NavLink>
        </div>
      </div>
    </div>
  )

}
export default Personal
