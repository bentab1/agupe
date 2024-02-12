import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import SignUpContinueButton from '../SignUpContinueButton/SignUpContinueButton';
import './enterpriseSignUpRedirect.css';

const EnterpriseSignUpRedirect = (props) => {
  const [error, setError] = useState('');

  const handleContinue = () => {
    const selectedCountry = localStorage.getItem('selectedCountry');
    if (!selectedCountry || selectedCountry === "Select") {
      setError("Please select your country.");

      // Clear the error message after 60 seconds
      setTimeout(() => {
        setError('');
      }, 60000);
    } else {
      // Proceed with handleContinue function
      props.history.push("/enterprise/signup/redirect");
    }
  };

  return (
    <div className='businesssignupredirect' style={{ backgroundColor: 'white' }}>
     <div className='' style={{ backgroundColor: 'white' }}>
        <h3 style={{ marginLeft: '380px', marginTop: '40px', color:'rgb(10, 10, 100)' }}> Please, select your country of residence to continue <span style={{color:'red'}}>SignUp</span>.</h3>
           <h4 style={{ marginLeft: '450px', marginTop: '40px' , color:'rgb(10, 10, 100)'}}>If your country is not in the list, <span style={{color:'red'}}>check back later!.</span></h4>

        <div style={{ marginLeft: '550px', marginTop: '40px' }}>
          <span style={{ marginLeft: '10px' }}>
            {/* Include your modified SignUpContinueButton here */}
            <SignUpContinueButton
              signupType='bussignup'
              handleContinue={handleContinue}
            />
          </span>
        </div>
      </div>

      <div style={{ width: '100%', height: '600px' }}></div>

      {error && <p style={{ color: 'red', marginLeft: '550px' }}>{error}</p>}

      <Footer />
    </div>
  );
}

export default EnterpriseSignUpRedirect;
