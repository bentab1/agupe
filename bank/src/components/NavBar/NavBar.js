import { React } from "react";
import { NavLink } from "react-router-dom";
import LoginButton from "../Login/LoginButton";
import Menu from "../Menu/Menu";
import SignUpButton from "../SignUp/SignUpButton";
import "./navBar.css";

function Navbar() {
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
              <span>Home</span>
            </NavLink>
          </li>
          <li className="nav-tex">
            <NavLink to="/business" activeClassName="active">
              <span>Business</span>
            </NavLink>
          </li>
          <li className="nav-tex">
            <NavLink to="/agupepay" activeClassName="active">
              <span style={{ color: "rgba(231, 37, 37, 1)" }}>Pay Now</span>
            </NavLink>
          </li>
          <li className="nav-tex">
            <NavLink to="/personal" activeClassName="active">
              <span> Personal </span>
            </NavLink>
          </li>
          <li className="nav-tex">
            <NavLink to="/contactus" activeClassName="active">
              <span>Contact Us</span>
            </NavLink>
          </li>
          <li className="nav-tex">
            {" "}
            <NavLink to="/banking" activeClassName="active">
              <span className="nav-text">Banking</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="nav-login">
        <span className="span-login">
          <LoginButton />
        </span>
        <SignUpButton />
      </div>
      <div className="menu">
        <Menu />
      </div>
    </div>
  );
}
export default Navbar;
