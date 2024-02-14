// SearchableSelect.jsx
import React, { useState } from 'react';
import Select from 'react-select';

function AddMoneyBankSearchBar ({ options, onChange }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selected) => {
    setSelectedOption(selected);
    onChange(selected);
  };

  return (
    <Select
      value={selectedOption}
      onChange={handleChange}
      options={options}
      isSearchable
      placeholder="Select a bank"
    />
  );
};

export default AddMoneyBankSearchBar;






