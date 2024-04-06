import { React, useEffect, useState } from "react";
import FetchTransactionHistory from "./FetchedTransactionHistory";

function StatusByAccountNumber({ handleOptionChange }) {
  const [showBalance, setShowBalance] = useState(false);
  const [boxes, setBoxes] = useState(["Box 1", "Box 2", "Box 3"]);

  const [selectedSavings, setSelectedSaving] = useState(null);
  const [selectedBusiness, setSelectedBusiness] = useState(null);
  const [selectedMasterPOS, setSelectedMasterPOS] = useState(null);
  const [selectedSubPOS, setSelectedSubPOS] = useState(null);
  const [transactionHistory, setTransactionHistory] = useState([]);
  //////
  ///////
  const CURRENCY_SYMBOL = "₦";
  ////
  useEffect(() => {
    // Fetch transaction history when the component mounts
    const fetchData = async () => {
      const transactionData = FetchTransactionHistory();
      setTransactionHistory(transactionData);
    };
    fetchData();
  }, []);

  const handleToggleBalance = () => {
    setShowBalance(!showBalance);
  };

  const shuffleBoxes = () => {
    const shuffledBoxes = [...boxes];
    for (let i = shuffledBoxes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledBoxes[i], shuffledBoxes[j]] = [
        shuffledBoxes[j],
        shuffledBoxes[i],
      ];
    }
    setBoxes(shuffledBoxes);
  };

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
      transaction.accountType === "Master_POS" &&
      transaction.business_id === "ubmc123"
  );
  const subPOSTransactions = transactionHistory.filter(
    (transaction) =>
      transaction.customer_id === "uc12" && // Replace "your_customer_id" with the actual customer ID
      transaction.accountType === "Sub_POS" &&
      transaction.business_id === "ubmc123"
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
          <div style={{ width: "130px", height: "80px", marginLeft: "10px" }}>
            <div style={{ marginTop: "20px" }}>
              Business: NAIRA <br />
            </div>
            <div style={{ marginTop: "20px", backgroundColor: "transparent" }}>
              <span style={{ fontSize: "15px" }}>
                {" "}
                {showBalance && (
                  <p>
                    {" "}
                    {CURRENCY_SYMBOL}
                    {parseFloat(balance).toLocaleString("en")}
                  </p>
                )}
              </span>
            </div>
            <button style={{ borderRadius: "20px" }}>
              {" "}
              Account: Number {accountNumber}
            </button>
          </div>
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
      if (
        transaction.accountType === "Master_POS" &&
        !uniqueMasterPOSMap.has(accountNumber)
      ) {
        uniqueMasterPOSMap.set(accountNumber, { serialNumber, balance });
      }
    });

    const options = [];
    uniqueMasterPOSMap.forEach((data, accountNumber) => {
      const { serialNumber, balance } = data;
      options.push({
        label: (
          <div style={{ width: "130px", height: "80px", marginLeft: "10px" }}>
            <div style={{ marginTop: "20px" }}>
              Master: NAIRA <br />
            </div>
            <div style={{ marginTop: "20px", backgroundColor: "transparent" }}>
              <span style={{ fontSize: "15px" }}>
                {" "}
                {showBalance && (
                  <p>
                    {" "}
                    {CURRENCY_SYMBOL}
                    {parseFloat(balance).toLocaleString("en")}
                  </p>
                )}
              </span>
            </div>
            <button style={{ borderRadius: "20px" }}>
              {" "}
              Account: Number {accountNumber}
            </button>
          </div>
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
          <div style={{ width: "130px", height: "80px", marginLeft: "10px" }}>
            <div style={{ marginTop: "20px" }}>
              Savings: NAIRA <br />
            </div>
            <div style={{ marginTop: "20px", backgroundColor: "transparent" }}>
              <span style={{ fontSize: "15px" }}>
                {" "}
                {showBalance && (
                  <p>
                    {" "}
                    {CURRENCY_SYMBOL}
                    {parseFloat(balance).toLocaleString("en")}
                  </p>
                )}
              </span>
            </div>
            <button style={{ borderRadius: "20px" }}>
              {" "}
              Account: Number {accountNumber}
            </button>
          </div>
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
          <div style={{ width: "130px", height: "80px", marginLeft: "10px" }}>
            <div style={{ marginTop: "20px" }}>
              Savings: NAIRA <br />
            </div>
            <div style={{ marginTop: "20px", backgroundColor: "transparent" }}>
              <span style={{ fontSize: "15px" }}>
                {" "}
                {showBalance && (
                  <p>
                    {" "}
                    {CURRENCY_SYMBOL}
                    {parseFloat(balance).toLocaleString("en")}
                  </p>
                )}
              </span>
            </div>
            <button style={{ borderRadius: "20px" }}>
              {" "}
              Account: Number {accountNumber}
            </button>
          </div>
        ),
        value: accountNumber,
      });
    });
    return options;
  };

  // Create options for each account type
  const savingsOptions = getSavingsOptions(savingsTransactions);
  const businessOptions = getBusinessOptions(businessTransactions);
  const masterPOSOptions = getMasterPOSOptions(masterPOSTransactions);
  const subPOSOptions = getSubPOSOptions(subPOSTransactions);

  const transaction = getSubPOSOptions(transactionHistory);
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          height: "140px",
          backgroundColor: "aqua",
          width: "150px",
          marginLeft: "30px",
          borderRadius: "20px",
        }}
      >
        <ul>
          <input
            type="checkbox"
            checked={showBalance}
            onChange={handleToggleBalance}
          />{" "}
          <span style={{ fontSize: "10px" }}>Show Balance</span>
          {savingsOptions.map((option) => (
            <li key={option.value}>{option.label}</li>
          ))}
        </ul>
      </div>
      <div
        style={{
          height: "140px",
          backgroundColor: "aqua",
          width: "150px",
          marginLeft: "30px",
          borderRadius: "20px",
        }}
      >
        <ul>
          <input
            type="checkbox"
            checked={showBalance}
            onChange={handleToggleBalance}
          />{" "}
          <span style={{ fontSize: "10px" }}>Show Balance</span>
          {businessOptions.map((option) => (
            <li key={option.value}>{option.label}</li>
          ))}
        </ul>
      </div>
      <div
        style={{
          height: "140px",
          backgroundColor: "aqua",
          width: "150px",
          marginLeft: "30px",
          borderRadius: "20px",
        }}
      >
        <ul>
          <input
            type="checkbox"
            checked={showBalance}
            onChange={handleToggleBalance}
          />{" "}
          <span style={{ fontSize: "10px" }}>Show Balance</span>
          {masterPOSOptions.map((option) => (
            <li key={option.value}>{option.label}</li>
          ))}
        </ul>
      </div>
      <div
        style={{
          height: "140px",
          backgroundColor: "aqua",
          width: "150px",
          marginLeft: "30px",
          borderRadius: "20px",
        }}
      >
        <ul>
          <input
            type="checkbox"
            checked={showBalance}
            onChange={handleToggleBalance}
          />{" "}
          <span style={{ fontSize: "10px" }}>Show Balance</span>
          {subPOSOptions.map((option) => (
            <li
              key={option.value}
              style={{
                height: "140px",
                backgroundColor: "aqua",
                width: "150px",
                marginLeft: "30px",
                borderRadius: "20px",
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default StatusByAccountNumber;
