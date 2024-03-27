import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import "./MobileSignUpButton.css";
function MobileSignUpButton() {
  const [selected, setSelected] = useState(false);

  function handleSelected() {
    setSelected(true);
    setTimeout(() => {
      setSelected(false);
    }, 2000);
  }

  return (
    <div
      className="mobile-signup-button-div"
      style={{
        backgroundColor: selected ? "#f5f8" : "",
        transition: "background-color 0.3s ease",
      }}
      onClick={handleSelected}
    >
      <NavLink
        to="/account/signup"
        activeClassName="active"
        className={"mobile-signup-button-navlink"}
      >
        <button
          className="mobile-signup-button"
          style={{
            color: selected ? "#f5f8" : "",
            transition: "background-color 0.3s ease",
          }}
        >
          SingUp
        </button>
      </NavLink>
    </div>
  );
}

export default MobileSignUpButton;
