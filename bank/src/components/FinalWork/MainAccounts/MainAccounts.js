import React, { useCallback, useEffect, useRef, useState } from "react";
import "./MainAccounts.css";

const MainAccounts = ({
  options,
  selected,
  transactionHistory,
  groupTransactionsByMonth,
  setShowTransactions,
  setGroupedTransactions,
  groupedTransactions,
  setSelected,
  showTransactions,
  showBalance,
  handleToggleBalance,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(null);
  const sliderRef = useRef(null);
  const [error, setError] = useState("");

  const renderTransactionsForSelectedSlide = useCallback(() => {
    const selectedOption = options[selected];
    if (!selectedOption) return null;
    const { value: accountType } = selectedOption;

    // Make sure accountType is defined within the scope
    return accountType;
  }, [options, selected]);
  useEffect(() => {
    const accountType = renderTransactionsForSelectedSlide();
    if (accountType !== null) {
      const filteredTransactions = transactionHistory.filter(
        (transaction) => transaction.accountType === accountType
      );

      if (filteredTransactions.length === 0) {
        setError(`No transactions found for account type ${accountType}.`);
        setShowTransactions(false);
        // Clear grouped transactions when there are no transactions
        setGroupedTransactions([]);
      } else {
        setError("");
        setShowTransactions(true);
        setGroupedTransactions(groupTransactionsByMonth(filteredTransactions));
      }
    }
  }, [
    renderTransactionsForSelectedSlide,
    transactionHistory,
    groupTransactionsByMonth,
    setShowTransactions,
    setGroupedTransactions,
    selected,
  ]);

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
            backgroundColor: "rgba(0, 0, 255, 0.9)",
            position: "absolute",
            width: "100%",
            height: "800px",
            top: "150px",
            zIndex: "12",
            marginLeft: "600px",
          }}
        >
          {error && <p>{error}</p>}
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
                        backgroundColor: "#f0f0f0",
                        marginBottom: "10px",
                        padding: "10px",
                        borderRadius: "5px",
                        width: "100%",
                      }}
                    >
                      <p>
                        <strong>Type:</strong> {transaction.TransactionType}
                      </p>
                      <p>
                        <strong>Date:</strong> {transaction.date}
                      </p>
                      <p>
                        <strong>Description:</strong> {transaction.description}
                      </p>
                      <p>
                        <strong>Amount:</strong> {transaction.amount}
                      </p>
                      <p>
                        <strong>Balance:</strong> {transaction.balance}
                      </p>
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
                  className="input-checkbox-showBalance"
                  type="checkbox"
                  checked={showBalance}
                  onChange={handleToggleBalance}
                />{" "}
                <span className="span-showBalance-showBalance">
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
      </div>
    </div>
  );
};
export default MainAccounts;
