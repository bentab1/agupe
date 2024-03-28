import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import "./MobileLoginButton.css";
function MobileLoginButton({ toggleMenuHandler }) {
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
        backgroundColor: selected ? "white" : "",
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
          onClick={toggleMenuHandler}
          className="mobile-login-button"
          style={{
            color: selected ? "white" : "",
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
