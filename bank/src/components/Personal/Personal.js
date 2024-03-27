import { React } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";
import Notification from "../Notification/Notification";
import "./personal.css";
function Personal() {
  return (
    <div
      className="personal_headpage"
      style={{
        justifyContent: "space-evenly",
        backgroundColor: "rgb(250, 244, 244)",
      }}
    >
      <div className="content-container">
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

        <div style={{ marginLeft: "300px" }}>
          <NavLink
            to="/personal/signup"
            activeClassName="active"
            className={"get-started-link"}
          >
            <button className="get-started-button">Get Started</button>
          </NavLink>
        </div>
      </div>
      <Notification />
      <Footer />
    </div>
  );
}
export default Personal;
