import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import GhanaFlag from "../Assets/GhanaFlag.jpg";
import NigeriaFlag from "../Assets/NigeriaFlag.jpg";
import CountryProps from "../CountryProps/CountryProps";
import "./SignUpContinueButton.css";

const countries = [
  { id: "nigeria", name: "Nigeria", flag: NigeriaFlag },
  {
    id: "south-african",
    name: "South African",
    flag: "url_to_south_african_flag_image",
  },
  { id: "ghana", name: "Ghana", flag: GhanaFlag },
  { id: "cameroon", name: "Cameroon", flag: "url_to_cameroon_flag_image" },
  { id: "zambia", name: "Zambia", flag: "url_to_zambia_flag_image" },
  { id: "kenya", name: "Kenya", flag: "url_to_kenya_flag_image" },
  { id: "zimbabwe", name: "Zimbabwe", flag: "url_to_zimbabwe_flag_image" },
];

const SignUpContinueButton = () => {
  const signupLinks = {
    accountSignup: "/account/signup/redirect",
    unSupportedCountry: "/unSupportedCountrySelected",
  };

  const { accountSignup, unSupportedCountry } = signupLinks;
  const [selectedCountry, setSelectedCountry] = useState(
    "No country selected!"
  );
  const [errorMessage, setErrorMessage] = useState("");
  const [signUp, setSignUp] = useState("");

  const handleCountrySelect = (name) => {
    setSelectedCountry(name);
    setErrorMessage("");
  };

  const handleClick = () => {
    if (!selectedCountry || selectedCountry === "No country selected!") {
      setErrorMessage("Please select a valid country.");
    } else if (selectedCountry === "Nigeria") {
      setSignUp(accountSignup);
    } else if (selectedCountry !== "Nigeria") {
      setSignUp(unSupportedCountry);
    }

    setTimeout(() => {
      setErrorMessage("");
    }, 80000);
  };

  return (
    <div
      style={{
        display: "grid",
        height: "auto",
        justifyContent: "center",
        width: "150px",
      }}
    >
      <select
        id="countrySelect"
        onChange={(e) => handleCountrySelect(e.target.value)}
        value={selectedCountry}
        style={{ height: "25px" }}
      >
        <option value="No country selected!">Select a valid country</option>
        {countries.map((country) => (
          <option key={country.id} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>

      {/*  */}
      {selectedCountry && (
        <div style={{ marginLeft: "2px" }}>
          <CountryProps
            name={selectedCountry}
            flag={
              countries.find((country) => country.name === selectedCountry)
                ?.flag
            }
            onSelect={handleCountrySelect}
            selected={true}
          />
        </div>
      )}

      {/*  */}
      <p className="errorMessage">{errorMessage}</p>
      {/*  */}
      <NavLink
        to={signUp}
        className="nav-continue-button"
        activeClassName="active"
        onClick={handleClick}
      >
        <button onClick={handleClick} className="button-continue">
          Continue
        </button>
      </NavLink>
    </div>
  );
};

export default SignUpContinueButton;
