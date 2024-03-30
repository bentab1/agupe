import { React } from "react";
import Footer from "../Footer/Footer";
import Notification from "../Notification/Notification";

import "./agupePay.css";
function AgupePay() {
  return (
    <div
      style={{ backgroundColor: "rgb(250, 244, 244)" }}
      className="agupepay_headpage"
    >
      <div style={{ display: "" }}>
        <h1
          style={{
            paddingLeft: "50px",
            color: "purple",
            marginTop: "70px",
            marginLeft: "134px",
          }}
        >
          LPay WALLET OFFERS THE BEST CONTACTLESS <br />
          PAYMENT SOLUTION
        </h1>
      </div>

      <p
        style={{
          marginTop: "40px",
          marginLeft: "250px",
          paddingBottom: "100px",
          color: "black",
          fontFamily: "Roboto",
        }}
      >
        Worry no more about exposing your physical or virtual cards for
        payments. <br />
        With <strong>LPay</strong> wallet you are covered!! <br />
        Just signup, add your card and start making card payments without worry
        of exposing your card information.
        <br />
        <strong>LPay</strong> wallet hides your card information during payment.
      </p>

      <Notification />
      <Footer />
    </div>
  );
}

export default AgupePay;
