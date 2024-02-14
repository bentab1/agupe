// UserProfile.jsx

import React, { useEffect, useState } from 'react';
import CountryProps from '../CountryProps/CountryProps';

const PersonalProfile= () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [flagURL, setFlagURL] = useState('');

  useEffect(() => {
    // Retrieve selected country and flag URL from storage or state
    const storedCountry = localStorage.getItem('selectedCountry');
    const storedFlagURL = localStorage.getItem('flagURL');

    if (storedCountry && storedFlagURL) {
      setSelectedCountry(storedCountry);
      setFlagURL(storedFlagURL);
    }
  }, []);

  return (
    <div>
      <h2>PersonalProfile</h2>
      {selectedCountry && (
        <div>
          <h3>Selected Country: {selectedCountry}</h3>
          <CountryProps name={selectedCountry} flag={flagURL} />
        </div>
      )}
      {/* Other user profile details */}
    </div>
  );
};

export default PersonalProfile;
