import React from 'react';
import AddMoneyBankMenu from '../AddMoneyBankMenu/AddMoneyBankMenu'; // Adjust the path accordingly
import Footer from '../Footer/Footer';

const AddMoneyThroughBank = (props) => {
  // Removed the unused selectedBank state

  return (
    <div className="add-money-through-bank" style={{ backgroundColor: 'white' }}>
      <h4 style={{ marginLeft: '400px', marginTop: '40px' }}> Select a bank to add money:</h4>

      <div style={{ marginLeft: '550px', marginTop: '40px' }}>
        <AddMoneyBankMenu />
        {/* You can include any additional UI or buttons here as needed */}
      </div>

      <div style={{ width: '100%', height: '600px' }}></div>

      <Footer />
    </div>
  );
};

export default AddMoneyThroughBank;
