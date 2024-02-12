// AdMoney.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const AdMoneyMethod = () => {
  return (
    <div style={{display:'grid', height:"800px" }}>

      <div style={{display:'grid', marginLeft:'200px'}}>
      <h3 style={{color:'rgb(10 , 10, 100)', marginTop:'80px', marginLeft:'20px'}}>
        Select from the options to add money</h3>


      <div style={{display:'flex', marginBottom:'400px'}}>
       <div style={{display:'grid'}}>
      <div>
        <NavLink to="/addthrough/bank">
          <button> Add Through Bank</button>
        </NavLink>
      </div>

      <div>
        <NavLink to="/addthroughagupepay">
          <button>Add through Virtual POS</button>
        </NavLink>
      </div>

      <div>
        <NavLink to="/addwithcard">
          <button>Add through Card</button>
        </NavLink>
      </div>
      </div>
      <div style={{display:'grid'}}>
      <div>
        <NavLink to="/addthroughagupepay">
          <button>Add Through AgupePay</button>
        </NavLink>
      </div>

      <div>
        <NavLink to="/addthroughagupepay">
          <button>Send User ID</button>
        </NavLink>
      </div>

      <div>
        <NavLink to="/addthroughscanqcode">
          <button>scan Qcode to add</button>
        </NavLink>
      </div>
      </div>
      </div>
      </div>
    </div>
  );
};

export default AdMoneyMethod;
