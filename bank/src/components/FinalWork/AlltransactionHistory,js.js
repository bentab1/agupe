import React, { useEffect, useState } from "react";
import fetchTransactionHistory from "../FetchedTransactionHistory";

function groupTransactionsByMonth(transactions, showTransactions) {
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

function AlltransactionHistory() {
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [groupedTransactions, setGroupedTransactions] = useState({});
  const [showPOSTransactions, setShowPOSTransactions] = useState(false);
  const [error, setError] = useState("");
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
        setError("You do not have any transactions.");
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
    setShowPOSTransactions(true); // Show transactions once available
  }, [transactionHistory]);

  return (
    <div className="POS-option-dv">
      <div style={{ paddingTop: "30px" }}>{error && <p>{error}</p>}</div>

      {showPOSTransactions && (
        <div
          style={{
            backgroundColor: "blue",
            display: "grid",
            position: "absolute",
            zIndex: "5",
          }}
        >
          <div className="completed-transaction" style={{ width: "800px" }}>
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

export default AlltransactionHistory;
