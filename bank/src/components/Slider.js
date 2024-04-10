import React, { useRef, useState } from "react";
import "./Slider.css";

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(null);
  const [selected, setSelected] = useState(0); // Initialize selected with 0
  const sliderRef = useRef(null);
  const slideCount = slides.length;

  const nextSlide = () => {
    const nextIndex = (currentIndex + 1) % slideCount;
    setCurrentIndex(nextIndex);
    setSelected(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = currentIndex === 0 ? slideCount - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setSelected(prevIndex);
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
            key={index}
            onClick={() => handleSlideClick(index)}
          >
            {slide}
          </div>
        ))}
      </div>
      <button className="account-prev account-button" onClick={prevSlide}>
        &lt; Prev
      </button>
      <button className="account-next account-button" onClick={nextSlide}>
        Next &gt;
      </button>
      <div className="account-indicators">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`account-dot ${
              index === currentIndex ? "account-active" : ""
            } ${selected === index ? "account-selected" : ""}`}
            onClick={() => handleSlideClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
