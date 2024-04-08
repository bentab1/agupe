import React, { useRef, useState } from "react";
import "./Slider.css";

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(null);
  const [selected, setSelected] = useState(null);
  const sliderRef = useRef(null);
  const slideCount = slides.length;

  const nextSlide = () => {
    if (currentIndex === slideCount - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex === 0) {
      setCurrentIndex(slideCount - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleTouchStart = (e) => {
    setStartIndex(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (startIndex === null) return;
    const currentIndex = e.touches[0].clientX;
    if (Math.abs(startIndex - currentIndex) > 50) {
      if (currentIndex < startIndex) {
        nextSlide();
      } else {
        prevSlide();
      }
      setStartIndex(null);
    }
  };

  const handleSlideClick = (index) => {
    setSelected(index);
    setCurrentIndex(index);
  };
  return (
    <div
      className="account-slider-container"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => setStartIndex(null)}
    >
      <div
        className="account-slider"
        ref={sliderRef}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            className={`account-slide ${
              selected === index ? "selected" : "unselected"
            }`}
            key={slide.index}
            onClick={() => handleSlideClick(index)}
          >
            {slide}
          </div>
        ))}
      </div>
      <button className="  account-prev account-button" onClick={prevSlide}>
        Prev
      </button>
      <button className="account-next  account-button" onClick={nextSlide}>
        Next
      </button>
      <div className="account-indicators">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`account-dot ${
              index === currentIndex ? "account-active" : ""
            } ${selected === index ? "account-selected" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
