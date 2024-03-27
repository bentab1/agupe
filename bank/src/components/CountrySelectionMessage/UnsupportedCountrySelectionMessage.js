import { React } from "react";
import "./UnsupportedCountrySelectionMessage.css";

function UnsupportedCountrySelectionMessage() {
  function handleExit() {
    window.location.href = "/";
  }

  function handleChangeCountry() {
    window.location.href = "/account/signup";
  }
  return (
    <div className="wrongCountrySelection-page">
      <div style={{ height: "1300px", backgroundColor: "white" }}>
        <div className="unsupported-country">
          <p>
            Ops, sorry , we have not started operation in the selected country.
          </p>
          <p> Change country or exit to home.</p>
          <div className="unsupport-country-button-change-exit">
            <button onClick={handleChangeCountry} className="change-country">
              Change Country
            </button>
            or{" "}
            <button onClick={handleExit} className="exit">
              Exit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UnsupportedCountrySelectionMessage;
