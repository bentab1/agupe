import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import MobileLoginButton from "../Login/MobileLoginButton";
import MobileSignUpButton from "../SignUp/MobileSignUpButton";
import "./menu.css";

const Menu = ({ activeButton, handleClick }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleMenuHandler = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className="menu">
      <button
        className="buttonStyle"
        onClick={toggleMenuHandler}
        style={{
          with: "30px",
          padding: "9px",
          marginright: "40px",
          height: "50px",
          backgroundColor: "transparent",
        }}
      >
        {toggleMenu ? (
          // If toggleMenu is true, show the FaTimes the closing icon
          <FaTimes
            style={{
              fontSize: "21px",
              fontFamily: "cursive",
              marginBottom: "4px",
              paddingTop: "0",
              color: "black",
            }}
          />
        ) : (
          // Otherwise, show the HiMenu (menu) icon
          <HiMenu
            style={{
              fontSize: "21px",
              fontFamily: "cursive",
              marginBottom: "4px",
              paddingTop: "0",
              color: "black",
            }}
          />
        )}
      </button>
      {toggleMenu ? (
        <div className="menu-signup-login-container">
          <div className="menu-container">
            <ul className="menu-ul-list">
              <li className="menu-tex">
                <NavLink
                  to="/"
                  activeClassName="active"
                  onClick={toggleMenuHandler}
                >
                  <button
                    onMouseEnter={() => handleClick(13)}
                    onClick={() => handleClick(13)}
                    style={{
                      backgroundColor:
                        activeButton === 13
                          ? "rgb(215, 247, 236)"
                          : "transparent",
                      color: activeButton === 13 ? "black" : "rgb(10, 10, 100)",
                      cursor: "pointer",
                      transition: "background-color 0.3s ease-in-out",
                    }}
                    className="menu-home-button"
                  >
                    Home
                  </button>
                </NavLink>
              </li>
              <li className="menu-tex">
                <NavLink
                  to="/personal"
                  activeClassName="active"
                  onClick={toggleMenuHandler}
                >
                  <button
                    onMouseEnter={() => handleClick(14)}
                    onClick={() => handleClick(14)}
                    style={{
                      backgroundColor:
                        activeButton === 14
                          ? "rgb(215, 247, 236)"
                          : "transparent",
                      color: activeButton === 14 ? "black" : "rgb(10, 10, 100)",
                      cursor: "pointer",
                      transition: "background-color 0.3s ease-in-out",
                    }}
                    className="menu-personal-button"
                  >
                    Personal
                  </button>
                </NavLink>
              </li>
              <li className="menu-tex">
                <NavLink
                  to="/business"
                  activeClassName="active"
                  onClick={toggleMenuHandler}
                >
                  <button
                    onMouseEnter={() => handleClick(15)}
                    onClick={() => handleClick(15)}
                    style={{
                      backgroundColor:
                        activeButton === 15
                          ? "rgb(215, 247, 236)"
                          : "transparent",
                      color: activeButton === 15 ? "black" : "rgb(10, 10, 100)",
                      cursor: "pointer",
                      transition: "background-color 0.3s ease-in-out",
                    }}
                    className="menu-business-button"
                  >
                    Business
                  </button>
                </NavLink>
              </li>
              <li className="menu-tex">
                <NavLink
                  to="/agupepay"
                  activeClassName="active"
                  onClick={toggleMenuHandler}
                >
                  <button
                    onMouseEnter={() => handleClick(16)}
                    onClick={() => handleClick(16)}
                    style={{
                      backgroundColor:
                        activeButton === 16
                          ? "rgb(215, 247, 236)"
                          : "transparent",
                      color: activeButton === 16 ? "black" : "rgb(10, 10, 100)",
                      cursor: "pointer",
                      transition: "background-color 0.3s ease-in-out",
                    }}
                    className="menu-pay-now-button"
                  >
                    Pay Now
                  </button>
                </NavLink>
              </li>

              <li className="menu-tex">
                {" "}
                <NavLink
                  to="/banking"
                  activeClassName="active"
                  onClick={toggleMenuHandler}
                >
                  <button
                    onMouseEnter={() => handleClick(17)}
                    onClick={() => handleClick(17)}
                    style={{
                      backgroundColor:
                        activeButton === 17
                          ? "rgb(215, 247, 236)"
                          : "transparent",
                      color: activeButton === 17 ? "black" : "rgb(10, 10, 100)",
                      cursor: "pointer",
                      transition: "background-color 0.3s ease-in-out",
                    }}
                    className="menu-banking-button"
                  >
                    Banking
                  </button>
                </NavLink>
              </li>
              <li className="menu-tex  ">
                <NavLink
                  to="/contactus"
                  activeClassName="active"
                  onClick={toggleMenuHandler}
                >
                  <button
                    onMouseEnter={() => handleClick(18)}
                    onClick={() => handleClick(18)}
                    style={{
                      backgroundColor:
                        activeButton === 18
                          ? "rgb(215, 247, 236)"
                          : "transparent",
                      color: activeButton === 18 ? "black" : "rgb(10, 10, 100)",
                      cursor: "pointer",
                      transition: "background-color 0.3s ease-in-out",
                    }}
                    className="menu-contact-us-button"
                  >
                    Contact Us
                  </button>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="menu-login-signup">
            <span className="span-login">
              <MobileLoginButton toggleMenuHandler={toggleMenuHandler} />
            </span>
            <span className="span-signup">
              <MobileSignUpButton toggleMenuHandler={toggleMenuHandler} />
            </span>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Menu;
