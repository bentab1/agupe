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

export default PayNowHoverMenu;
