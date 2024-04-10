import React from "react";
import SavingsLayout from "./SavingsLayout";
import "./Slide.css";
import Slider from "./Slider";

function Slide() {
  const slides = [
    <div className="slide-first">
      <SavingsLayout style={{ marginRight: "50px", position: "absolute" }} />
    </div>,
    <div>hello</div>,
    <div>When are you comin</div>,
    <div>GOOOO</div>,
  ];

  return (
    <div className="sliders" style={{ marginLeft: "100px" }}>
      <div
        style={{
          width: "400px",
          height: "280px",
          marginTop: "50px",
          paddingTop: "15px",
          backgroundColor: "white",
          borderRadius: "25px",
        }}
      >
        <h4 style={{ marginLeft: "120px" }}>Select An Account</h4>
        <Slider slides={slides} />
      </div>
    </div>
  );
}

export default Slide;
