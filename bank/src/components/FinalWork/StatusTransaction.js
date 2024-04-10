import React, { useEffect, useState } from "react";
import fetchTransactionHistory from "../FetchedTransactionHistory";

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

function ExamplesM() {
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [groupedTransactions, setGroupedTransactions] = useState({});
  const [showPOSTransactions, setShowPOSTransactions] = useState(false);
  const [error, setError] = useState("");
  const [showStatus, setShowStatus] = useState(false);
  const CURRENCY_SYMBOL = "₦";
  const authenticatedCustomerId = "uc12"; // Assume the authenticated customer ID

  useEffect(() => {
    const fetchData = async () => {
      const transactionData = fetchTransactionHistory();

      // Check if there are transactions for the authenticated customer's account numbers
      const authenticatedCustomerTransactions = transactionData.filter(
        (transaction) =>
          transaction.customer_id === authenticatedCustomerId &&
          (transaction.accountType === "Savings" ||
            transaction.accountType === "Business" ||
            transaction.accountType === "Master_POS" ||
            transaction.accountType === "Sub_POS")
      );

      if (authenticatedCustomerTransactions.length === 0) {
        setError("No transactions found for authenticated customer.");
        setShowPOSTransactions(false);
      } else {
        setTransactionHistory(authenticatedCustomerTransactions);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const grouped = groupTransactionsByMonth(transactionHistory);
    setGroupedTransactions(grouped);
  }, [transactionHistory]);

  const handleStatusTransaction = (status) => {
    if (!status) {
      setError(
        "Status not selected. Please select a status to view transactions."
      );
      setShowPOSTransactions(false);
      return;
    }

    // Filter transactions based on the status
    const filteredByStatus = transactionHistory.filter(
      (transaction) => transaction.status === status
    );

    if (filteredByStatus.length === 0) {
      setError(`No "${status}" transactions found.`);
      setShowPOSTransactions(false);
      return;
    }

    setGroupedTransactions(groupTransactionsByMonth(filteredByStatus));
    setShowPOSTransactions(true);
    setError(""); // Reset error message
  };

  return (
    <div className="POS-option-dv">
      <div style={{ paddingTop: "30px" }}>
        <button onClick={() => setShowStatus(!showStatus)}>Status</button>
        {showStatus && (
          <div>
            <h4>Select status</h4>
            <ul>
              <li>
                <button onClick={() => handleStatusTransaction("completed")}>
                  Completed
                </button>
              </li>
              <li>
                <button onClick={() => handleStatusTransaction("upcoming")}>
                  Upcoming
                </button>
              </li>
              <li>
                <button onClick={() => handleStatusTransaction("failed")}>
                  Failed
                </button>
              </li>
              <li>
                <button onClick={() => handleStatusTransaction("pending")}>
                  Pending
                </button>
              </li>
              <li>
                <button onClick={() => handleStatusTransaction("Reversed")}>
                  Reversed
                </button>
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

export default ExamplesM;
