import React, { useEffect, useState } from "react";
import CompletedTransaction from "../TransactionStatus/CompletedTransaction/CompletedTransaction";
import fetchTransactionHistory from "../../FetchedTransactionHistory";
import TransactionStatus from "../TransactionStatus/TransactionStatus";

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
function ComplParents() {
  const [showCompleted, setShowCompleted] = useState(false);
  const [groupedTransactions, setGroupedTransactions] = useState({});
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [error, setError] = useState("");

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
  }, []);
  const handleShowTransactionStatus = () => {
    const transactionStatus = "completed";
    setGroupedTransactions(
      groupTransactionsByMonth(
        transactionHistory.filter(
          (transaction) => transaction.status === "completed"
        )
      )
    );
    if (!transactionStatus) {
      setError("No transaction found");
      setShowCompleted({});
      return;
    }
    setShowCompleted(true);
  };

  function toggleCompleted() {
    if (showCompleted === true) setShowCompleted(false);
  }

  return (
    <div>
      <CompletedTransaction
        groupedTransactions={groupedTransactions}
        handleShowTransactionStatus={handleShowTransactionStatus}
        toggleCompleted={toggleCompleted}
        setGroupedTransactions={setGroupedTransactions}
        showCompleted={showCompleted}
      />
      <TransactionStatus />
    </div>
  );
}

export default ComplParents;
