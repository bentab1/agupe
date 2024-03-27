import { React } from "react";
import Footer from "../Footer/Footer";
import Notification from "../Notification/Notification";

import "./agupePay.css";
function AgupePay() {
  return (
    <div style={{ backgroundColor: "white" }} className="agupepay_headpage">
     

      <div style={{ display: "" }}>
        <h2
          style={{
            paddingLeft: "50px",
            color: "rgb(10, 10, 100)",
            marginTop: "70px",
            marginLeft: "134px",
          }}
        >
          Welcome to AgupePay
        </h2>
      </div>

      <div style={{ display: "flex" }}>
        <p style={{ marginTop: "20px", padding: "40px" }}>
          Create AgupePay account to start making and receiving seamless payment
          as a merchant or private Business owner across the globe with our
          Agupepay. Our virtual and physical point of sale (POS) makes your
          business easy. Do not miss any Business because of payment means.
          signup below for freedom of Business transaction.
        </p>
      </div>

      <div
        style={{ display: "grid", margin: "5px" }}
        className="personal"
      ></div>
      <Notification />
      <Footer />
    </div>
  );
}

export default AgupePay;
