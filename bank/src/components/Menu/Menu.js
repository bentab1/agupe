import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import MobileLoginButton from "../Login/MobileLoginButton";
import MobileSignUpButton from "../SignUp/MobileSignUpButton";
import "./menu.css";

const Menu = () => {
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
            <div
              style={{ marginBottom: "50px", paddingBottom: "10px" }}
              className="close_menu"
              onClick={toggleMenuHandler}
            >
              <span style={{ cursor: "pointer", fontSize: "25px" }}>
                &larr;
              </span>
            </div>
            <ul className="menu-ul-list">
              <li className="menu-tex">
                <NavLink
                  to="/"
                  activeClassName="active"
                  onClick={toggleMenuHandler}
                >
                  <span>Home</span>
                </NavLink>
              </li>
              <li className="menu-tex">
                <NavLink
                  to="/personal"
                  activeClassName="active"
                  onClick={toggleMenuHandler}
                >
                  <span> Personal </span>
                </NavLink>
              </li>
              <li className="menu-tex">
                <NavLink
                  to="/business"
                  activeClassName="active"
                  onClick={toggleMenuHandler}
                >
                  <span>Business</span>
                </NavLink>
              </li>
              <li className="menu-tex">
                <NavLink
                  to="/agupepay"
                  activeClassName="active"
                  onClick={toggleMenuHandler}
                >
                  <span style={{ color: "rgba(231, 37, 37, 1)" }}>
                    {" "}
                    AgupePay
                  </span>
                </NavLink>
              </li>

              <li className="menu-tex">
                {" "}
                <NavLink
                  to="/banking"
                  activeClassName="active"
                  onClick={toggleMenuHandler}
                >
                  <span className="nav-text">Banking</span>
                </NavLink>
              </li>
              <li className="menu-tex  ">
                <NavLink
                  to="/contactus"
                  activeClassName="active"
                  onClick={toggleMenuHandler}
                >
                  <span>Contact Us</span>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="menu-login-signup">
            <span className="span-login">
              <MobileLoginButton onClick={toggleMenuHandler} />
            </span>
            <span className="span-signup">
              <MobileSignUpButton onClick={toggleMenuHandler} />
            </span>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Menu;
