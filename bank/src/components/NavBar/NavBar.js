import { React } from "react";
import { NavLink } from "react-router-dom";
import LoginButton from "../Login/LoginButton";
import Menu from "../Menu/Menu";
import SignUpButton from "../SignUp/SignUpButton";
import "./navBar.css";

function Navbar({ activeButton, handleClick }) {
  return (
    <div className="navbar">
      <div className="mylogo-container">
        <button className="logo-decorator">
          <strong className="word1">L</strong>
          <strong className="word2">p</strong>
          <strong className="word2">a</strong>
          <strong className="word2">y</strong>
        </button>
      </div>
      <nav className=" nav-link">
        <ul className="ul-list">
          <li className="nav-tex">
            <NavLink to="/" activeClassName="active">
              <button
                onMouseEnter={() => handleClick(4)}
                onClick={() => handleClick(4)}
                style={{
                  backgroundColor: activeButton === 4 ? "white" : "transparent",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease-in-out",
                }}
                className="home-button"
              >
                Home
              </button>
            </NavLink>
          </li>
          <li className="nav-tex">
            <NavLink to="/business" activeClassName="active">
              <button
                onMouseEnter={() => handleClick(5)}
                onClick={() => handleClick(5)}
                style={{
                  backgroundColor: activeButton === 5 ? "white" : "transparent",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease-in-out",
                }}
                className="business-button"
              >
                Business
              </button>
            </NavLink>
          </li>
          <li className="nav-tex">
            <NavLink to="/agupepay" activeClassName="active">
              <button
                onMouseEnter={() => handleClick(6)}
                onClick={() => handleClick(6)}
                style={{
                  backgroundColor: activeButton === 6 ? "white" : "transparent",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease-in-out",
                  color: "red",
                }}
                className="pay-now-button"
              >
                Pay Now
              </button>
            </NavLink>
          </li>
          <li className="nav-tex">
            <NavLink to="/personal" activeClassName="active">
              <button
                onMouseEnter={() => handleClick(7)}
                onClick={() => handleClick(7)}
                style={{
                  backgroundColor: activeButton === 7 ? "white" : "transparent",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease-in-out",
                }}
                className="personal-button"
              >
                Personal
              </button>
            </NavLink>
          </li>
          <li className="nav-tex">
            <NavLink to="/contactus" activeClassName="active">
              <button
                onMouseEnter={() => handleClick(8)}
                onClick={() => handleClick(8)}
                style={{
                  backgroundColor: activeButton === 8 ? "white" : "transparent",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease-in-out",
                }}
                className="contact-us-button"
              >
                Contact Us
              </button>
            </NavLink>
          </li>
          <li className="nav-tex">
            {" "}
            <NavLink to="/banking" activeClassName="active">
              <button
                onMouseEnter={() => handleClick(9)}
                onClick={() => handleClick(9)}
                style={{
                  backgroundColor: activeButton === 9 ? "white" : "transparent",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease-in-out",
                }}
                className="banking-button"
              >
                Banking
              </button>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="nav-login">
        <span className="span-login">
          <LoginButton handleClick={handleClick} activeButton={activeButton} />
        </span>
        <SignUpButton handleClick={handleClick} activeButton={activeButton} />
      </div>
      <div className="menu">
        <Menu handleClick={handleClick} activeButton={activeButton} />
      </div>
    </div>
  );
}
export default Navbar;
