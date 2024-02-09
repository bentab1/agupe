import { React, useState } from 'react';
import CountryMenu from '../CountryMenu/CountryMenu';
import SignUpContinueButton from '../SignUpContinueButton/SignUpContinueButton';

function JointSignUpRedirect() {

  const [selectedCountry, setSelectedCountry] = useState('');

  const handleCountrySelect = (name) => {
    setSelectedCountry(name);
  };

  const handleContinue = () => {
    if (!selectedCountry) {
      console.log("Please select a country.");
    } else {
      console.log('Continue to Business signup with selected country:', selectedCountry);
      // Navigate to the desired route (adjust route as needed)
      // history.push('/business-signup');
    }
  };
  return (
    <div>
       <h4> Please select your country to continue SignUp</h4>
      <div style={{display:'grid'}}>
        <span style={{ marginLeft: '10px' }}>
          <CountryMenu onSelect={handleCountrySelect} />
        </span>
        <SignUpContinueButton
       signupType="personal" // replace "/selected-route" with your actual route
        onClick={handleContinue}
        disabled={!selectedCountry}
      />
        </div>
      
    </div>
  )
}

export default JointSignUpRedirect
