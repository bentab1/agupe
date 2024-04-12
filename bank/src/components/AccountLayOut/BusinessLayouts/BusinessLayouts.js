import React, { useEffect, useRef, useState } from "react";
import FetchTransactionHistory from "../../FetchedTransactionHistory";
import "./BusinessLayouts.css";

const BusinessLayouts = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(0);
  const [startIndex, setStartIndex] = useState(null);
  const sliderRef = useRef(null);
  const [showBalance, setShowBalance] = useState(false);
  const [transactionHistory, setTransactionHistory] = useState([]);
  const CURRENCY_SYMBOL = "₦";
  const authenticatedCustomerId = "uc12";

  useEffect(() => {
    const fetchData = async () => {
      const transactionData = FetchTransactionHistory();

      // Check if there are transactions for the authenticated customer's account numbers
      const authenticatedCustomerTransactions = transactionData.filter(
        (transaction) =>
          transaction.customer_id === authenticatedCustomerId ||
          (transaction.business_id === authenticatedCustomerId &&
            (transaction.accountType === "Savings" ||
              transaction.accountType === "Business" ||
              transaction.accountType === "Master_POS" ||
              transaction.accountType === "Sub_POS"))
      );
      setTransactionHistory(authenticatedCustomerTransactions);
    };

    fetchData();
  }, []);

  const handleToggleBalance = () => {
    setShowBalance(!showBalance);
  };

  const getOptions = (transactions, accountType) => {
    const uniqueMap = new Map();
    transactions.forEach((transaction) => {
      const { accountNumber, serialNumber, balance } = transaction;
      let updatedAccountType = accountType;

      if (!transaction.business_id) {
        updatedAccountType = "Savings";
      } else if (
        transaction.accountType === "Business" &&
        !transaction.serialNumber
      ) {
        updatedAccountType = "Business";
      } else if (
        transaction.accountType === "Master_POS" &&
        transaction.business_id
      ) {
        updatedAccountType = "Master_POS";
      } else if (
        transaction.accountType === "Master_POS" &&
        transaction.serialNumber &&
        transaction.serialNumber.startsWith("BM")
      ) {
        updatedAccountType = "Master_POS";
      } else if (
        transaction.accountType === "Sub_POS" &&
        transaction.business_id
      ) {
        updatedAccountType = "Sub_POS";
      } else if (
        transaction.accountType === "Sub_POS" &&
        transaction.serialNumber &&
        transaction.serialNumber.startsWith("BMS")
      ) {
        updatedAccountType = "Sub_POS";
      }

      if (!uniqueMap.has(accountNumber)) {
        uniqueMap.set(accountNumber, {
          serialNumber,
          balance,
          accountType: updatedAccountType,
        });
      }
    });

    const options = [];
    uniqueMap.forEach((data, accountNumber) => {
      const { serialNumber, balance } = data;
      options.push({
        label: (
          <div
            style={{
              width: "130px",
              height: "80px",
              marginLeft: "10px",
              backgroundColor: "green",
            }}
          >
            <div style={{ marginTop: "20px" }}>
              <p style={{ fontSize: "14px" }}> {accountType}: NAIRA</p>
            </div>
            <div style={{ marginTop: "10px", backgroundColor: "transparent" }}>
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

  const accountTypes = ["Business"];

  const options = accountTypes.flatMap((type) =>
    getOptions(
      transactionHistory.filter(
        (transaction) =>
          transaction.customer_id === "uc12" && transaction.accountType === type
      ),
      type
    )
  );

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
    setSelected(index);
    setCurrentIndex(index);
  };

  return (
    <div
      className="slider-container-masterPos"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => setStartIndex(null)}
    >
      <div
        className="slider-masterPos"
        ref={sliderRef}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {options.map((option, index) => (
          <div
            className={`slide-masterPos ${
              selected === index ? "selected-masterPos flip-in" : ""
            } ${selected === index ? "active" : ""}`}
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
      <button className="prev-masterPos button-masterPos" onClick={prevSlide}>
        Prev
      </button>
      <button className="next-masterPos button-masterPos" onClick={nextSlide}>
        Next
      </button>
      <div className="indicators-masterPos">
        {options.map((option, index) => (
          <div
            key={option.index}
            className={`dot-masterPos ${
              index === currentIndex ? "active-masterPos" : ""
            } ${selected === index ? "selected-masterPos" : ""}`}
            onClick={() => handleSlideClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default BusinessLayouts;
