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

function Zcompont() {
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [groupedTransactions, setGroupedTransactions] = useState({});
  const [showAllCategoryMenu, setShowAllCategoryMenu] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [error, setError] = useState("");
  const authenticatedCustomerId = "uc12";
  const CURRENCY_SYMBOL = "₦";

  useEffect(() => {
    // Fetch transaction history when the component mounts
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
      } else {
        setTransactionHistory(authenticatedCustomerTransactions);
      }
    };

    fetchData();
  }, [authenticatedCustomerId]);

  useEffect(() => {
    const filteredTransactions = transactionHistory.filter(
      (transaction) =>
        !selectedCategory || transaction.TransactionType === selectedCategory
    );

    if (filteredTransactions.length === 0) {
      setError("No transactions found for the selected category.");
    } else {
      setError(""); // Reset error message if transactions are found
    }

    setGroupedTransactions(groupTransactionsByMonth(filteredTransactions));
  }, [transactionHistory, selectedCategory]);

  const handleAllTransactions = () => {
    setShowAllCategoryMenu(false);
    setSelectedCategory(null);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setShowAllCategoryMenu(false);
  };

  return (
    <div className="POS-option-dv">
      <div style={{ paddingTop: "30px" }}>
        <button onClick={handleAllTransactions}>All Transactions</button>
        <button onClick={() => setShowAllCategoryMenu(true)}>Category</button>
      </div>

      {showAllCategoryMenu && (
        <div className="category-all-transaction-main-container">
          <div className="Select-all-category">
            <p>Select A category</p>
            <button onClick={handleAllTransactions}>All</button>
          </div>
          <div className="category-all-transaction-sub-container">
            <ul className="category-all-transaction-ul-1">
              <li>
                <button
                  onClick={() => handleCategorySelect("Transfer to LPay")}
                >
                  Transfer to LPay
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    handleCategorySelect("LPay wallet Transaction")
                  }
                >
                  LPay wallet Transaction
                </button>
              </li>
              <li>
                <button onClick={() => handleCategorySelect("Add Money")}>
                  Add Money
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleCategorySelect("Other bank Deposit")}
                >
                  Other bank Deposit
                </button>
              </li>
              <li>
                <button onClick={() => handleCategorySelect("Card Withdrawal")}>
                  Card Withdrawal
                </button>
              </li>
              <li>
                <button onClick={() => handleCategorySelect("Refunds")}>
                  Refunds
                </button>
              </li>
              <li>
                <button onClick={() => handleCategorySelect("Card Payment")}>
                  Card Payment
                </button>
              </li>
              <li>
                <button onClick={() => handleCategorySelect("QCode")}>
                  QCode
                </button>
              </li>
              <li>
                <button onClick={() => handleCategorySelect("Commission")}>
                  Commission
                </button>
              </li>
              <li>
                <button onClick={() => handleCategorySelect("Cash Back")}>
                  Cash Back
                </button>
              </li>
            </ul>
            <ul className="category-all-transaction-ul-2">
              <li>
                <button onClick={() => handleCategorySelect("TV")}>TV</button>
              </li>
              <li>
                <button onClick={() => handleCategorySelect("Mobile Data")}>
                  Mobile Data
                </button>
              </li>
              <li>
                <button onClick={() => handleCategorySelect("Airtime")}>
                  Airtime
                </button>
              </li>
              <li>
                <button onClick={() => handleCategorySelect("Electricity")}>
                  Electricity
                </button>
              </li>
              <li>
                <button onClick={() => handleCategorySelect("Flight")}>
                  Flight
                </button>
              </li>
              <li>
                <button onClick={() => handleCategorySelect("Education")}>
                  Education
                </button>
              </li>
              <li>
                <button onClick={() => handleCategorySelect("Purchases")}>
                  Purchases
                </button>
              </li>
              <li>
                <button onClick={() => handleCategorySelect("E-Pin")}>
                  E-Pin
                </button>
              </li>
              <li>
                <button onClick={() => handleCategorySelect("Betting")}>
                  Betting
                </button>
              </li>
              <li>
                <button onClick={() => handleCategorySelect("Subscription")}>
                  Subscription
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
      {error && <p>{error}</p>}
      <div>
        {Object.keys(groupedTransactions).map((monthYear) => (
          <div key={monthYear}>
            <h3>{monthYear}</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {groupedTransactions[monthYear].map((transaction) => (
                <li
                  key={transaction.id}
                  style={{
                    backgroundColor: "wheat",
                    marginBottom: "10px",
                    padding: "10px",
                    borderRadius: "5px",
                    width: "250px",
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
  );
}

export default Zcompont;
