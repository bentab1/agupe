import React, { useEffect, useState } from "react";
import fetchTransactionHistory from "../../FetchedTransactionHistory";
import "./UpcominTransaction.css";

function UpcomingTransaction({
  showUpcomingTransactions,
  groupedTransactions,
  setTransactionHistory,
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

  return (
    <div>
      {showUpcomingTransactions && (
        <div className="upcming-transaction">
          {Object.keys(groupedTransactions).map((monthYear) => (
            <div key={monthYear}>
              <h3>{monthYear}</h3>
              <ul>
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
                    <p>Date: {transaction.date}</p>
                    <p>Description: {transaction.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
       {error && <p>{error}</p>}
    </div>
  );
}

export default UpcomingTransaction;
