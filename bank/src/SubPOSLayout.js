import React, { useEffect, useRef, useState } from "react";
import FetchTransactionHistory from "./FetchedTransactionHistory";
import "./SubPOSLayout.css";

const SubPOSLayout = ({ slides }) => {
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

  // Filter transactions for each account type
  const subPOSTransactions = transactionHistory.filter(
    (transaction) =>
      transaction.customer_id === "uc12" && // Replace "your_customer_id" with the actual customer ID
      transaction.accountType === "Sub_POS" &&
      transaction.business_id === "ubmc123"
  );

  const getSubPOSOptions = (transactions) => {
    const uniqueSubPOSMap = new Map();
    transactions.forEach((transaction) => {
      const { accountNumber, serialNumber, balance } = transaction;
      if (!uniqueSubPOSMap.has(accountNumber)) {
        uniqueSubPOSMap.set(accountNumber, { serialNumber, balance });
      }
    });

    const options = [];
    uniqueSubPOSMap.forEach((data, accountNumber) => {
      const { serialNumber, balance } = data;
      options.push({
        label: (
          <div style={{ width: "130px", height: "80px", marginLeft: "0px" }}>
            <p style={{ marginTop: "10px" }}>
              Sub-POS: NAIRA <br />
            </p>
            <p style={{ marginTop: "5px", backgroundColor: "transparent" }}>
              <span style={{ fontSize: "13px" }}>
                {" "}
                {showBalance && (
                  <p>
                    {" "}
                    {CURRENCY_SYMBOL}
                    {parseFloat(balance).toLocaleString("en")}
                  </p>
                )}
              </span>
            </p>
            <p
              style={{
                backgroundColor: showBalance ? "royalblue" : "transparent",
                fontSize: "11px",
                with: "30px",
                marginRight: "10px",
                borderRadius: "20px",
                paddingLeft: "25px",
                marginTop: "10px",
                height: "29px",
              }}
            >
              {" "}
              {showBalance ? "Account Number" : ""}{" "}
              {showBalance ? accountNumber : "xxxxxx>"}
            </p>
            <p style={{ fontSize: "11px", marginTop: "15px" }}>
              {" "}
              S/N: {showBalance ? serialNumber : ""}
            </p>
          </div>
        ),
        value: accountNumber,
      });
    });
    return options;
  };

  const subPOSOptions = getSubPOSOptions(subPOSTransactions);
  const slideCount = subPOSOptions.length;

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
      className="slider-container-subPos"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => setStartIndex(null)}
    >
      <div
        className="slider-subPos"
        ref={sliderRef}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {subPOSOptions.map((option, index) => (
          <div
            className={`slide-subPos ${
              selected === index ? "selected-subPos" : ""
            }`}
            onClick={() => handleSlideClick(index)}
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
        {subPOSOptions.map((option, index) => (
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
  );
};

export default SubPOSLayout;
