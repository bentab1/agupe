import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import "./LoginButton.css";

const LoginButton = ({ activeButton, handleClick }) => {
  const [selected, setSelected] = useState(false);

  function handleSelected() {
    setSelected(true);
    setTimeout(() => {
      setSelected(false);
    }, 2500);
  }

  return (
    <div
      onMouseEnter={() => handleClick(10)}
      onClick={() => handleClick(10)}
      style={{
        backgroundColor: activeButton === 10 ? "transparent" : "transparent",
        cursor: "pointer",
        transition: "background-color 0.3s ease-in-out",
      }}
    >
      <div
        className="login-button-div"
        style={{
          backgroundColor: selected ? "white" : "",
          transition: "background-color 0.3s ease",
        }}
        onClick={handleSelected}
      >
        <NavLink
          to="/account/login"
          activeClassName="active  "
          className={"login-button-navlink"}
        >
          <button
            className="login-button"
            style={{
              color: selected ? "white" : "",
              transition: "background-color 0.3s ease",
            }}
          >
            Login
          </button>
        </NavLink>
      </div>
    </div>
  );
};
export default LoginButton;
