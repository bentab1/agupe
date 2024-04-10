import React, { useEffect, useState } from "react";
import fetchTransactionHistory from "../../FetchedTransactionHistory";
import "./CompletedTransaction.css";

function CompletedTransaction({
  setTransactionHistory,
  groupedTransactions,
  showCompletedTransactions,
}) {
  const [error, setError] = useState("");
  useEffect(() => {
    // Fetch transaction history when the component mounts
    const fetchData = async () => {
      const transactionData = fetchTransactionHistory();
      setTransactionHistory(transactionData);
    };
    fetchData();
  }, [setTransactionHistory]);

  //////
  ///////
  return (
    <div>
      {error && <p>{error}</p>}
      <div style={{ backgroundColor: "blue" }}>
        {showCompletedTransactions && (
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
        )}
      </div>
    </div>
  );
}

export default CompletedTransaction;
