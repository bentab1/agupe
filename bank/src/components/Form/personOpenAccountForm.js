import React from 'react';
import { NavLink } from 'react-router-dom';
function personOpenAccountForm() {
  return (
    <div>
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
  )
}

export default personOpenAccountForm
