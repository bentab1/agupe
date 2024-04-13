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
    <div
      style={{
        backgroundColor: "transparent",
        height: "400px",
        width: "900px",
      }}
    >
      {showTransactions && (
        <div
          style={{
            backgroundColor: "white",
            position: "relative",
            width: "400px",
            height: "160px",
            top: "240px",
            borderRadius: "25px",
            marginLeft: "459px",
            paddingTop: "5px",
            paddingLeft: "5px",
          }}
        >
          {error && <p>{error}</p>}
          <div
            className="completed-transaction"
            style={{
              paddingLeft: "10px",
              paddingTop: "10px",
              display: "flex",
              gap: "5px",
              width: "350px",
              backgroundColor: "transparent",
            }}
          >
            {Object.keys(groupedTransactions).map(
              (monthYear, index) =>
                index === 0 && (
                  <div key={monthYear}>
                    <h3 style={{ color: "royalblue", marginLeft: "10px" }}>
                      {monthYear}
                    </h3>
                    {/* White text color */}
                    <div
                      style={{
                        listStyle: "none",
                        padding: 0,
                        display: "flex",
                        gap: "5px",
                      }}
                    >
                      {groupedTransactions[monthYear].map(
                        (transaction, index) =>
                          index < 2 && (
                            <div
                              key={transaction.id}
                              style={{
                                padding: "10px",
                                height: "65px",
                                backgroundColor: "whitesmoke",
                                borderRadius: "20px",
                                width: "150px",
                              }}
                            >
                              <p className="transaction-parag">
                                <strong>Date:</strong> {transaction.date}
                              </p>
                              <p className="transaction-parag">
                                {transaction.TransactionType}
                              </p>
                              <p className="transaction-parag">
                                <strong>Amount:</strong> {transaction.amount}
                              </p>
                            </div>
                          )
                      )}
                    </div>
                  </div>
                )
            )}
          </div>

          <button
            style={{
              width: "80px",
              marginTop: "8px",
              fontSize: "11px",
              height: "35px",
              marginLeft: "50px",
              borderRadius: "25px",
              backgroundColor: "white",
              color: "royalblue",
            }}
          >
            See All
          </button>
          <button
            className="text"
            style={{
              width: "170px",
              borderRadius: "25px",
              height: "35px",
              fontSize: "11px",
              color: "royalblue",
            }}
          >
            Filter Transactions
          </button>
        </div>
      )}

      <div
        style={{ top: "-100px", bottom: "0px" }}
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
