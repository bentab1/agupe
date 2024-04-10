import React, { useEffect, useRef, useState } from "react";
import FetchTransactionHistory from "../../FetchedTransactionHistory";
import "./SavingsLayout.css";

const SavingsLayout = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(0); // Initialize selected with 0
  const [startIndex, setStartIndex] = useState(null);
  const sliderRef = useRef(null);
  const [showBalance, setShowBalance] = useState(false);
  const [transactionHistory, setTransactionHistory] = useState([]);
  const CURRENCY_SYMBOL = "₦";

  useEffect(() => {
    // Fetch transaction history when the component mounts
    const fetchData = async () => {
      const transactionData = FetchTransactionHistory();
      setTransactionHistory(transactionData);
    };
    fetchData();
  }, []);

  const handleToggleBalance = () => {
    setShowBalance(!showBalance);
  };

  const savingsTransactions = transactionHistory.filter(
    (transaction) =>
      transaction.customer_id === "uc12" && // Replace "your_customer_id" with the actual customer ID
      transaction.accountType === "Savings"
  );

  const getSavingsOptions = (transactions) => {
    const uniqueSavingsMap = new Map();
    transactions.forEach((transaction) => {
      const { accountNumber, balance } = transaction;
      if (
        transaction.accountType === "Savings" &&
        !uniqueSavingsMap.has(accountNumber)
      ) {
        uniqueSavingsMap.set(accountNumber, { balance });
      }
    });

    const options = [];
    uniqueSavingsMap.forEach((data, accountNumber) => {
      const { balance } = data;
      options.push({
        label: (
          <div
            style={{
              width: "130px",
              height: "100px",
              marginLeft: "10px",
            }}
          >
            <div style={{ marginTop: "20px" }}>
              Savings: NAIRA <br />
            </div>
            <div style={{ marginTop: "20px", backgroundColor: "transparent" }}>
              <span style={{ fontSize: "15px" }}>
                {" "}
                {showBalance && (
                  <p style={{ marginTop: "20px" }}>
                    {" "}
                    {CURRENCY_SYMBOL}
                    {parseFloat(balance).toLocaleString("en")}
                  </p>
                )}
              </span>
            </div>
            <p
              style={{
                backgroundColor: showBalance ? "royalblue" : "transparent",
                fontSize: "11px",
                with: "30px",
                paddingLeft: "25px",
                marginTop: "10px",
                height: "29px",
                borderRadius: "20px",
              }}
            >
              {" "}
              {showBalance ? "Account Number" : ""}{" "}
              {showBalance ? accountNumber : "xxxxxx>"}
            </p>
          </div>
        ),
        value: accountNumber,
      });
    });
    return options;
  };

  const savingsOptions = getSavingsOptions(savingsTransactions);
  const slideCount = savingsOptions.length;

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
    setSelected(index);
    setCurrentIndex(index);
  };

  return (
    <div
      className="slider-container-saving"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => setStartIndex(null)}
    >
      <div
        className="slider-saving"
        ref={sliderRef}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {savingsOptions.map((option, index) => (
          <div
            className={`slide-saving ${
              selected === index ? "selected-saving" : ""
            }`}
            onClick={() => handleSlideClick(index)}
            key={option.index}
          >
            <div key={option.value}>
              <input
                style={{
                  marginTop: "9px",
                  cursor: "pointer",
                  marginLeft: "15px",
                }}
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
      <button className="prev-saving button-saving" onClick={prevSlide}>
        Prev
      </button>
      <button className="next-saving button-saving" onClick={nextSlide}>
        Next
      </button>
      <div className="indicators-saving">
        {savingsOptions.map((option, index) => (
          <div
            key={option.index}
            className={`dot-saving ${
              index === currentIndex ? "active-saving" : ""
            } ${selected === index ? "selected-saving" : ""}`}
            onClick={() => handleSlideClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SavingsLayout;
