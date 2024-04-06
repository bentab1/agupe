import React from "react";
import BusinessLayout from "./BusinessLayout";
import MasterPOSLayout from "./MasterPOSLayout";
import SavingsLayout from "./SavingsLayout";
import "./Slide.css";
import Slider from "./Slider";
import SubPOSLayout from "./SubPOSLayout";

function Slide() {
  const slides = [
    <div className="slide-first">
      <SavingsLayout />
    </div>,
    <div className="slide-second">
      <BusinessLayout />
    </div>,
    <div className="slide-third">
      <MasterPOSLayout />
    </div>,
    <div className="slide-fourth">
      <SubPOSLayout />
    </div>,
  ];

  return (
    <div className="sliders" style={{ marginLeft: "120px" }}>
      <div
        style={{
          width: "350px",
          height: "380px",
          marginTop: "50px",
          paddingTop: "15px",
          paddingLeft: "5px",
          backgroundColor: "white",
          borderRadius: "25px",
        }}
      >
        <h4 style={{ marginLeft: "100px" }}>Account Balance</h4>
        <Slider slides={slides} />
      </div>
    </div>
  );
}

export default Slide;
