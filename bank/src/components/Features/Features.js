import React from "react";
import Open from "../Assets/Open.jpg";
import POS from "../Assets/POS.jpg";
import bankWithUs from "../Assets/bankWithUs.jpg";
import card from "../Assets/card.jpg";
import "./features.css";
function Features() {
  return (
    <div className="feature" style={{ marginTop: "20px" }}>
      <div className="features" style={{ display: "flex" }}>
        <div className="feat" style={{ display: "grid", with: "45%" }}>
          <div>
            <img
              className="open"
              src={Open}
              alt="Open account"
              style={{ with: "80px", height: "150px" }}
            />
          </div>
          <div style={{ display: "grid" }}>
            <p className="tittle" style={{ marginBottom: "10px" }}>
              Open an account
            </p>
            <p className="text">
              With just One click with your mobile phone, open an account and
              explore the world around with us
            </p>
            <button className="features-button-startNow-openAccount">
              Start now
            </button>
          </div>
        </div>
        <div className="feat" style={{ display: "grid", width: "45%" }}>
          <div>
            <img
              className="open_card"
              src={card}
              alt="Activate your card today"
              style={{ with: "100px", height: "150px" }}
            />
          </div>
          <div style={{ display: "grid" }}>
            <p className="tittle  tittle_card">
              Activate your contactless card today for free
            </p>
            <p className="text">
              Make your all your transactions seamless with our virtual and
              physical contactless card
            </p>
            <button className="features-button-startNow-getContacless-card">
              start now
            </button>
          </div>
        </div>
        <div className="feat" style={{ display: "grid", width: "45%" }}>
          <div>
            <img
              className="open_bankwithus"
              src={bankWithUs}
              alt="Bank with us and be happy"
              style={{ with: "100px", height: "160px" }}
            />
          </div>
          <div style={{ display: "grid" }}>
            <p className="tittle">Grab your physical POS</p>
            <p className="text">
              Receive and make contactless payment all over the world with our
              physical Agupepay POS
            </p>
            <button className="features-button-startNow-getYourPhysicalPos">
              Start now
            </button>
          </div>
        </div>
        <div
          className="feat"
          style={{ display: "grid", with: "50%", marginRight: "35px" }}
        >
          <div>
            <img
              className="open_pos"
              src={POS}
              alt="Agupe pos"
              style={{ with: "100px", height: "165px" }}
            />
          </div>
          <div style={{ display: "grid" }}>
            <p className="tittle">Grab your physical POS</p>
            <p className="text">
              Receive and make contactless payment all over the world with our
              physical Agupepay POS
            </p>
            <button className="features-button-startNow-contactlessPayment">
              Start now
            </button>
          </div>
        </div>
      </div>
      <div
        className="seeAll"
        style={{
          with: "100%",
          height: "38px",
          backgroundColor: "rgba(246, 216, 216, 0.92)",
          marginTop: "0",
        }}
      >
        <p className="seeAll">See all</p>
      </div>
    </div>
  );
}

export default Features;
