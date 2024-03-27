import { React } from "react";
import Footer from "../Footer/Footer";
import Notification from "../Notification/Notification";
import "./business.css";
function Business() {
  return (
    <div
      className="business_headpage"
      style={{ display: "grid", backgroundColor: "white" }}
    >

      <div style={{}}>
        <h2
          style={{
            paddingLeft: "50px",
            color: "rgb(10, 10, 100)",
            marginTop: "70px",
            marginLeft: "134px",
          }}
        >
          We make Business seamlessly easy with our payment services
        </h2>
      </div>

      <p style={{ marginTop: "20px", padding: "40px" }}>
        Welcome to Agupe Business banking .Create your Business account today to
        leverage the most efficient banking system. Make seamless payment with
        our Virtual and Physical contactless card, physical and Virtual
        contactless POS for your Business. Connect our AgupePay to your online
        store? signup for Business XXXXX
      </p>

      <div className="login_business"></div>

      <Notification />
      <Footer />
    </div>
  );
}

export default Business;
