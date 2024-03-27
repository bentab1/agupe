import "@fortawesome/fontawesome-free/css/all.min.css";
import { React } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <nav className="nav-header">
        <ul className="ul-header">
          <li className="header-text">
            <NavLink to="/aboutUs" activeClassName="active">
              <span>About Us</span>
            </NavLink>
          </li>
          <li className="header-text">
            <NavLink to="/liveChat" activeClassName="active">
              <div style={{ display: "grid" }}>
                <span>Live Chat</span>

                <i
                  className="fas fa-comment"
                  style={{
                    marginLeft: "25px",
                    fontSize: "25px",
                  }}
                />
              </div>
            </NavLink>
          </li>
          <li className="header-text">
            <NavLink to="/help" activeClassName="active">
              <span>Help</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
