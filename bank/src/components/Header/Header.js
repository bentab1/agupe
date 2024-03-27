import "@fortawesome/fontawesome-free/css/all.min.css";
import { React } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

function Header({ activeButton, handleClick }) {
  return (
    <div className="header">
      <nav className="nav-header">
        <ul className="ul-header">
          <li className="header-text">
            <NavLink to="/aboutUs" activeClassName="active">
              <button
                onMouseEnter={() => handleClick(1)}
                onClick={() => handleClick(1)}
                style={{
                  backgroundColor: activeButton === 1 ? "white" : "transparent",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease-in-out",
                }}
                className="about-us-button"
              >
                About Us
              </button>
            </NavLink>
          </li>
          <li className="header-text">
            <NavLink to="/liveChat" activeClassName="active">
              <button
                onMouseEnter={() => handleClick(2)}
                onClick={() => handleClick(2)}
                style={{
                  backgroundColor: activeButton === 2 ? "white" : "transparent",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease-in-out",
                }}
                className="live-chat-button"
              >
                Live Chat
                <i
                  className="fas fa-comment"
                  style={{
                    fontSize: "25px",
                    color: "blueviolet",
                    marginLeft: "4px",
                  }}
                />
              </button>
            </NavLink>
          </li>
          <li className="header-text">
            <NavLink to="/help" activeClassName="active">
              <button
                onMouseEnter={() => handleClick(3)}
                onClick={() => handleClick(3)}
                style={{
                  backgroundColor: activeButton === 3 ? "white" : "transparent",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease-in-out",
                }}
                className="help-button"
              >
                Help
              </button>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
