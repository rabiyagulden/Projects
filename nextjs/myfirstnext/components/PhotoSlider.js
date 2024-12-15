import React, { useState,useEffect } from 'react';

const PhotoSlider = ({ images,autoplayInterval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  useEffect(() => {
    const interval = setInterval(handleNext, autoplayInterval || 3000);

  }, []);

  return (
    <div className="slider">
      <button onClick={handlePrev}>&lt;</button>
      <img src={images[currentIndex]} alt="Slider Image" />
      <button onClick={handleNext}>&gt;</button>
    </div>
  );
};

export default PhotoSlider;