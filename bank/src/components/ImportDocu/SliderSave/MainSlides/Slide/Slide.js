import React from "react";

import BusinessLayouts from "../../../../AccountLayOut/BusinessLayouts/BusinessLayouts";
import MasterPOSLayOuts from "../../../../AccountLayOut/MasterPOSLayOuts/MasterPOSLayOuts";
import SavingsLayOuts from "../../../../AccountLayOut/SavingsLayOuts/SavingsLayOuts";
import Slider from "../Slider/Slider";
import "./Slide.css";

function Slide() {
  const slides = [
    <div className="slide-first">
      <SavingsLayOuts />
    </div>,
    <div className="slide-second">
      <BusinessLayouts />
    </div>,
    <div className="slide-third">
      <MasterPOSLayOuts />
    </div>,
  ];

  return (
    <div className="sliders" style={{ marginLeft: "120px" }}>
      <div
        style={{
          marginTop: "40px",
          width: "230px",
          height: "280px",
          paddingTop: "15px",
          paddingRight: "5px",
          backgroundColor: "white",
          borderRadius: "25px",
        }}
      >
        <Slider slides={slides} />
      </div>
    </div>
  );
}

export default Slide;
