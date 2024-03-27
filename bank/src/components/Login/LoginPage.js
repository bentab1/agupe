import React, { useState } from "react";
import Footer2 from "../Footer2/Footer2";
import "./LoginPage.css";
const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogedIn, setIsLogin] = useState(false);

  const handleLoginClick = (e) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) {
      alert("Please enter both username and password.");
      return; // Exit the function early if fields are empty
    }
    if (username === "bentab1" && password === "12345678") {
      setPassword(password);
      setUsername(username);
      setIsLogin(!isLogedIn);
      localStorage.setItem("username", username);
      window.location.href = "/personalAccount";
    } else if (username === "bentab2" && password === "12345678") {
      setPassword(password);
      setUsername(username);
      setIsLogin(!isLogedIn);
      localStorage.setItem("username", username);
      window.location.href = "/businessAccount";
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="second-main-container">
        <h3 style={{ color: "black", fontFamily: "Lato", marginLeft: "20px" }}>
          Enter your username and password to login bellow
        </h3>
        <div className="username-password-container">
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </label>

          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </label>

          <button onClick={handleLoginClick} className="login-button-button">
            Login
          </button>
        </div>
      </div>

      <Footer2 />
    </div>
  );
};

export default LoginPage;
