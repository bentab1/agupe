import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import "./SignUpButton.css";

const SignUpButton = ({ activeButton, handleClick }) => {
  const [selected, setSelected] = useState(false);

  function handleSelected() {
    setSelected(true);
    setTimeout(() => {
      setSelected(false);
    }, 2500);
  }
  return (
    <div
      onMouseEnter={() => handleClick(11)}
      onClick={() => handleClick(11)}
      style={{
        backgroundColor: activeButton === 11 ? "transparent" : "transparent",
        cursor: "pointer",
        transition: "background-color 0.3s ease-in-out",
      }}
    >
      <div
        className="signup-button-div"
        style={{
          backgroundColor: selected ? "white" : "",
          transition: "background-color 0.3s ease",
        }}
        onClick={handleSelected}
      >
        <NavLink
          to="/account/signup"
          activeClassName="active"
          className={"signup-button-navlink"}
        >
          <button
            className="signup-button"
            style={{
              color: selected ? "white" : "",
              transition: "background-color 0.3s ease",
            }}
          >
            SingUp
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default SignUpButton;
