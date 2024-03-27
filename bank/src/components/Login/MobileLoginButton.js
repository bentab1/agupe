import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import "./MobileLoginButton.css";
function MobileLoginButton() {
  const [selected, setSelected] = useState(false);

  function handleSelected() {
    setSelected(true);
    setTimeout(() => {
      setSelected(false);
    }, 2000);
  }
  return (
    <div
      className="mobile-login-button-div"
      style={{
        backgroundColor: selected ? "#f5f8" : "",
        transition: "background-color 0.3s ease",
      }}
      onClick={handleSelected}
    >
      <NavLink
        to="/account/login"
        activeClassName="active"
        className={"mobile-login-button-navlink"}
      >
        <button
          className="mobile-login-button"
          style={{
            color: selected ? "#f5f8" : "",
            transition: "background-color 0.3s ease",
          }}
        >
          Login
        </button>
      </NavLink>
    </div>
  );
}

export default MobileLoginButton;
