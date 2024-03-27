import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import "./LoginButton.css";

const LoginButton = () => {
  const [selected, setSelected] = useState(false);

  function handleSelected() {
    setSelected(true);
    setTimeout(() => {
      setSelected(false);
    }, 2000);
  }

  return (
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
  );
};
export default LoginButton;
