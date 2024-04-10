import React from "react";
import MasterPOSLayout from "../../../../AllAccountLayout";
import BusinessLayout from "../../../../BusinessLayout";
import SubPOSLayout from "../../../../FinalWork/FilteredAllTransactionAccount";
import SavingsLayout from "../../../../SavingsLayout";
import "./Slide.css";
import Slider from "../Slider/Slider";

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
