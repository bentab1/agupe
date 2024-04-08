import { React, useEffect, useState } from "react";
import AllTransactions from "../TransactionStatus/AllTransactions/AllTransactions";
import CompletedTransaction from "../TransactionStatus/CompletedTransaction/CompletedTransaction";
import UpcomingTransaction from "../TransactionStatus/UpcomingTransaction/UpcominTransaction";
import FailedTransaction from "../TransactionStatus/FailedTransaction/FailedTransaction";
import PendingTransaction from "../TransactionStatus/PendingTransaction/PendingTransaction";
import ReversedTransaction from "../TransactionStatus/ReversedTransaction/ReversedTransaction";
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
function TransactionParentcomponent() {
  const [showAllTransactions, setShowAllTransactions] = useState(false);
  const [showCompletedTransactions, setShowCompletedTransactions] =
    useState(false);
  const [groupedTransactions, setGroupedTransactions] = useState({});
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [showUpcomingTransactions, setShowUpcomingTransactions] =
    useState(false);
  const [showFailedTransaction, setshowFailedTransaction] = useState(false);
  const [showPendingTransactions, setShowPendingTransactions] = useState(false);
  const [showReversedTransactions, setShowReversedTransactions] =
    useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const grouped = groupTransactionsByMonth(transactionHistory);
    setGroupedTransactions(grouped);
  }, [transactionHistory]);
  /////
  /////
  const handleAllTransactionStatus = () => {
    const transactionStatus = "completed";
    setGroupedTransactions(
      groupTransactionsByMonth(
        transactionHistory.filter((transaction) => transaction)
      )
    );
    if (!transactionStatus) {
      setError("No transaction found");
      setShowAllTransactions({});
      return;
    }
    setShowAllTransactions(true);
  };

  function toggleButtonAtransactions() {
    if (showAllTransactions === true) setShowAllTransactions(false);
  }
  // This lines of code below is for Completed Transaction
  const handleCompletedTransactionStatus = () => {
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
      setShowCompletedTransactions({});
      return;
    }
    setShowCompletedTransactions(true);
  };

  function toggleButtonCompleted() {
    if (showCompletedTransactions === true) setShowCompletedTransactions(false);
  }
  ///////
  ///////
  //This lines of code below is for Upcoming Transaction
  const handleUpcomingTransactionStatus = () => {
    setGroupedTransactions(
      groupTransactionsByMonth(
        transactionHistory.filter(
          (transaction) => transaction.status === "upcoming"
        )
      )
    );
    setShowUpcomingTransactions(true);
  };

  function toggleButtonUpcoming() {
    if (showUpcomingTransactions === true) setShowUpcomingTransactions(false);
  }
  ////
  const handleFailedTransactionStatus = () => {
    const transactionStatus = "failed";
    setGroupedTransactions(
      groupTransactionsByMonth(
        transactionHistory.filter(
          (transaction) => transaction.status === "failed"
        )
      )
    );
    if (!transactionStatus) {
      setError("No transaction found");
      setshowFailedTransaction({});
      return;
    }
    setshowFailedTransaction(true);
  };

  useEffect(() => {
    const grouped = groupTransactionsByMonth(transactionHistory);
    setGroupedTransactions(grouped);
  }, [transactionHistory]);

  function toggleButtonFailed() {
    if (showFailedTransaction === true) setshowFailedTransaction(false);
  }
  //////
  //////
  //This lines of code below is for pending Transaction
  const handlePendingTransactionStatus = () => {
    const transactionStatus = "pending";
    setGroupedTransactions(
      groupTransactionsByMonth(
        transactionHistory.filter(
          (transaction) => transaction.status === "pending"
        )
      )
    );
    if (!transactionStatus) {
      setError("No transaction found");
      setShowPendingTransactions({});
      return;
    }
    setShowPendingTransactions(true);
  };

  function toggleButtonPending() {
    if (showPendingTransactions === true) setShowPendingTransactions(false);
  }
  ///////
  //////
  //This lines of code below is for Reversed Transaction
  const handleReversedTransactionStatus = () => {
    const transactionStatus = "reversed";
    setGroupedTransactions(
      groupTransactionsByMonth(
        transactionHistory.filter(
          (transaction) => transaction.status === "reversed"
        )
      )
    );
    if (!transactionStatus) {
      setError("No transaction found");
      setShowReversedTransactions({});
      return;
    }
    setShowReversedTransactions(true);
  };

  function toggleButtonReversed() {
    if (showReversedTransactions === true) setShowReversedTransactions(false);
  }
  return (
    <div>
      <AllTransactions
        setTransactionHistory={setTransactionHistory}
        groupedTransactions={groupedTransactions}
        showAllTransactions={showAllTransactions}
      />
      <CompletedTransaction
        setTransactionHistory={setTransactionHistory}
        groupedTransactions={groupedTransactions}
        showCompletedTransactions={showCompletedTransactions}
      />
      <UpcomingTransaction
        showUpcomingTransactions={showUpcomingTransactions}
        setTransactionHistory={setTransactionHistory}
        groupedTransactions={groupedTransactions}
      />
      <FailedTransaction
        setTransactionHistory={setTransactionHistory}
        groupedTransactions={groupedTransactions}
        showFailedTransaction={showFailedTransaction}
      />
      <PendingTransaction
        setTransactionHistory={setTransactionHistory}
        groupedTransactions={groupedTransactions}
        showPendingTransactions={showPendingTransactions}
      />
      <ReversedTransaction
        setTransactionHistory={setTransactionHistory}
        groupedTransactions={groupedTransactions}
        showReversedTransactions={showReversedTransactions}
      />
      <TransactionStatus
        handleCompletedTransactionStatus={handleCompletedTransactionStatus}
        toggleButtonCompleted={toggleButtonCompleted}
        handleUpcomingTransactionStatus={handleUpcomingTransactionStatus}
        toggleButtonUpcoming={toggleButtonUpcoming}
        handleFailedTransactionStatus={handleFailedTransactionStatus}
        toggleButtonFailed={toggleButtonFailed}
        handlePendingTransactionStatus={handlePendingTransactionStatus}
        toggleButtonPending={toggleButtonPending}
        handleReversedTransactionStatus={handleReversedTransactionStatus}
        toggleButtonReversed={toggleButtonReversed}
        handleAllTransactionStatus={handleAllTransactionStatus}
        toggleButtonAtransactions={toggleButtonAtransactions}
        transactionHistory={transactionHistory}
        setGroupedTransactions={setGroupedTransactions}
        groupTransactionsByMonth={groupTransactionsByMonth}
        groupedTransactions={groupedTransactions}
        setTransactionHistory={setTransactionHistory}
      />
    </div>
  );
}

export default TransactionParentcomponent;
