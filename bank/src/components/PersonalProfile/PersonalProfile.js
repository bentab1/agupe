// PersonalProfile.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const PersonalProfile = () => {
  const handleActionClick = (action) => {
    // Handle the action based on the button clicked
    console.log(`Clicked on: ${action}`);
    // You can add logic to navigate to specific routes or perform other actions
  };

  return (
    <div style={{display:'flex'}}>

      <div  >
        <NavLink to="/addmoney">
          <button onClick={() => handleActionClick('Add Money')}>
            Add Money
          </button>
        </NavLink>
      </div>

      <div>
        <NavLink to="/transfer">
          <button onClick={() => handleActionClick('Transfer')}>
            Transfer
          </button>
        </NavLink>
      </div>

      <div>
        <NavLink to="/add-card">
          <button onClick={() => handleActionClick('Add Card')}>
            Add Card
          </button>
        </NavLink>
      </div>

      <div>
        <NavLink to="/pay-bill">
          <button onClick={() => handleActionClick('Pay Bill')}>
            Pay Bill
          </button>
        </NavLink>
      </div>

      <div>
        <NavLink to="/buy-data-airtime">
          <button onClick={() => handleActionClick('Buy Data/Airtime')}>
            Buy Data/Airtime
          </button>
        </NavLink>
      </div>

      <div>
        <NavLink to="/apply-for-pos">
          <button onClick={() => handleActionClick('Apply for POS')}>
            Apply for POS
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default PersonalProfile;
