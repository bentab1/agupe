import { React, useEffect, useState } from "react";
import fetchTransactionHistory from "../FetchedTransactionHistory";
import SearchTransactionQuery from "./SearchTransactionQuery/SearchTransactionQuery";
import "./TransactionStatus.css";
function TransactionStatus({
  toggleButtonCompleted,
  handleCompletedTransactionStatus,
  handleUpcomingTransactionStatus,
  toggleButtonUpcoming,
  handleFailedTransactionStatus,
  toggleButtonFailed,
  handlePendingTransactionStatus,
  toggleButtonPending,
  handleReversedTransactionStatus,
  toggleButtonReversed,
  handleAllTransactionStatus,
  toggleButtonAtransactions,
  transactionHistory,
  setGroupedTransactions,
  groupTransactionsByMonth,
  groupedTransactions,
  setTransactionHistory,
}) {
  const [showTransactionStatusMenu, setShowTransactionStatusMenu] =
    useState(false);
  const [showAllTransactionHistories, setShowAllTransactionHistories] =
    useState(false);
  const [showAllCategoryMenu, setShowAllCategoryMenu] = useState(false);
  const [error, setError] = useState("");

  function handleShowTransactionStatusMenu() {
    setShowTransactionStatusMenu(true);
  }

  function toggleButtonTransactioStatus() {
    if (showTransactionStatusMenu === true) {
      setShowTransactionStatusMenu(false);
    }
  }
  ///////
  function handleShowAllCategoryMenu() {
    setShowAllCategoryMenu(true);
  }
  function toggleButtonAllCategoryMenu() {
    if (showAllCategoryMenu === true) setShowAllCategoryMenu(false);
  }
  useEffect(() => {
    // Fetch transaction history when the component mounts
    const fetchData = async () => {
      const transactionData = fetchTransactionHistory();
      setTransactionHistory(transactionData);
    };
    fetchData();
  }, [setTransactionHistory]);

  useEffect(() => {
    // This function will be executed when the component mounts
    searchAllTransactionHistories();
  }, []); // Passing an empty dependency array ensures this effect runs only once when the component mounts

  const searchAllTransactionHistories = () => {
    const transactionStatus = "completed";
    // Assuming you have transactionHistory and setGroupedTransactions defined elsewhere
    setGroupedTransactions(
      groupTransactionsByMonth(
        transactionHistory.filter((transaction) => transaction)
      )
    );
    if (!transactionStatus) {
      setError("No transaction found");
      setShowAllTransactionHistories({});
      return;
    }
    setShowAllTransactionHistories(true);
  };

  return (
    <div className="transaction-status-div">
      <SearchTransactionQuery
        transactionHistory={transactionHistory}
        setGroupedTransactions={setGroupedTransactions}
        groupTransactionsByMonth={groupTransactionsByMonth}
      />
      <div>
        <button
          onClick={() => {
            handleAllTransactionStatus();
            toggleButtonAtransactions();
            toggleButtonCompleted();
            toggleButtonUpcoming();
            toggleButtonFailed();
            toggleButtonPending();
            toggleButtonReversed();
            toggleButtonTransactioStatus();
          }}
        >
          All Transactions
        </button>
        <button
          onClick={() => {
            handleShowAllCategoryMenu();
            toggleButtonAllCategoryMenu();
          }}
        >
          All category
        </button>

        <button
          onClick={() => {
            handleShowTransactionStatusMenu();
            toggleButtonTransactioStatus();
          }}
        >
          Transaction Status
        </button>

        {showTransactionStatusMenu && (
          <ul style={{ display: "flex", top: "100px", marginTop: "5px" }}>
            <li>
              {" "}
              <button
                onClick={() => {
                  handleCompletedTransactionStatus();
                  toggleButtonCompleted();
                  toggleButtonUpcoming();
                  toggleButtonFailed();
                  toggleButtonPending();
                  toggleButtonReversed();
                  toggleButtonAtransactions();
                  toggleButtonTransactioStatus();
                }}
              >
                Completed
              </button>
            </li>
            <li>
              {" "}
              <button
                onClick={() => {
                  handleUpcomingTransactionStatus();
                  toggleButtonUpcoming();
                  toggleButtonCompleted();
                  toggleButtonFailed();
                  toggleButtonPending();
                  toggleButtonReversed();
                  toggleButtonAtransactions();
                  toggleButtonTransactioStatus();
                }}
              >
                Upcoming
              </button>
            </li>
            <li>
              {" "}
              <button
                onClick={() => {
                  handleFailedTransactionStatus();
                  toggleButtonFailed();
                  toggleButtonCompleted();
                  toggleButtonUpcoming();
                  toggleButtonPending();
                  toggleButtonReversed();
                  toggleButtonAtransactions();
                  toggleButtonTransactioStatus();
                }}
              >
                Failed
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  handlePendingTransactionStatus();
                  toggleButtonPending();
                  toggleButtonCompleted();
                  toggleButtonUpcoming();
                  toggleButtonFailed();
                  toggleButtonReversed();
                  toggleButtonAtransactions();
                  toggleButtonTransactioStatus();
                }}
              >
                Pending
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  handleReversedTransactionStatus();
                  toggleButtonReversed();
                  toggleButtonCompleted();
                  toggleButtonUpcoming();
                  toggleButtonFailed();
                  toggleButtonPending();
                  toggleButtonAtransactions();
                  toggleButtonTransactioStatus();
                }}
              >
                Reversed
              </button>
            </li>
            <li></li>
          </ul>
        )}
      </div>
      {showAllCategoryMenu && (
        <div className="category-all-transaction-container">
          <ul className="category-all-transaction-ul-1">
            <li>
              <button> All Transaction</button>
            </li>
            <li>
              <button> Transfer to LPay</button>
            </li>
            <li>
              <button>LPay wallet Transaction</button>
            </li>
            <li>
              <button> Add Money</button>
            </li>
            <li>
              <button>Other bank Deposit</button>
            </li>
            <li>
              <button> Card Withdrawal</button>
            </li>
            <li>
              <button>Refunds</button>
            </li>
            <li>
              <button>Card Payment</button>
            </li>
            <li>
              <button> QCode</button>
            </li>
            <li>
              <button> Commission</button>
            </li>
            <li>
              <button> Cash Back</button>
            </li>
          </ul>
          <ul className="category-all-transaction-ul-2">
            <li>
              <button>TV</button>
            </li>
            <li>
              <button>Mobile Data</button>
            </li>
            <li>
              <button> Airtime</button>
            </li>
            <li>
              <button>Electricity</button>
            </li>
            <li>
              <button> Flight</button>
            </li>
            <li>
              <button>Education</button>
            </li>
            <li>
              <button>Purchases</button>
            </li>
            <li>
              <button>E-Pin</button>
            </li>
            <li>
              <button> Betting</button>
            </li>
            <li>
              <button> Subscription</button>
            </li>
          </ul>
        </div>
      )}

      {showAllTransactionHistories && (
        <div className="all-transaction">
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
  );
}

export default TransactionStatus;
