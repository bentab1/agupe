import React from "react";
import "./PayNowHoverMenu.css";
function PayNowHoverMenu({ handleClick, activeButton }) {
  return (
    <div className="pay-now-hover-div">
      <button
        onMouseEnter={() => {
          handleClick(6);
        }}
        onClick={() => handleClick(6)}
        style={{
          backgroundColor: activeButton === 6 ? "white" : "transparent",
          cursor: "pointer",
          transition: "background-color 0.3s ease-in-out",
          color: "red",
        }}
        className="pay-now-hover-button"
      >
        Pay Now
      </button>
      <div className="pay-now-hover-container">
        <div style={{ display: "grid" }}>
          <h2
            style={{
              color: "rgb(10, 10, 100)",
              marginTop: "70px",
              marginLeft: "100px",
            }}
          >
            LPay WALLET, YOUR CARD PAYMENT SOLUTION
          </h2>
        </div>

        <ul className="lpay-ul">
          <li>How to open LPay Wallet account</li>
          <li>How to add card to LPay Wallet</li>
          <li>How to make payment with LPay Wallet</li>
          <li>I want to Join LPay Payday</li>
          {/* <li>How to get LPay Gift Card</li>
          Lpay will be used by anybody that want to make a transaction , who intended to 
          use contactless payment but the marchant does not have the means. our customer can generate 
          a gift card which th
           */}
        </ul>
      </div>
    </div>
  );
}

export default PayNowHoverMenu;
