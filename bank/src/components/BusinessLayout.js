import React, { useEffect, useState, useRef } from "react";
import FetchTransactionHistory from "./FetchedTransactionHistory";
import "./BusinessLayout.css";

const Exampler = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [startIndex, setStartIndex] = useState(null);
  const sliderRef = useRef(null);
  const [showBalance, setShowBalance] = useState(false);
  const [transactionHistory, setTransactionHistory] = useState([]);
  //////
  ///////
  const CURRENCY_SYMBOL = "₦";
  ////
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

  // Filter transactions for each account type
  const businessTransactions = transactionHistory.filter(
    (transaction) =>
      transaction.customer_id === "uc12" && // Replace "your_customer_id" with the actual customer ID
      transaction.accountType === "Business"
  );
  const getBusinessOptions = (transactions) => {
    const uniqueBusinessMap = new Map();
    transactions.forEach((transaction) => {
      const { accountNumber, balance } = transaction;
      if (
        transaction.accountType === "Business" &&
        !uniqueBusinessMap.has(accountNumber)
      ) {
        uniqueBusinessMap.set(accountNumber, { balance });
      }
    });

    const options = [];
    uniqueBusinessMap.forEach((data, accountNumber) => {
      const { balance } = data;
      options.push({
        label: (
          <div style={{ width: "130px", height: "80px", marginLeft: "10px" }}>
            <div style={{ marginTop: "20px" }}>
              Business: NAIRA <br />
            </div>
            <div style={{ marginTop: "20px", backgroundColor: "transparent" }}>
              <span style={{ fontSize: "15px" }}>
                {" "}
                {showBalance && (
                  <p>
                    {" "}
                    {CURRENCY_SYMBOL}
                    {parseFloat(balance).toLocaleString("en")}
                  </p>
                )}
              </span>
            </div>
            <button style={{ borderRadius: "20px" }}>
              {" "}
              Account: Number {accountNumber}
            </button>
          </div>
        ),
        value: accountNumber,
      });
    });
    return options;
  };

  // Create options for each account type
  const businessOptions = getBusinessOptions(businessTransactions);
  const slideCount = businessOptions.length;

  const nextSlide = () => {
    if (currentIndex === slideCount - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex === 0) {
      setCurrentIndex(slideCount - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
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
      className="slider-container1"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => setStartIndex(null)}
    >
      <div
        className="slider1"
        ref={sliderRef}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        <input
          type="checkbox"
          checked={showBalance}
          onChange={handleToggleBalance}
        />{" "}
        <span style={{ fontSize: "10px" }}>Show Balance</span>
        {businessOptions.map((option, index) => (
          <ul
            className={`slide1 ${selected === index ? "selected1" : ""}`}
            onClick={() => handleSlideClick(index)}
            key={index}
          >
            <li key={option.value}>{option.label}</li>
          </ul>
        ))}
      </div>
      <button className="prev1 button" onClick={prevSlide}>
        Prev
      </button>
      <button className="next1 button" onClick={nextSlide}>
        Next
      </button>
      <div className="indicators1">
        {businessOptions.map((option, index) => (
          <div
            key={index}
            className={`dot1 ${index === currentIndex ? "active1" : ""} ${
              selected === index ? "selected1" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Exampler;
