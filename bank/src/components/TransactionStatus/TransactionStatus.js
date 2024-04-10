import React, { useEffect, useState } from "react";
import fetchTransactionHistory from "../FetchedTransactionHistory";
import POSaccountSelection from "../FinalWork/POSaccountSelection/POSaccountSelection";
import Footer2 from "../Footer2/Footer2";
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
  toggleButtonAlltransactions,
  transactionHistory,
  setGroupedTransactions,
  groupTransactionsByMonth,
  groupedTransactions,
  setTransactionHistory,
  handleCategoryForTransactionStatus,

  handleClosePOSOptionMenu,
  setShowPOSOptions,
  POSselectedStatus,
  setPOSSelectedStatus,
  handlePosAndTheCategoryTransaction,
  setPOSMenu,
}) {
  const [showTransactionStatusMenu, setShowTransactionStatusMenu] =
    useState(false);

  const [showAllCategoryMenu, setShowAllCategoryMenu] = useState(false);
  const [error, setError] = useState("");
  const [showAllTransactionHistories, setShowAllTransactionHistories] =
    useState(false);
  const [selectedTransactionStatus, setSelectedTransactionStatus] =
    useState(null);
  const [showPOSCategoryMenu, setShowPOSCategoryMenu] = useState(false);

  ///////
  function handleShowTransactionStatusMenu() {
    setShowTransactionStatusMenu(true);
  }

  function toggleButtonTransactioStatusMenu() {
    if (showTransactionStatusMenu === true) {
      setShowTransactionStatusMenu(false);
    }
  }
  ///////
  function handleShowAllCategoryMenu() {
    setShowAllCategoryMenu(true);
  }

  function handlePOSCategoryMenu() {
    if (POSselectedStatus !== null) {
      setShowAllCategoryMenu(false);
      setShowPOSCategoryMenu(true);
    }
    if (showPOSCategoryMenu === true) {
      setShowAllCategoryMenu(false);
    }
  }
  function toggleButtonAllCategoryMenu() {
    if (showAllCategoryMenu === true) {
      setShowAllCategoryMenu(false);
    }
    if (showPOSCategoryMenu === true) {
      setShowPOSCategoryMenu(false);
    }
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
    // Assuming you have transactionHistory and setGroupedTransactions defined elsewhere
    setGroupedTransactions(
      groupTransactionsByMonth(
        transactionHistory.filter((transaction) => transaction)
      )
    );

    setShowAllTransactionHistories(true);
  };

  useEffect(() => {
    let timer;
    if (POSselectedStatus) {
      timer = setTimeout(() => {
        setPOSSelectedStatus(null);
      }, 10000); // Reset after 10 seconds
    }
    return () => clearTimeout(timer);
  }, [POSselectedStatus, setPOSSelectedStatus]);

  useEffect(() => {
    let timer;
    if (selectedTransactionStatus) {
      timer = setTimeout(() => {
        setSelectedTransactionStatus(null);
      }, 10000); // Reset after 10 seconds
    }
    return () => clearTimeout(timer);
  }, [selectedTransactionStatus]);

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
            toggleButtonAlltransactions();
            toggleButtonCompleted();
            toggleButtonUpcoming();
            toggleButtonFailed();
            toggleButtonPending();
            toggleButtonReversed();
            toggleButtonTransactioStatusMenu();
          }}
        >
          All Transactions
        </button>
        <button
          onClick={() => {
            setPOSMenu(true);
          }}
        >
          POS Transactions
        </button>
        <POSaccountSelection />
        <button
          onClick={() => {
            handleShowAllCategoryMenu();
            handlePOSCategoryMenu();
            toggleButtonAllCategoryMenu();
          }}
        >
          {POSselectedStatus !== null ? "POS Category" : "All category"}
        </button>

        <button
          onClick={() => {
            setShowPOSOptions(true);
            handleClosePOSOptionMenu();
          }}
        >
          {POSselectedStatus ? POSselectedStatus : "POS Transactions"}
        </button>
        <button
          onClick={() => {
            handleShowTransactionStatusMenu();
            toggleButtonTransactioStatusMenu();
          }}
        >
          {selectedTransactionStatus
            ? selectedTransactionStatus
            : "Transaction Status"}
        </button>
        {showTransactionStatusMenu && (
          <ul style={{ display: "flex", top: "100px", marginTop: "5px" }}>
            <li>
              {" "}
              <button
                onClick={() => {
                  handleCompletedTransactionStatus();
                  toggleButtonUpcoming();
                  toggleButtonFailed();
                  toggleButtonPending();
                  toggleButtonReversed();
                  toggleButtonAlltransactions();
                  toggleButtonTransactioStatusMenu();
                  setSelectedTransactionStatus("Completed");
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
                  toggleButtonCompleted();
                  toggleButtonFailed();
                  toggleButtonPending();
                  toggleButtonReversed();
                  toggleButtonAlltransactions();
                  toggleButtonTransactioStatusMenu();
                  setSelectedTransactionStatus("Upcoming");
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
                  toggleButtonCompleted();
                  toggleButtonUpcoming();
                  toggleButtonPending();
                  toggleButtonReversed();
                  toggleButtonAlltransactions();
                  toggleButtonTransactioStatusMenu();
                  setSelectedTransactionStatus("Failed");
                }}
              >
                Failed
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  handlePendingTransactionStatus();
                  toggleButtonCompleted();
                  toggleButtonUpcoming();
                  toggleButtonFailed();
                  toggleButtonReversed();
                  toggleButtonAlltransactions();
                  toggleButtonTransactioStatusMenu();

                  setSelectedTransactionStatus("Pending");
                }}
              >
                Pending
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  handleReversedTransactionStatus();
                  toggleButtonCompleted();
                  toggleButtonUpcoming();
                  toggleButtonFailed();
                  toggleButtonPending();
                  toggleButtonAlltransactions();
                  toggleButtonTransactioStatusMenu();
                  setSelectedTransactionStatus("Reversed");
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
        <div className="category-all-transaction-main-container">
          <div className="Select-all-category">
            <p>Select A category</p>
            <button> All</button>
          </div>
          <div className="category-all-transaction-sub-container">
            <ul className="category-all-transaction-ul-1">
              <li>
                <button
                  onClick={() => {
                    handleCategoryForTransactionStatus("Transfer To LPay");
                    toggleButtonAllCategoryMenu();
                  }}
                >
                  {" "}
                  Transfer to LPay
                </button>
              </li>
              <li>
                <button onClick={() => {}}>LPay wallet Transaction</button>
              </li>
              <li>
                <button onClick={() => {}}> Add Money</button>
              </li>
              <li>
                <button onClick={() => {}}>Other bank Deposit</button>
              </li>
              <li>
                <button
                  onClick={() => {
                    handleCategoryForTransactionStatus("Card Withdrawal");
                    toggleButtonAllCategoryMenu();
                  }}
                >
                  {" "}
                  Card Withdrawal
                </button>
              </li>
              <li>
                <button onClick={() => {}}>Refunds</button>
              </li>
              <li>
                <button onClick={() => {}}>Card Payment</button>
              </li>
              <li>
                <button onClick={() => {}}> QCode</button>
              </li>
              <li>
                <button onClick={() => {}}> Commission</button>
              </li>
              <li>
                <button> Cash Back</button>
              </li>
            </ul>
            <ul className="category-all-transaction-ul-2">
              <li>
                <button
                  onClick={() => {
                    // setSelectedTransactionType();
                  }}
                >
                  TV
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    // setSelectedTransactionType();
                  }}
                >
                  Mobile Data
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    // setSelectedTransactionType();
                  }}
                >
                  {" "}
                  Airtime
                </button>
              </li>
              <li>
                <button>Electricity</button>
              </li>
              <li>
                <button
                  onClick={() => {
                    // setSelectedTransactionType();
                  }}
                >
                  {" "}
                  Flight
                </button>
              </li>
              <li>
                <button>Education</button>
              </li>
              <li>
                <button
                  onClick={() => {
                    // setSelectedTransactionType();
                  }}
                >
                  Purchases
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    // setSelectedTransactionType();
                  }}
                >
                  E-Pin
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    // setSelectedTransactionType();
                  }}
                >
                  {" "}
                  Betting
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    // setSelectedTransactionType();
                  }}
                >
                  {" "}
                  Subscription
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
      <div className="POS-category-div">
        {showPOSCategoryMenu && (
          <div className="POS-category-show-container">
            <ul className="POS-category-show-ul">
              <li>
                <button
                  onClick={() => {
                    handlePosAndTheCategoryTransaction("Card Withdrawal");
                    toggleButtonAllCategoryMenu();
                  }}
                >
                  {" "}
                  Card Withdrawal
                </button>
              </li>
              <li>
                <button>Card Payment</button>
              </li>
              <li>
                <button>POS Qcode</button>
              </li>
              <li>
                <button>POS Transfer</button>
              </li>
              <li>
                <button> LPay USSD</button>
              </li>
              <li>
                <button>Bank USSD</button>
              </li>

              <li>
                <button> Withdrawal Code</button>
              </li>
              <li>
                <button>Qcode Card Transfer</button>
              </li>
              <li>
                <button>LPay account Transfer</button>
              </li>
            </ul>
          </div>
        )}
      </div>
      {error && <p>{error}</p>}
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
      <Footer2 />
    </div>
  );
}

export default TransactionStatus;
