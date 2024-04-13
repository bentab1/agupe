import React, { useCallback, useEffect, useRef, useState } from "react";
import "./SubPOSFiltered.css";

const SubPOSFiltered = ({
  options2,
  transactionHistory,
  groupTransactionsByMonth,
  setShowTransactions,
  setGroupedTransactions,
  groupedTransactions,
  showTransactions,
  showBalance,
  handleToggleBalance,
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
      console.log(filteredTransactions);
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
    <div
      style={{
        backgroundColor: "whitesmoke",
        height: "100%",
        position: "absolute",
        top: "0",
        button: "-50",
        left: "0",
        right: "0",
        zIndex: "20",
      }}
    >
      <div
        style={{
          backgroundColor: "wheat",
          height: "750px",
          width: "600px",
          display: "grid",
          marginLeft: "400px",
          marginTop: "30px",
          gap: "0",
          borderRadius: "25px",
        }}
      >
        <button
          style={{
            width: "45px",
            backgroundColor: "transparent",
            height: "30px",
            marginBottom: "30px",
            color: "black",
            fontSize: "20px",
            cursor: "pointer",
          }}
        >
          &larr;
        </button>
        <h2
          style={{
            marginLeft: "70px",
            marginTop: "10px",
            marginBottom: "30px",
            color: "royalblue",
          }}
        >
          YOUR SUB POS ACCOUNTS
        </h2>
        <div
          className="slider-container-subPos1"
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
            {options2.map((option, index) => (
              <div
                className={`slide-subPos ${
                  selected === index ? "selected1-subPos" : ""
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
          <button className="prev-subPos button-subPos1" onClick={prevSlide}>
            &lt;
          </button>
          <button className="next-subPos button-subPos1" onClick={nextSlide}>
            &gt;
          </button>
          <div className="indicators-subPos">
            {options2.map((option, index) => (
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

        {showTransactions && (
          <div
            style={{
              backgroundColor: "white",
              position: "relative",
              width: "400px",
              height: "300px",
              top: "0px",
              borderRadius: "25px",
              marginLeft: "90px",
              paddingLeft: "5px",
            }}
          >
            {error && <p>{error}</p>}
            <div
              className="completed-transaction"
              style={{
                paddingLeft: "10px",
                display: "flex",
                paddingTop: "10px",
                gap: "5px",
                width: "350px",
                height: "300px",

                backgroundColor: "transparent",
              }}
            >
              {Object.keys(groupedTransactions).map(
                (monthYear, index) =>
                  index === 0 && (
                    <div key={monthYear}>
                      <h3 style={{ color: "royalblue" }}>{monthYear}</h3>
                      {/* White text color */}
                      <div
                        style={{
                          listStyle: "none",
                          padding: 0,
                          width: "350px",
                          display: "grid",
                          gap: "5px",
                          maxHeight: "250px", // Set a max height for the container
                          overflowY: "auto", // Enable vertical scrolling
                        }}
                      >
                        {groupedTransactions[monthYear].map(
                          (transaction, index) => (
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
          </div>
        )}
      </div>
    </div>
  );
};
export default SubPOSFiltered;
