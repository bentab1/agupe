
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddMoneyBankSearchBar from '../AddMoneyBankSearchBar/AddMoneyBankSearchBar';


const AddMoneyBankMenu = () => {
  const [selectedBank, setSelectedBank] = useState(null);
  const [amount, setAmount] = useState('');
  const navigate = useNavigate();

  const defaultCurrency = '₦'; // Default currency is Naira
  const [error, setError] = useState('');

  const bankOptions = [
    { value: 'First Bank', label: 'First Bank', link: '/activatetransfer' },
    { value: 'Zenith Bank', label: 'Zenith Bank', link: '/activatezenith' },
    { value: 'Access Bank', label: 'Access Bank' }, // Nigerian Naira sign
    { value: 'Ecobank', label: 'Ecobank' }, // Nigerian Naira sign
    { value: 'GTB Bank', label: 'GTB Bank' }, // Dollar sign
    { value: 'UBA Bank', label: 'UBA Bank' }, // Nigerian Naira sign
    { value: 'Opay Bank', label: 'Opay Bank' }, // Nigerian Naira sign
    { value: 'Zenith Bank', label: 'Zenith Bank' },
    // Add other banks with their links
  ];

  const handleBankChange = (selected) => {
    setSelectedBank(selected);
    setError('');
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
    setError('');
  };

  const handleBankClick = () => {
    if (!selectedBank || !amount) {
      setError('Please select a bank and enter the amount.');
      return;
    }

    console.log('Selected Bank:', selectedBank.value);
    console.log('Amount:', amount);

    // Include the default currency symbol (Naira) in the input field
    const amountWithCurrency = `${defaultCurrency}${amount}`;
    console.log('Amount with Currency:', amountWithCurrency);

    // Redirect to the bank's specific link with the currency and amount
    const redirectLink = `${selectedBank.link}?bank=${selectedBank.value}&amount=${amountWithCurrency}`;
    navigate(redirectLink);
  };

  return (
    <div style={{ width: '180px', height: '600px', marginLeft:'300px', marginTop:"40px" }}>
      <AddMoneyBankSearchBar options={bankOptions} onChange={handleBankChange} />

      {/* Display the default currency symbol (Naira) next to the input field */}
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' , width:'300px'}}>
        <span>{defaultCurrency}</span>
        <input
            
          type="text"
          placeholder="Enter amount"
          value={amount}
          onChange={handleAmountChange}
          style={{ marginLeft: '5px' , height:'30px'}}
        />
      </div>

      <button onClick={handleBankClick} disabled={!selectedBank || !amount}
      style={{marginTop:'20px'}}>
        Proceed
      </button>

      <p style={{display:'flow-root',zIndex:'20', color: 'red' }}>{error}</p>
    </div>
  );
};

export default AddMoneyBankMenu;














































