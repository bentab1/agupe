import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./welcome.css";

const Welcome = () => {
  const navigate = useNavigate();
  const [showWelcome, setShowWelcome] = useState(false);

  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };

  useEffect(() => {
    const hasWelcomeBeenShown = localStorage.getItem("hasWelcomeBeenShown");
    if (!hasWelcomeBeenShown) {
      setShowWelcome(true);
      localStorage.setItem("hasWelcomeBeenShown", "true");
    }
    const hideTimer = setTimeout(() => {
      setShowWelcome(false);
      // Add additional logic if needed when the screen is automatically hidden
    }, 30000); // Hide the screen after 30 seconds (30000 milliseconds)

    return () => {
      clearTimeout(hideTimer);
    };
  }, []);

  const handleContinue = () => {
    navigate("/app");
  };
  const handleLearnMore = () => {
    navigate("/learn-more");
  };

  return (
    showWelcome && (
      <div
        className="welcome-container"
        style={{ display: show ? "none" : "flex" }}
      >
        <div onClick={handleShow} style={{ cursor: "pointer" }}>
          <p>X</p>
        </div>
        <div style={{ display: "grid" }}>
          <h1>Welcome to Your App!</h1>
          <p>Learn more about our app or dive right in.</p>
          <div className="button-container">
            <button onClick={handleLearnMore}>Learn More</button>
            <button onClick={handleContinue}>Continue</button>
          </div>
        </div>
      </div>
    )
  );
};

export default Welcome;
