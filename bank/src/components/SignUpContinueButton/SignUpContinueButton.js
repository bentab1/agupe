// SignUpContinueButton.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const SignUpContinueButton = ({ signupType }) => {
  const signupLinks = {
    'personal': '/personal',
    'joint': '/joint/signup',
    'bussignup':"/business/signup/redirect",
    'agupepay': '/agupepay',
    'enterprises': '/business',
  };

  const to = signupLinks[signupType] || '#'; // If signupType is not found, set to '#'
  const [error, setError] = useState('');

  const handleButtonClick = () => {
    const selectedCountry = localStorage.getItem('selectedCountry');
    if (!selectedCountry) {
      setError("Please select your country.");
    } else {
      setError('');
      console.log(`Continue to ${signupType} signup with selected country: ${selectedCountry}`);
      // Navigate to the desired route (adjust route as needed)
      // history.push(to);
    }
  };

  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      <NavLink
        to={to}
        style={{ textDecoration: 'none',width:'114px',height:'50px',borderRadius:'25px', backgroundColor: 'rgba(252, 233, 67, 1)', display: 'inline-block' }}
        activeClassName="active"
        onClick={(e) => (error ? e.preventDefault() : null)}
      >
        
        <button
          onClick={handleButtonClick}
          style={{
            backgroundColor: 'black',
            color: 'white',
            border: 'none',
            borderRadius: '25px',
            cursor: 'pointer',
            paddingLeft:'10px',
            fontSize:'14px',
            textDecoration: 'none',
            width: '98px',
          }}
        >
          Continue
        </button>
      </NavLink>
      
    </div>
  );
};

export default SignUpContinueButton;
