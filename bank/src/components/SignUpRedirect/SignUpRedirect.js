import React from "react";
import Footer from "../Footer/Footer";
import SignUpContinueButton from "../SignUpContinueButton/SignUpContinueButton";
import "./SignUpRedirect.css";

const SignUpRedirect = (props) => {
  return (
    <div className="personsignupredirect" style={{ backgroundColor: "white" }}>
      <div className="" style={{ backgroundColor: "white" }}>
        <h3
          style={{
            marginLeft: "380px",
            marginTop: "40px",
            color: "rgb(10, 10, 100)",
          }}
        >
          {" "}
          Please, select your country of residence to continue{" "}
          <span style={{ color: "red" }}>SignUp</span>.
        </h3>
        <div style={{ marginLeft: "550px", marginTop: "40px" }}>
          <span style={{ marginLeft: "10px" }}>
            <SignUpContinueButton />
          </span>
        </div>
      </div>
      <div style={{ width: "100%", height: "600px" }}></div>
      <Footer />
    </div>
  );
};

export default SignUpRedirect;
