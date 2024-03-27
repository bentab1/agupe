import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import "./SignUpButton.css";

const SignUpButton = () => {
  const [selected, setSelected] = useState(false);

  function handleSelected() {
    setSelected(true);
    setTimeout(() => {
      setSelected(false);
    }, 2000);
  }
  return (
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
        <button className="signup-button"
        style={{
          color: selected ? "white" : "",
          transition: "background-color 0.3s ease",
        }}>SingUp</button>
      </NavLink>
    </div>
  );
};

export default SignUpButton;
