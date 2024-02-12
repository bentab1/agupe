// SignUpContinueButton.jsx
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import GhanaFlag from '../Assets/GhanaFlag.jpg';
import NigeriaFlag from '../Assets/NigeriaFlag.jpg';
import CountryProps from '../CountryProps/CountryProps';

const countries = [
  { id: 'nigeria', name: 'Nigeria', flag: NigeriaFlag },
  { id: 'south-african', name: 'South African', flag: 'url_to_south_african_flag_image' },
  { id: 'ghana', name: 'Ghana', flag: GhanaFlag },
  { id: 'cameroon', name: 'Cameroon', flag: 'url_to_cameroon_flag_image' },
  { id: 'zambia', name: 'Zambia', flag: 'url_to_zambia_flag_image' },
  { id: 'kenya', name: 'Kenya', flag: 'url_to_kenya_flag_image' },
  { id: 'zimbabwe', name: 'Zimbabwe', flag: 'url_to_zimbabwe_flag_image' },
];

const SignUpContinueButton = ({ signupType, handleContinue }) => {
  const signupLinks = {
    'personsignup': "/person/signup/redirect",
    'jointsignup': "/joint/signup/redirect",
    'bussignup': "/business/signup/redirect",
    'agupepaysignup': "/agupepay/signup/redirect",
    'enterprisesignup': "/enterprise/signup/redirect",
  };

  const to = signupLinks[signupType] || '#';
  const [selectedCountry, setSelectedCountry] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Retrieve the selected country from localStorage on component mount
    const storedCountry = localStorage.getItem('selectedCountry');
    if (storedCountry) {
      setSelectedCountry(storedCountry);
    }
  }, []);

  const handleCountrySelect = (name) => {
    // Save the selected country to localStorage
    localStorage.setItem('selectedCountry', name);
    setSelectedCountry(name);
    setErrorMessage(''); // Clear error message when a country is selected
  };

  const handleClick = () => {
    if (!selectedCountry || selectedCountry === "No country selected!") {
      setErrorMessage("Please select a valid country.");
  
      // Set a timer to clear the error message after 60 seconds (60000 milliseconds)
      setTimeout(() => {
        setErrorMessage('');
      }, 60000);
    } else {
      // Proceed with handleContinue function
      handleContinue();
    }
  };

  return (
    <div style={{display:'grid', 
    height:'auto', justifyContent:'center',width:'150px'}}>
     
     

      <select
        id="countrySelect"
        onChange={(e) => handleCountrySelect(e.target.value)}
        value={selectedCountry}
        style={{height:'25px'}}
      >
        <option value="No country selected!">Select a valid country</option>
        {countries.map((country) => (
          <option key={country.id} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>

      {selectedCountry && (
        <div style={{marginLeft:'2px'}}>
         
          <CountryProps
            name={selectedCountry}
            flag={countries.find((country) => country.name === selectedCountry)?.flag}
            onSelect={handleCountrySelect}
            selected={true}
            
          />
        </div>
      )}
{errorMessage && <div style={{ color: 'red', marginTop: '10px',
 position:'absolute', zIndex:'5' ,display:'contents'}}>{errorMessage}</div>}
<NavLink
        to={to}
        style={{ textDecoration: 'none', width: '114px', height: '50px',
         borderRadius: '25px', backgroundColor: 'rgba(252, 233, 67, 1)', 
         display: 'inline-block', marginTop:'60px', marginLeft:'20px' }}
        activeClassName="active"
        onClick={handleClick}
      >
        <button
          disabled={!selectedCountry || selectedCountry === "No country selected!"}
          style={{
            backgroundColor: 'black',
            color: 'white',
            border: 'none',
            borderRadius: '25px',
            cursor: 'pointer',
            paddingLeft: '10px',
            fontSize: '14px',
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
