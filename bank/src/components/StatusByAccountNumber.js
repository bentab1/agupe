import { React, useState, useEffect } from "react";
import Select from "react-select";
import FetchTransactionHistory from "./FetchedTransactionHistory";

function StatusByAccountNumber({ handleOptionChange }) {
  const [selectedSavings, setSelectedSaving] = useState(null);
  const [selectedBusiness, setSelectedBusiness] = useState(null);
  const [selectedMasterPOS, setSelectedMasterPOS] = useState(null);
  const [selectedSubPOS, setSelectedSubPOS] = useState(null);
  const [transactionHistory, setTransactionHistory] = useState([]);
  //////
  ///////

  useEffect(() => {
    // Fetch transaction history when the component mounts
    const fetchData = async () => {
      const transactionData = FetchTransactionHistory();
      setTransactionHistory(transactionData);
    };
    fetchData();
  }, []);
  // Filter transactions for each account type
  const savingsTransactions = transactionHistory.filter(
    (transaction) =>
      transaction.customer_id === "uc12" && // Replace "your_customer_id" with the actual customer ID
      transaction.accountType === "Savings"
  );
  const businessTransactions = transactionHistory.filter(
    (transaction) =>
      transaction.customer_id === "uc12" && // Replace "your_customer_id" with the actual customer ID
      transaction.accountType === "Business"
  );
  const masterPOSTransactions = transactionHistory.filter(
    (transaction) =>
      transaction.customer_id === "uc12" && // Replace "your_customer_id" with the actual customer ID
      transaction.accountType === "Master_POS"
  );
  const subPOSTransactions = transactionHistory.filter(
    (transaction) =>
      transaction.customer_id === "uc12" && // Replace "your_customer_id" with the actual customer ID
      transaction.accountType === "Sub_POS"
  );

  const getBusinessOptions = (transactions) => {
    const uniqueBusinessMap = new Map();
    transactions.forEach((transaction) => {
      const { accountNumber, balance } = transaction;
      if (
        transaction.accountType === "Business" &&
        !uniqueBusinessMap.has(accountNumber)
      ) {
        uniqueBusinessMap.set(accountNumber, { balance });
      }
    });

    const options = [];
    uniqueBusinessMap.forEach((data, accountNumber) => {
      const { balance } = data;
      options.push({
        label: (
          <span>
            Business Account: <br />
            Account Number: {accountNumber} <br />
            Balance: {balance}
          </span>
        ),
        value: accountNumber,
      });
    });
    return options;
  };

  const getMasterPOSOptions = (transactions) => {
    const uniqueMasterPOSMap = new Map();
    transactions.forEach((transaction) => {
      const { accountNumber, serialNumber, balance } = transaction;
      if (!uniqueMasterPOSMap.has(accountNumber)) {
        uniqueMasterPOSMap.set(accountNumber, { serialNumber, balance });
      }
    });

    const options = [];
    uniqueMasterPOSMap.forEach((data, accountNumber) => {
      const { serialNumber, balance } = data;
      options.push({
        label: (
          <span>
            Master POS: <br />
            Account Number: {accountNumber} <br />
            Serial Number: {serialNumber} <br />
            Balance: {balance}
          </span>
        ),
        value: accountNumber,
      });
    });
    return options;
  };

  const getSubPOSOptions = (transactions) => {
    const uniqueSubPOSMap = new Map();
    transactions.forEach((transaction) => {
      const { accountNumber, serialNumber, balance } = transaction;
      if (!uniqueSubPOSMap.has(accountNumber)) {
        uniqueSubPOSMap.set(accountNumber, { serialNumber, balance });
      }
    });

    const options = [];
    uniqueSubPOSMap.forEach((data, accountNumber) => {
      const { serialNumber, balance } = data;
      options.push({
        label: (
          <span>
            Sub POS: <br />
            Account Number: {accountNumber} <br />
            Serial Number: {serialNumber} <br />
            Balance: {balance}
          </span>
        ),
        value: accountNumber,
      });
    });
    return options;
  };

  const getSavingsOptions = (transactions) => {
    const uniqueSavingsMap = new Map();
    transactions.forEach((transaction) => {
      const { accountNumber, balance } = transaction;
      if (
        transaction.accountType === "Savings" &&
        !uniqueSavingsMap.has(accountNumber)
      ) {
        uniqueSavingsMap.set(accountNumber, { balance });
      }
    });

    const options = [];
    uniqueSavingsMap.forEach((data, accountNumber) => {
      const { balance } = data;
      options.push({
        label: (
          <span>
            Savings Account: <br />
            Account Number: {accountNumber} <br />
            Balance: {balance}
          </span>
        ),
        value: accountNumber,
      });
    });
    return options;
  };

  // Now you can use these options in your Select components
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      fontSize: "12px",
    }),
    menu: (provided, state) => ({
      ...provided,
      display: state.selectProps.menuIsOpen ? "block" : "none",
    }),
    menuList: (provided, state) => ({
      ...provided,
      fontSize: "12px",
    }),
    indicatorSeparator: () => ({}),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : null,
    }),
  };

  // Create options for each account type
  const savingsOptions = getSavingsOptions(savingsTransactions);
  const businessOptions = getBusinessOptions(businessTransactions);
  const masterPOSOptions = getMasterPOSOptions(masterPOSTransactions);
  const subPOSOptions = getSubPOSOptions(subPOSTransactions);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div>
          <Select
            options={savingsOptions} // Use the options generated for Savings
            isClearable
            isSearchable
            placeholder="Savings Account"
            onChange={(selectedOption) => {
              handleOptionChange(selectedSavings);
              setSelectedSaving(selectedOption);
            }}
            value={selectedSavings}
            styles={customStyles} // Define custom styles for savings
          />
        </div>
        <div>
          <Select
            options={businessOptions} // Use the options generated for Savings
            isClearable
            isSearchable
            placeholder="Business Account"
            onChange={(selectedOption) => {
              handleOptionChange(selectedBusiness);
              setSelectedBusiness(selectedOption);
            }}
            value={selectedBusiness}
            styles={customStyles} // Define custom styles for savings
          />
        </div>
        <div>
          <Select
            options={masterPOSOptions} // Use the options generated for Savings
            isClearable
            isSearchable
            placeholder="Master POS Account"
            onChange={(selectedOption) => {
              handleOptionChange(selectedMasterPOS);
              setSelectedMasterPOS(selectedOption);
            }}
            value={selectedMasterPOS}
            styles={customStyles} // Define custom styles for savings
          />
        </div>
        <div>
          <Select
            options={subPOSOptions} // Use the options generated for Savings
            isClearable
            isSearchable
            placeholder="Sub POS Account"
            onChange={(selectedOption) => {
              handleOptionChange(selectedSubPOS);
              setSelectedSubPOS(selectedOption);
            }}
            value={selectedSubPOS}
            styles={customStyles} // Define custom styles for savings
          />
        </div>
      </div>
    </div>
  );
}

export default StatusByAccountNumber;
