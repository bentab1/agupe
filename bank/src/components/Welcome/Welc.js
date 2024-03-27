import { React, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./wel.css";
function Welc() {
  const [transforming, setTransforming] = useState(false);
  const [transforming2, setTransforming2] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [clockwise, setClockwise] = useState(true);
  const [selected, setSelected] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const lastWelcomeShownTime = localStorage.getItem("lastWelcomeShownTime");
    const currentTime = new Date().getTime();
    const timeDifference = currentTime - parseInt(lastWelcomeShownTime);

    if (!lastWelcomeShownTime || timeDifference >= 5 * 60 * 1000) {
      setShowWelcome(true);
      localStorage.setItem("lastWelcomeShownTime", currentTime.toString());
    }

    // Set a timer to hide the welcome message after 10 seconds
    const hideTimer = setTimeout(() => {
      setShowWelcome(false);
    }, 10000);

    // Clean up the timer
    return () => {
      clearTimeout(hideTimer);
    };
  }, []);
  //
  //
  //

  useEffect(() => {
    // Check if the user is on the home app page
    if (location.pathname === "/") {
      // Set up a timer to show "Welcome" every 10 minutes
      const timerId = setInterval(() => {
        setShowWelcome(true);
      }, 60 * 60 * 1000);

      // Clean up the timer when the component unmounts
      return () => {
        clearInterval(timerId);
      };
    } else {
      // If the user is not on the home app page, reset showWelcome to false
      setShowWelcome(false);
    }
  }, [location.pathname]);
  //
  //
  //
  useEffect(() => {
    let intervalId;
    // Start transforming
    const startTransform = () => {
      setTransforming(true);
      // Apply transformation every 50 milliseconds
      intervalId = setInterval(() => {
        setTransforming(true);
      }, 10);
    };

    // Stop transforming after 5 seconds
    const stopTransform = () => {
      setTimeout(() => {
        clearInterval(intervalId);
        setClockwise(!clockwise);
        setTransforming(false);
        window.location.href = "/";
      }, 5000); // 5000 milliseconds = 5 seconds
    };

    if (transforming) {
      startTransform();
      stopTransform();
    }

    // Cleanup function to clear interval
    return () => {
      clearInterval(intervalId);
    };
  }, [transforming, clockwise]);

  const handleClick = () => {
    setTransforming(true);
    // Start transforming when button is clicked
  };
  //
  //
  //
  useEffect(() => {
    let intervalId;
    // Start transforming
    const startTransform2 = () => {
      setTransforming2(true);
      // Apply transformation every 50 milliseconds
      intervalId = setInterval(() => {
        setTransforming2(true);
      }, 10);
    };

    // Stop transforming after 5 seconds
    const stopTransform2 = () => {
      setTimeout(() => {
        clearInterval(intervalId);
        setClockwise(!clockwise);
        setTransforming2(false);
        window.location.href = "/";
      }, 3000); // 5000 milliseconds = 5 seconds
    };

    if (transforming) {
      startTransform2();
      stopTransform2();
    }

    // Cleanup function to clear interval
    return () => {
      clearInterval(intervalId);
    };
  }, [transforming, clockwise]);

  const handleClick2 = () => {
    setTransforming(true);
    // Start transforming when button is clicked
  };

  //
  //

  function handleSelected() {
    setSelected(true);
    setTimeout(() => {
      setSelected(false);
    }, 2000);
  }

  return (
    showWelcome && (
      <div
        className="welcome-container"
        style={{
          width: transforming || transforming2 ? "80px" : "800px",
          height: transforming || transforming2 ? "80px" : "800px",
          transformOrigin:
            transforming || transforming2 ? "center center" : "center center",
          backgroundColor:
            transforming || transforming2 ? "aqua" : "rgb(215, 247, 236)",
          transform:
            transforming || transforming2
              ? clockwise
                ? "rotate(+360deg)"
                : "rotate(-360deg)"
              : "",
          overflowY: "scroll",
          transition: "all 0.6s ease",
        }}
      >
        <div
          onClick={() => setShowWelcome(false)}
          style={{ cursor: "pointer", marginTop: "140px" }}
        >
          <p style={{ fontSize: "20px" }}>X</p>
        </div>
        <div style={{ display: "grid" }}>
          <h1
            style={{
              display: "inline-block",
              fontSize: "40px",
              marginLeft: "30px",
              marginTop: "30px",
            }}
          >
            Welcome to Agupay!
          </h1>
          <em
            style={{ marginLeft: "80px", marginTop: "10px", fontSize: "25px" }}
          >
            The fastest digital banking
          </em>
          <em style={{ marginLeft: "120px", marginTop: "20px" }}>
            Have freedom of your money
          </em>
          {/* media500(h1 fontsizs=40px, p margin left = 80px) */}
          {/* media(768, p marginleft 90px ) */}
          <div
            className="button-container"
            style={{
              marginLeft: "160px",
              marginTop: "150px",
              marginBottom: "50px",
            }}
          >
            <div style={{ display: "flex" }}>
              <div
                className="continue-button-div"
                style={{
                  backgroundColor: selected ? "#f5f8" : "",
                  transition: "background-color 0.3s ease",
                }}
                onClick={handleSelected}
              >
                <NavLink
                  to=""
                  activeClassName="active  "
                  className={"continue-button-navlink"}
                >
                  <button
                    onClick={handleClick}
                    className="continue-button"
                    style={{
                      color: selected ? "#f5f8" : "",
                      transition: "background-color 0.3s ease",
                    }}
                  >
                    Continue
                  </button>
                </NavLink>
              </div>
              <span style={{ fontSize: "25px", marginTop: "10px" }}>
                💕🌹🎉
              </span>
            </div>
            {/*  */}
            {/*  */}
            <div
              className="get-our-app-button-div"
              style={{
                backgroundColor: selected ? "#f5f8" : "",
                transition: "background-color 0.3s ease",
              }}
              onClick={handleSelected}
            >
              <NavLink
                to=""
                activeClassName="active  "
                className={"get-our-app-button-navlink"}
              >
                <button
                  onClick={handleClick2}
                  className="get-our-app-button"
                  style={{
                    color: selected ? "#f5f8" : "",
                    transition: "background-color 0.3s ease",
                  }}
                >
                  Get Our App
                </button>
              </NavLink>
            </div>
          </div>
          <em
            style={{
              marginLeft: "130px",
              marginBottom: "30px",
              fontSize: "15px",
            }}
          >
            Thank You For Banking With Us
          </em>
          <em
            style={{
              marginLeft: "130px",
              marginBottom: "20px",
              fontSize: "11px",
            }}
          >
            LPay Digital Banking All Right Reserved
          </em>
        </div>
      </div>
    )
  );
}

export default Welc;

// useEffect(() => {
//   const hasWelcomeBeenShown = localStorage.getItem("hasWelcomeBeenShown");
//   if (!hasWelcomeBeenShown) {
//     setShowWelcome(true);
//     localStorage.setItem("hasWelcomeBeenShown", "true");
//   }
//   const hideTimer = setTimeout(() => {
//     setShowWelcome(false);
//   }, 10000); // Hide the screen after 10 seconds (10000 milliseconds)

//   return () => {
//     clearTimeout(hideTimer);
//   };
// }, []);
