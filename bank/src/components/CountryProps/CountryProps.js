// CountryProps.js

import React from 'react';
import styles from './countryProps.module.css';

const CountryProps = ({ name, flag, onSelect, selected }) => {
  const handleClick = () => {
    onSelect?.(name);
  };

  return (
    <div className={`${styles.country} ${selected ? styles.selectedCountry : ''}`} onClick={handleClick}>
      <h2 style={{ color: selected ? 'red' : 'black', fontWeight: selected ? 'bold' : 'normal',
       fontSize:selected? '16px':'' }}>
        {name}
      </h2>
      {flag && <img src={flag} alt={`${name} flag`} className={styles.flag} />}
    </div>
  );
};

export default CountryProps;
