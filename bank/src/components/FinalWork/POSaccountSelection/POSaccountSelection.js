import React, { useEffect, useState } from "react";
import fetchTransactionHistory from "../../FetchedTransactionHistory";

function groupTransactionsByMonth(transactions) {
  const groupedTransactions = {};
  transactions.forEach((transaction) => {
    const date = new Date(transaction.date);
    const monthYear = `${date.toLocaleString("en-US", {
      month: "long",
    })} ${date.getFullYear()}`;
    if (!groupedTransactions[monthYear]) {
      groupedTransactions[monthYear] = [];
    }
    groupedTransactions[monthYear].push(transaction);
  });
  return groupedTransactions;
}

function POSaccountSelection({}) {
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [groupedTransactions, setGroupedTransactions] = useState({});
  const [showPOSTransactions, setShowPOSTransactions] = useState(false);
  const [showAccountOptions, setShowAccountOptions] = useState(false);
  const [error, setError] = useState("");
  const [
    showSavingsAndBusinessCategories,
    setShowSavingsAndBusinessCategories,
  ] = useState(false);
  const [showPOSCategories, setShowPOSCategories] = useState(false);
  const CURRENCY_SYMBOL = "₦";

  useEffect(() => {
    // Fetch transaction history when the component mounts
    const fetchData = async () => {
      const transactionData = fetchTransactionHistory();
      setTransactionHistory(transactionData);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const grouped = groupTransactionsByMonth(transactionHistory);
    setGroupedTransactions(grouped);
  }, [transactionHistory]);

  const handlePosAndTheCategoryTransaction = (
    accountNumber = selectedAccount,
    category = null
  ) => {
    if (!category) {
      setError(
        "Category not selected. Please select a category to view transactions."
      );
      setShowPOSTransactions(false);
      return;
    }

    const filteredTransactions = transactionHistory.filter(
      (transaction) => transaction.accountNumber === accountNumber
    );

    if (filteredTransactions.length === 0) {
      setError("No transactions found for the selected account.");
      setShowPOSTransactions(false);
      return;
    }

    const filteredByCategory = filteredTransactions.filter(
      (transaction) => transaction.TransactionType === category
    );

    if (filteredByCategory.length === 0) {
      setError(`No "${category}" transactions found for the selected account.`);
      setShowPOSTransactions(false);
      return;
    }

    setGroupedTransactions(groupTransactionsByMonth(filteredByCategory));
    setShowPOSTransactions(true);
    setError(""); // Reset error message
  };

  const handleAccountSelect = (accountNumber, accountType) => {
    setSelectedAccount(accountNumber);

    if (accountType === "Savings" || accountType === "Business") {
      setShowPOSTransactions(false);
      setError(""); // Reset error message
      setShowPOSCategories(false); // Hide POS categories
      setShowSavingsAndBusinessCategories(true); // Show Savings and Business categories
    } else if (
      accountType === "Master_POS" ||
      accountType === "Sub_POS" ||
      accountType === "POS"
    ) {
      setShowPOSTransactions(false);
      setError(""); // Reset error message
      setShowSavingsAndBusinessCategories(false); // Hide Savings and Business categories
      setShowPOSCategories(true); // Show POS categories
    }
  };

  function handleCloseCategoryMenu() {
    if (showPOSTransactions === true) {
      setShowSavingsAndBusinessCategories(false);
      setShowPOSCategories(false);
    }
  }

  // Render options based on account type
  const renderOptions = (options) => {
    return options.map((option, index) => (
      <button
        key={index}
        style={{ width: "160px" }}
        onClick={() => {
          handleAccountSelect(option.value, option.accountType);
          console.log(option.value);
        }}
      >
        {option.label}
      </button>
    ));
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
            Savings: <br />
            Account Number: {accountNumber} <br />
            Balance: {CURRENCY_SYMBOL}
            {parseFloat(balance).toLocaleString("en")}
          </span>
        ),
        value: accountNumber,
        accountType: "Savings",
      });
    });
    return options;
  };

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
            Business: <br />
            Account Number: {accountNumber} <br />
            Balance:{CURRENCY_SYMBOL}
            {parseFloat(balance).toLocaleString("en")}
          </span>
        ),
        value: accountNumber,
        accountType: "Business",
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
            Balance: {CURRENCY_SYMBOL}
            {parseFloat(balance).toLocaleString("en")}
          </span>
        ),
        value: accountNumber,
        accountType: "Master_POS",
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
            Balance: {CURRENCY_SYMBOL}
            {parseFloat(balance).toLocaleString("en")}
          </span>
        ),
        value: accountNumber,
        accountType: "Sub_POS",
      });
    });
    return options;
  };

  const savingsTransactions = transactionHistory.filter(
    (transaction) =>
      transaction.customer_id === "uc12" &&
      transaction.accountType === "Savings"
  );
  const businessTransactions = transactionHistory.filter(
    (transaction) =>
      transaction.customer_id === "uc12" &&
      transaction.accountType === "Business"
  );
  const masterPOSTransactions = transactionHistory.filter(
    (transaction) =>
      transaction.customer_id === "uc12" &&
      transaction.accountType === "Master_POS" &&
      transaction.business_id === "ubmc123"
  );
  const subPOSTransactions = transactionHistory.filter(
    (transaction) =>
      transaction.customer_id === "uc12" &&
      transaction.accountType === "Sub_POS" &&
      transaction.business_id === "ubmc123"
  );

  const savingsOptions = getSavingsOptions(savingsTransactions);
  const businessOptions = getBusinessOptions(businessTransactions);
  const masterPOSOptions = getMasterPOSOptions(masterPOSTransactions);
  const subPOSOptions = getSubPOSOptions(subPOSTransactions);

  return (
    <div className="POS-option-dv">
      <div style={{ paddingTop: "30px" }}>
        <button
          onClick={() => {
            setShowPOSTransactions(false);
            setShowSavingsAndBusinessCategories(false);
            setShowPOSCategories(false);
            setSelectedAccount(null);
            setShowAccountOptions(true);
          }}
        >
          Accounts
        </button>
        {showSavingsAndBusinessCategories && (
          <div>
            <h4>Select Category</h4>
            <ul>
              <li>
                <button
                  onClick={() =>
                    handlePosAndTheCategoryTransaction(
                      selectedAccount,
                      "Refunds"
                    )
                  }
                >
                  Refunds
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    handlePosAndTheCategoryTransaction(
                      selectedAccount,
                      "Card Withdrawal"
                    );
                    setShowSavingsAndBusinessCategories(false);
                    setShowPOSCategories(false);
                    setSelectedAccount(null);
                    setShowAccountOptions(false);
                  }}
                >
                  Card Withdrawal
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    handlePosAndTheCategoryTransaction(selectedAccount, "QCode")
                  }
                >
                  QCode
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    handlePosAndTheCategoryTransaction(
                      selectedAccount,
                      "Commission"
                    )
                  }
                >
                  Commission
                </button>
              </li>
            </ul>
          </div>
        )}
        {error && <p>{error}</p>}

        {showPOSCategories && (
          <div>
            <button
              onClick={() => {
                setShowPOSTransactions(true);
                setShowAccountOptions(false);
                handleCloseCategoryMenu();
              }}
              style={{ fontSize: "15px" }}
            >
              &times;
            </button>
            <h4>Select Category</h4>
            <ul>
              <li>
                <button
                  onClick={() =>
                    handlePosAndTheCategoryTransaction(
                      selectedAccount,
                      "Refunds"
                    )
                  }
                >
                  Refunds
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    handlePosAndTheCategoryTransaction(
                      selectedAccount,
                      "Card Payment"
                    )
                  }
                >
                  Card Payment
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    handlePosAndTheCategoryTransaction(selectedAccount, "QCode")
                  }
                >
                  QCode
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    handlePosAndTheCategoryTransaction(
                      selectedAccount,
                      "Commission"
                    )
                  }
                >
                  Commission
                </button>
              </li>
            </ul>
          </div>
        )}

        {showAccountOptions && (
          <div style={{ display: "grid", overflowY: "scroll", gap: "15px" }}>
            <h4>Select An Account</h4>
            <div style={{ display: "grid", overflowY: "scroll", gap: "10px" }}>
              <div className="savings-options-container">
                {renderOptions(savingsOptions)}
              </div>
            </div>
            <div style={{ display: "grid", overflowY: "scroll", gap: "10px" }}>
              {renderOptions(businessOptions)}
            </div>
            <div style={{ display: "grid", overflowY: "scroll", gap: "10px" }}>
              {renderOptions(masterPOSOptions)}
            </div>
            <div style={{ display: "grid", overflowY: "scroll", gap: "10px" }}>
              {renderOptions(subPOSOptions)}
            </div>
          </div>
        )}
      </div>

      {showPOSTransactions && (
        <div
          style={{
            backgroundColor: "blue",
            display: "grid",
            position: "absolute",
            zIndex: "5",
          }}
        >
          <div className="completed-transaction">
            {Object.keys(groupedTransactions).map((monthYear) => (
              <div key={monthYear}>
                <h3>{monthYear}</h3>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {groupedTransactions[monthYear].map((transaction) => (
                    <li
                      key={transaction.id}
                      style={{
                        backgroundColor: "wheat",
                        marginBottom: "10px", // Apply 10px margin bottom
                        padding: "10px", // Apply 10px padding
                        borderRadius: "5px",
                        width: "250px", // Optional: Add rounded corners
                      }}
                    >
                      <p>Type: {transaction.TransactionType}</p>
                      <p>Date: {transaction.date}</p>
                      <p>Description: {transaction.description}</p>
                      <p>Amount: {transaction.amount}</p>
                      <p>Balance: {transaction.balance}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default POSaccountSelection;
