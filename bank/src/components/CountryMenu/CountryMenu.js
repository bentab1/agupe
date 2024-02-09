import React, { useEffect, useState } from 'react';
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

function CountryMenu({ onSelect }) {
  const [selectedCountry, setSelectedCountry] = useState('');

  useEffect(() => {
    // Retrieve the selected country from localStorage on component mount
    const storedCountry = localStorage.getItem('selectedCountry');
    if (storedCountry) {
      setSelectedCountry(storedCountry);
    }
  }, [onSelect]);
  const handleCountrySelect = (name) => {
    // Save the selected country to localStorage
    localStorage.setItem('selectedCountry', name);
    setSelectedCountry(name);

  };

  return (
    <div style={{marginRight:"90px", width:'90px', height:'178px'}}>
      <p htmlFor="countrySelect" style={{fontSize:'11px', marginBottom:'13px', 
      color:'royalblue',fontWeight:'bold', paddingLeft:'10px'}}>Select Country:</p>
      <select
        id="countrySelect"
        onChange={(e) => handleCountrySelect(e.target.value)}
        value={selectedCountry} style={{width:'78px'}}
      >
        <option value="">Select...</option>
        {countries.map((country) => (
          <option key={country.id} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>

      {selectedCountry && (
        <div style={{ width:'60px', marginLeft:'10px'}}>
          <CountryProps   
            name={selectedCountry}
            flag={countries.find((country) => country.name === selectedCountry)?.flag}
            onSelect={handleCountrySelect}
            selected={true}
          />
         
        </div>
      )}
    </div>
  );
}

export default CountryMenu;
