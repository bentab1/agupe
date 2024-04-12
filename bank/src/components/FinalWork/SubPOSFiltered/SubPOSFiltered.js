import React, { useCallback, useEffect, useRef, useState } from "react";
import "./SubPOSFiltered.css";

const SubPOSFiltered = ({
  transactionHistory,
  groupTransactionsByMonth,
  setShowTransactions,
  setGroupedTransactions,
  groupedTransactions,
  showTransactions,
  showBalance,
  handleToggleBalance,
  options2,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(null);
  const sliderRef = useRef(null);
  const [error, setError] = useState("");
  const [selected, setSelected] = useState(0);

  const renderTransactionsForSelectedSlide = useCallback(() => {
    const selectedOption = options2[selected];
    if (!selectedOption) return null;
    const { value: accountNumber } = selectedOption;
    console.log(accountNumber);
    // Make sure accountType is defined within the scope
    return accountNumber;
  }, [options2, selected]);
  useEffect(() => {
    const accountNumber = renderTransactionsForSelectedSlide();
    if (accountNumber !== null) {
      const filteredTransactions = transactionHistory.filter(
        (transaction) => transaction.accountNumber === accountNumber
      );

      if (filteredTransactions.length === 0) {
        setError(`No transactions found for account type ${accountNumber}.`);
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

  const slideCount = options2.length;

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
            top: "300px",
            zIndex: "12",
          }}
        >
          {error && <p>{error}</p>}
          <div className="completed-transaction">
            {Object.keys(groupedTransactions).map((monthYear) => (
              <div key={monthYear}>
                <h3 style={{ color: "#fff" }}>{monthYear}</h3>{" "}
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
        className="slider-1container-1subPos"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={() => setStartIndex(null)}
        onClick={setShowTransactions(true)}
      >
        <div
          className="slider1-subPos1"
          ref={sliderRef}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {options2.map((option, index) => (
            <div
              className={`slide1-subPos1 ${
                selected === index ? "selected1-subPos1" : ""
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
        <button className="prev-subPos1 button1-subPos1" onClick={prevSlide}>
          &lt;
        </button>
        <button className="next-subPos1 button1-subPos1" onClick={nextSlide}>
          &gt;
        </button>
        <div className="indicators1-subPos1">
          {options2.map((option, index) => (
            <div
              key={option.index}
              className={`dot1-subPos1 ${
                index === currentIndex ? "active-subPos1" : ""
              } ${selected === index ? "selected1-subPos1" : ""}`}
              onClick={() => handleSlideClick(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SubPOSFiltered;
