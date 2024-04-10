import React, { useEffect, useRef, useState } from "react";
import FetchTransactionHistory from "./FetchedTransactionHistory";
import "./SubPOSLayout.css";

function groupTransactionsByMonth(transactions) {
  const groupedTransactions = {};
  transactions.forEach((transaction) => {
    const date = new Date(transaction.date);
    const monthYear = `${date.toLocaleString("en-US", {
      month: "long",
    })} ${date.getFullYear()}`;
    if (!groupedTransactions[monthYear]) {
      groupedTransactions[monthYear] = [];
    }
    groupedTransactions[monthYear].push(transaction);
  });
  return groupedTransactions;
}

const SuposSub2 = ({}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(0);
  const [startIndex, setStartIndex] = useState(null);
  const sliderRef = useRef(null);
  const [showPOSTransactions, setShowPOSTransactions] = useState(false);
  const [showBalance, setShowBalance] = useState(false);
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [groupedTransactions, setGroupedTransactions] = useState({});
  const CURRENCY_SYMBOL = "₦";
  const authenticatedCustomerId = "uc12";

  useEffect(() => {
    const grouped = groupTransactionsByMonth(transactionHistory);
    setGroupedTransactions(grouped);
  }, [transactionHistory]);

  const handleToggleBalance = () => {
    setShowBalance(!showBalance);
  };

  const renderTransactionsForSelectedSlide = () => {
    const selectedOption = subPOSOptions[selected];
    if (!selectedOption) return null;
    const { value: accountNumber } = selectedOption;
    console.log("Selected Option:", selectedOption);
    console.log("Account Number:", accountNumber);

    // Make sure accountNumber is defined within the scope
    return accountNumber;
  };

  useEffect(() => {
    const fetchData = async () => {
      const transactionData = FetchTransactionHistory();
      const authenticatedCustomerTransactions = transactionData.filter(
        (transaction) =>
          transaction.customer_id === authenticatedCustomerId &&
          (transaction.accountType === "Savings" ||
            transaction.accountType === "Business" ||
            transaction.accountType === "Master_POS" ||
            transaction.accountType === "Sub_POS") &&
          transaction.accountNumber === renderTransactionsForSelectedSlide() // Filter by the selected account number
      );
      if (authenticatedCustomerTransactions.length === 0) {
        console.log("No transactions found for the authenticated customer.");
      } else {
        setShowPOSTransactions(true);
        setTransactionHistory(authenticatedCustomerTransactions);
      }
    };
    fetchData();
  }, [authenticatedCustomerId, renderTransactionsForSelectedSlide]);

  const subPOSTransactions = transactionHistory.filter(
    (transaction) =>
      transaction.customer_id === authenticatedCustomerId &&
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
                {showBalance && (
                  <p>
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
              {showBalance ? "Account Number" : ""}
              {showBalance ? accountNumber : "xxxxxx>"}
            </p>
            <p style={{ fontSize: "11px", marginTop: "15px" }}>
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
            onClick={() => {
              renderTransactionsForSelectedSlide();
              handleSlideClick(index);
            }}
            key={index} // Changed from option.index to index
          >
            <div
              style={{
                height: "100%",
                width: "100%", // Changed 'with' to 'width'
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
            key={index} // Changed from option.index to index
            className={`dot-subPos ${
              index === currentIndex ? "active-subPos" : ""
            } ${selected === index ? "selected-subPos" : ""}`}
            onClick={() => handleSlideClick(index)}
          ></div>
        ))}
      </div>
      {showPOSTransactions && (
        <div className="completed-transaction">
          {Object.keys(groupedTransactions).map((monthYear) => (
            <div key={monthYear}>
              <h3>{monthYear}</h3>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {groupedTransactions[monthYear].map((transaction) => (
                  <li
                    key={transaction.id}
                    style={{
                      backgroundColor: "wheat",
                      marginBottom: "10px", // Apply 10px margin bottom
                      padding: "10px", // Apply 10px padding
                      borderRadius: "5px",
                      width: "250px", // Optional: Add rounded corners
                    }}
                  >
                    <p>Type: {transaction.TransactionType}</p>
                    <p>Date: {transaction.date}</p>
                    <p>Description: {transaction.description}</p>
                    <p>Amount: {transaction.amount}</p>
                    <p>Balance: {transaction.balance}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SuposSub2;
