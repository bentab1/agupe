// AdMoney.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const AdMoneyMethod = () => {
  return (
    <div>
      <h4 style={{color:'rgb(10 , 10, 100)'}}>Select from options to add money</h4>

      <div>
        <NavLink to="/addthrough/bank">
          <button> Add Through Bank</button>
        </NavLink>
      </div>

      <div>
        <NavLink to="/addwithcard">
          <button>Add through Card</button>
        </NavLink>
      </div>

      <div>
        <NavLink to="/addthroughagupepay">
          <button>Add Through AgupePay</button>
        </NavLink>
      </div>

      <div>
        <NavLink to="/addthroughscanqcode">
          <button>scan Qcode to add</button>
        </NavLink>
      </div>
    </div>
  );
};

export default AdMoneyMethod;
