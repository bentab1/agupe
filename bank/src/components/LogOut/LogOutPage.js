// LogoutPage.js
import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import "./LogOut.css";

// import { useNavigate } from "react-router-dom";
const LogoutPage = () => {
  const [selected, setSelected] = useState(false);
  const [logOut, setLogOut] = useState(false);
  // const navigate = useNavigate();

  function handleLogOut() {
    setLogOut(!logOut);
    window.location.href = "/App";
  }
  // useEffect(() => {
  //   const redirectTimeout = setTimeout(() => {
  //     navigate("/");
  //   }, 20000); // 2 seconds delay, for example

  //   // Cleanup the timeout to prevent memory leaks
  //   return () => clearTimeout(redirectTimeout);
  // }, [navigate]);

  //
  //
  function handleSelected() {
    setSelected(true);
    setTimeout(() => {
      setSelected(false);
    }, 2000);
  }

  return (
    <div
      className="logout-button-div"
      style={{
        backgroundColor: selected ? "#f5f8" : "",
        transition: "background-color 0.3s ease",
      }}
      onClick={handleSelected}
    >
      <NavLink
        to=""
        activeClassName="active"
        className={"logout-button-navlink"}
      >
        <button
          className="logout-button"
          style={{
            color: selected ? "#f5f8" : "",
            transition: "background-color 0.3s ease",
          }}
          onClick={handleLogOut}
        >
          Log Out
        </button>
      </NavLink>
    </div>
  );
};

export default LogoutPage;

<div>
  <button>Log Out</button>
</div>;
