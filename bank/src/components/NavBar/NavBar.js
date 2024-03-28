import { React } from "react";
import { NavLink } from "react-router-dom";
import LoginButton from "../Login/LoginButton";
import Menu from "../Menu/Menu";
import SignUpButton from "../SignUp/SignUpButton";
import BankingHoverMenu from "../HoverDropdownMenu/BankingHoverMenu/BankingHoverMenu";
import BusinessHoverMenu from "../HoverDropdownMenu/BusinessHoverMenu/BusinessHoverMenu";
import ContactUsHoverMenu from "../HoverDropdownMenu/ContactUsHoverMenu/ContactUsHoverMenu";
import PayNowHoverMenu from "../HoverDropdownMenu/PayNowHoverMenu/PayNowHoverMenu";
import PersonalHoverMenu from "../HoverDropdownMenu/PersonalHoverMenu/PersonalHoverMenu";
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
                onMouseEnter={() => {
                  handleClick(4);
                }}
                onClick={() => {
                  handleClick(4);
                }}
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
              <BusinessHoverMenu
                handleClick={handleClick}
                activeButton={activeButton}
              />
            </NavLink>
          </li>
          <li className="nav-tex">
            <NavLink to="/agupepay" activeClassName="active">
              <PayNowHoverMenu
                handleClick={handleClick}
                activeButton={activeButton}
              />
            </NavLink>
          </li>
          <li className="nav-tex">
            <NavLink to="/personal" activeClassName="active">
              <PersonalHoverMenu
                handleClick={handleClick}
                activeButton={activeButton}
              />
            </NavLink>
          </li>
          <li className="nav-tex">
            <NavLink to="/contactus" activeClassName="active">
              <ContactUsHoverMenu
                handleClick={handleClick}
                activeButton={activeButton}
              />
            </NavLink>
          </li>
          <li className="nav-tex">
            {" "}
            <NavLink to="/banking" activeClassName="active">
              <BankingHoverMenu
                handleClick={handleClick}
                activeButton={activeButton}
              />
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
