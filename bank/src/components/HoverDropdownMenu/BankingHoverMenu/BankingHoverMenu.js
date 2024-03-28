import React from "react";
import "./BankingHoverMenu.css";
function BankingHoverMenu({ activeButton, handleClick }) {
  return (
    <div className="banking-hover-div">
      <button
        onMouseEnter={() => handleClick(9)}
        onClick={() => handleClick(9)}
        onm
        style={{
          backgroundColor: activeButton === 9 ? "white" : "transparent",
          cursor: "pointer",
          transition: "background-color 0.3s ease-in-out",
        }}
        className="banking-hover-button"
      >
        Banking
      </button>
      <div className="banking-hover-container">
        <div style={{ display: "grid" }}>
          <h1
            style={{
              color: "rgb(10, 10, 100)",
              marginTop: "70px",
              marginLeft: "100px",
            }}
          >
            CHANGE THE WAY YOU SPEND
            <br />
            YOU MONEY
          </h1>
        </div>

        <p
          style={{
            fontWeight: "initial",
            color: "black",
            marginLeft: "150px",
          }}
        >
          For those who wants to make the best use of their money,
          <br />
          there's <strong style={{ color: "royalblue" }}> LPay</strong> digital
          banking. Sign up for free.
        </p>
      </div>
    </div>
  );
}

export default BankingHoverMenu;
