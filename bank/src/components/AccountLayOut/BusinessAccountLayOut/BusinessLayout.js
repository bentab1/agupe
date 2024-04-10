import React, { useEffect, useRef, useState } from "react";
import "./BusinessLayout.css";
import FetchTransactionHistory from "../../FetchedTransactionHistory";

const BusinessLayout = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(0); // Initialize selected with 0
  const [startIndex, setStartIndex] = useState(null);
  const sliderRef = useRef(null);
  const [showBalance, setShowBalance] = useState(false);
  const [transactionHistory, setTransactionHistory] = useState([]);
  const CURRENCY_SYMBOL = "₦";

  useEffect(() => {
    const fetchData = async () => {
      const transactionData = FetchTransactionHistory();
      setTransactionHistory(transactionData);
    };
    fetchData();
  }, []);

  const handleToggleBalance = () => {
    setShowBalance(!showBalance);
  };

  const businessTransactions = transactionHistory.filter(
    (transaction) =>
      transaction.customer_id === "uc12" &&
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
              <span style={{ fontSize: "15px", marginLeft: "10px" }}>
                Business: NAIRA
              </span>
            </div>
            <div style={{ marginTop: "20px", backgroundColor: "transparent" }}>
              <span style={{ fontSize: "15px" }}>
                {showBalance && (
                  <p>
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
                width: "30px",
                paddingLeft: "25px",
                marginTop: "10px",
                height: "29px",
                borderRadius: "20px",
              }}
            >
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

  const businessOptions = getBusinessOptions(businessTransactions);
  const slideCount = businessOptions.length;

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
      className="slider-container-business"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => setStartIndex(null)}
    >
      <div
        className="slider-business"
        ref={sliderRef}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {businessOptions.map((option, index) => (
          <ul
            className={`slide-business ${
              selected === index ? "selected-business" : ""
            }`}
            onClick={() => handleSlideClick(index)}
            key={index}
          >
            <li key={option.value}>
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
            </li>
          </ul>
        ))}
      </div>
      <button className="prev-business button-business" onClick={prevSlide}>
        Prev
      </button>
      <button className="next-business button-business" onClick={nextSlide}>
        Next
      </button>
      <div className="indicators-business">
        {businessOptions.map((option, index) => (
          <div
            key={index}
            className={`dot-business ${
              index === currentIndex ? "active-business" : ""
            } ${selected === index ? "selected-business" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default BusinessLayout;
