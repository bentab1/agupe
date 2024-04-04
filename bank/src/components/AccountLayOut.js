import React, { useRef, useState } from "react";
import Select from "react-select";
import "./AccountLayOut.css";
import BusinessAccounts from "./BusinessAccounts";
import MasterPOS from "./MasterPos";
import SavingAccount from "./SavingAccount";
import SubPOS from "./SubPOs";

function AccountLayOut() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const selectRef = useRef(null);

  const options = [
    { value: 0, label: <SavingAccount /> },
    { value: 1, label: <SubPOS /> },
    { value: 2, label: "Master POS" },
    { value: 3, label: "Sub POS" },
  ];

  const handleSwipe = (e) => {
    const deltaX = e.touches[0].clientX - startX;
    if (deltaX > 50) {
      selectPrevOption();
    } else if (deltaX < -50) {
      selectNextOption();
    }
  };

  const selectPrevOption = () => {
    const newIndex = Math.max(currentSlide - 1, 0);
    setCurrentSlide(newIndex);
    selectRef.current.select.setValue(options[newIndex]);
  };

  const selectNextOption = () => {
    const newIndex = Math.min(currentSlide + 1, options.length - 1);
    setCurrentSlide(newIndex);
    selectRef.current.select.setValue(options[newIndex]);
  };

  let startX = 0;

  const handleTouchStart = (e) => {
    startX = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    handleSwipe(e);
  };

  return (
    <div className="main-container">
      <div className="select-container">
        <Select
          ref={selectRef}
          options={options}
          value={options[currentSlide]}
          onChange={(selectedOption) => setCurrentSlide(selectedOption.value)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        />
      </div>
      <div className="slider-container">
        <div
          className="slide"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          <SavingAccount />
        </div>
        <div
          className="slide"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          <BusinessAccounts />
        </div>
        <div
          className="slide"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          <MasterPOS />
        </div>
        <div
          className="slide"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          <SubPOS />
        </div>
        <div className="indicator">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="indicator-dot"
              style={{ backgroundColor: i === currentSlide ? "red" : "gray" }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AccountLayOut;
