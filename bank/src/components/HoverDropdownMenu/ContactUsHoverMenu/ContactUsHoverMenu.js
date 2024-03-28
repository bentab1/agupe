import React from "react";
import "./ContactUsHoverMenu.css";
function ContactUsHoverMenu({ activeButton, handleClick }) {
  return (
    <div className="contact-us-hover-div">
      <button
        onMouseEnter={() => handleClick(8)}
        onClick={() => handleClick(8)}
        style={{
          backgroundColor: activeButton === 8 ? "white" : "transparent",
          cursor: "pointer",
          transition: "background-color 0.3s ease-in-out",
        }}
        className="contact-us-hover-button"
      >
        Contact Us
      </button>
      <div className="contact-us-hover-container">
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

export default ContactUsHoverMenu;
