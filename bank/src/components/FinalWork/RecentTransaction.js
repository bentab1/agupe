import React, { useCallback, useEffect, useRef, useState } from "react";
import "./RecentTransaction.css";
const RecentTransaction = ({
  transactionHistory,
  options,
  selected,
  setSelected,
  setGroupedTransactions,
  groupTransactionsByMonth,
  groupedTransactions,
  showTransactions,
  setShowTransactions,
  handleToggleBalance,
  showBalance,
  setTransactionHistory,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(null);
  const sliderRef = useRef(null);
  const [error, setError] = useState("");
  const [showPOSTransactions, setShowPOSTransactions] = useState(false);
  const CURRENCY_SYMBOL = "₦";
  const authenticatedCustomerId = "uc12";
  const renderTransactionsForSelectedSlide = useCallback(() => {
    const selectedOption = options[selected];
    if (!selectedOption) return null;
    const { value: accountType } = selectedOption;
    console.log("Selected Option:", selectedOption);
    console.log("Account Number:", accountType);

    // Make sure accountNumber is defined within the scope
    return accountType;
  }, [options, selected]);
  ///////

  useEffect(() => {
    const fetchData = async () => {
      // const transactionData = fetchTransactionHistory();

      // Check if there are transactions for the authenticated customer's account numbers
      const authenticatedCustomerTransactions = transactionHistory.filter(
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

  ////////
  //
  useEffect(() => {
    const accountType = renderTransactionsForSelectedSlide();

    // Filter transactionHistory with the selected account number
    const filteredTransactions = transactionHistory.filter(
      (transaction) => transaction.accountNumber === accountType
    );

    // Sort the transactions by date in descending order
    const sortedTransactions = filteredTransactions.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );

    // Select the desired number of recent transactions (e.g., 5)
    const recentTransactions = sortedTransactions.slice(0, 5);

    // Group the recent transactions by month
    const groupedTransactions = groupTransactionsByMonth(recentTransactions);

    if (recentTransactions.length === 0) {
      setError("No recent transactions found for the selected account number.");
    } else {
      setError(""); // Reset error message if transactions are found
    }

    setGroupedTransactions(groupedTransactions);
    setShowTransactions(true);
  }, [transactionHistory, renderTransactionsForSelectedSlide]);

  const slideCount = options.length;

  const nextSlide = () => {
    const nextIndex = (currentIndex + 1) % slideCount;
    setCurrentIndex(nextIndex);
    setSelected(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = currentIndex === 0 ? slideCount - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setSelected(prevIndex);
  };

  const handleTouchStart = (e) => {
    setStartIndex(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (startIndex === null) return;
    const currentIndex = e.touches[0].clientX;
    if (Math.abs(startIndex - currentIndex) > 50) {
      if (currentIndex < startIndex) {
        nextSlide();
      } else {
        prevSlide();
      }
      setStartIndex(null);
    }
  };

  const handleSlideClick = (index) => {
    setCurrentIndex(index);
    setSelected(index);
  };

  return (
    <div>
      {showTransactions && (
        <div
          style={{
            backgroundColor: "rgba(0, 0, 255, 0.9)", // Blue color with some transparency
            position: "absolute",
            width: "100%",
            height: "800px",
            top: "130px",
            zIndex: "12",

            // Adjust top position as needed
            // left: "50%", // Center horizontally
            // transform: "translateX(-50%)", // Center horizontally
            // padding: "20px", // Add padding for spacing
            // borderRadius: "10px", // Add rounded corners
            // boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", // Add shadow for depth
          }}
        >
          <div className="completed-transaction">
            {Object.keys(groupedTransactions).map((monthYear) => (
              <div key={monthYear}>
                <h3 style={{ color: "#fff" }}>{monthYear}</h3>{" "}
                {/* White text color */}
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {groupedTransactions[monthYear].map((transaction) => (
                    <li
                      key={transaction.id}
                      style={{
                        backgroundColor: "#f0f0f0", // Light gray background
                        marginBottom: "10px", // Apply 10px margin bottom
                        padding: "10px", // Apply 10px padding
                        borderRadius: "5px",
                        width: "100%", // Full width
                      }}
                    >
                      <p>
                        <strong>Type:</strong> {transaction.TransactionType}
                      </p>{" "}
                      {/* Bold text */}
                      <p>
                        <strong>Date:</strong> {transaction.date}
                      </p>{" "}
                      {/* Bold text */}
                      <p>
                        <strong>Description:</strong> {transaction.description}
                      </p>{" "}
                      {/* Bold text */}
                      <p>
                        <strong>Amount:</strong> {transaction.amount}
                      </p>{" "}
                      {/* Bold text */}
                      <p>
                        <strong>Balance:</strong> {transaction.balance}
                      </p>{" "}
                      {/* Bold text */}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
      <div
        style={{ top: "0px", bottom: "0px" }}
        className="slider-container-subPos"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={() => setStartIndex(null)}
        onClick={setShowTransactions(true)}
      >
        <div
          className="slider-subPos"
          ref={sliderRef}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {options.map((option, index) => (
            <div
              className={`slide-subPos ${
                selected === index ? "selected-subPos" : ""
              }`}
              onClick={() => {
                renderTransactionsForSelectedSlide();
                handleSlideClick(index);
              }}
              key={option.index}
            >
              <div
                key={option.value}
                style={{
                  height: "100%",
                  with: "100%",
                  position: "absolute",
                  cursor: "pointer",
                  marginLeft: "20px",
                }}
                onClick={() => console.log(option.value)}
              >
                <input
                  style={{ marginTop: "9px", marginLeft: "15px" }}
                  type="checkbox"
                  checked={showBalance}
                  onChange={handleToggleBalance}
                />{" "}
                <span style={{ fontSize: "12px" }}>
                  {showBalance ? "Hide Balance" : "Show Balance"}
                </span>
                {option.label}
              </div>
            </div>
          ))}
        </div>
        <button className="prev-subPos button-subPos" onClick={prevSlide}>
          &lt;
        </button>
        <button className="next-subPos button-subPos" onClick={nextSlide}>
          &gt;
        </button>
        <div className="indicators-subPos">
          {options.map((option, index) => (
            <div
              key={option.index}
              className={`dot-subPos ${
                index === currentIndex ? "active-subPos" : ""
              } ${selected === index ? "selected-subPos" : ""}`}
              onClick={() => handleSlideClick(index)}
            ></div>
          ))}
        </div>

        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default RecentTransaction;
