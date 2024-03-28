import React from "react";
import "./BusinessHoverMenu.css";
function BusinessHoverMenu({ activeButton, handleClick }) {
  return (
    <div className="business-hover-div">
      <button
        onMouseEnter={() => {
          handleClick(5);
        }}
        onClick={() => handleClick(5)}
        style={{
          backgroundColor: activeButton === 5 ? "white" : "transparent",
          cursor: "pointer",
          transition: "background-color 0.3s ease-in-out",
        }}
        className="business-hover-button"
      >
        Business
      </button>
      <div className="business-hover-container">
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

export default BusinessHoverMenu;
