import React from "react";
import appstore from "../Assets/appstore.png";
import callUs from "../Assets/callUs.png";
import facebook from "../Assets/facebook.png";
import instagram from "../Assets/instagram.png";
import playstore from "../Assets/playstore.png";
import twitter from "../Assets/twitter.png";
import "./notification.css";
function Notification() {
  return (
    <div
      style={{
        width: "1380px",
        height: "350px",
        backgroundColor: "white",
        marginTop: "0",
      }}
    >
      <div className="com_1" style={{ marginTop: "240px" }}>
        <div
          style={{ display: "grid", height: "68px", marginLeft: "100px" }}
          className="call_us"
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h className="call">Call us</h>
            <img src={callUs} alt="call us" style={{ marginLeft: "10px" }} />
          </div>
          <h className="number">+1-27024000/ 0915700025</h>
        </div>

        <div style={{ display: "grid", marginLeft: "280px", width: "180px" }}>
          <h className="socialize">socialize with us </h>

          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <img src={facebook} alt="facebook" className="social" />
            <img src={twitter} alt="twitter" className="social" />
            <img src={instagram} alt="instagram" className="social" />
          </div>
        </div>

        <div style={{ display: "grid", marginLeft: "280px" }}>
          <h className="mobile">Lpay Mobile,</h>
          <h className="mobile">Get our app</h>
          <div style={{ display: "flex" }}>
            <img
              src={appstore}
              alt="twitter"
              style={{ marginRight: "8px" }}
              className="ap"
            />
            <img
              src={playstore}
              alt="twitter"
              style={{ marginRight: "5px" }}
              className="ap"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notification;
