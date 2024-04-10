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
  const [groupedTransactions, setGroupedTransactions] = useState({});
  const [showPOSTransactions, setShowPOSTransactions] = useState(false);
  const [error, setError] = useState("");
  const [showStatus, setShowStatus] = useState(false);
  const CURRENCY_SYMBOL = "₦";

  useEffect(() => {
    const fetchData = async () => {
      const transactionData = fetchTransactionHistory();

      // Check if there are transactions for default account numbers
      const defaultAccountNumbers = [
        savingsOptions[0]?.value,
        businessOptions[0]?.value,
        masterPOSOptions[0]?.value,
        subPOSOptions[0]?.value,
      ];
      const defaultAccountTransactions = transactionData.filter(
        (transaction) =>
          defaultAccountNumbers.includes(transaction.accountNumber) &&
          (transaction.accountType === "Savings" ||
            transaction.accountType === "Business" ||
            transaction.accountType === "Master_POS" ||
            transaction.accountType === "Sub_POS")
      );

      if (defaultAccountTransactions.length === 0) {
        setError("No transactions found for default account numbers.");
        setShowPOSTransactions(false);
      } else {
        setTransactionHistory(transactionData);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const grouped = groupTransactionsByMonth(transactionHistory);
    setGroupedTransactions(grouped);
  }, [transactionHistory]);

  const handlePosAndTheCategoryTransaction = (category, status = null) => {
    if (!category) {
      setError(
        "Category not selected. Please select a category to view transactions."
      );
      setShowPOSTransactions(false);
      return;
    }

    // Filter transactions based on the category
    const filteredByCategory = transactionHistory.filter(
      (transaction) => transaction.TransactionType === category
    );

    if (filteredByCategory.length === 0) {
      setError(`No "${category}" transactions found.`);
      setShowPOSTransactions(false);
      return;
    }

    let filteredByStatus = filteredByCategory;
    if (status) {
      const validStatus = [
        "completed",
        "pending",
        "failed",
        "Reversed",
        "upcoming",
      ];
      if (!validStatus.includes(status)) {
        setError("Invalid status selected.");
        setShowPOSTransactions(false);
        return;
      }
      filteredByStatus = filteredByCategory.filter(
        (transaction) => transaction.status === status
      );
      if (filteredByStatus.length === 0) {
        setError(
          `No "${status}" transactions found for the selected category.`
        );
        setShowPOSTransactions(false);
        return;
      }
    }

    setGroupedTransactions(groupTransactionsByMonth(filteredByStatus));
    setShowPOSTransactions(true);
    setError(""); // Reset error message
  };

  // Render options based on account type

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
        <button>Status</button>
        {showStatus && (
          <div>
            <h4>Select status</h4>
            <ul>
              <li>
                <button>Completed</button>
              </li>
              <li>
                <button>Upcoming</button>
              </li>
              <li>
                <button>Failed</button>
              </li>
              <li>
                <button>Pending</button>
              </li>
              <li>
                <button>Reversed</button>
              </li>
            </ul>
          </div>
        )}
        {error && <p>{error}</p>}
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
