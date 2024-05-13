import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleIndexChange = (newIndex) => {
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
  };

  const handlePrev = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  const totalImages = images.length;
  const nextIndex = (currentIndex + 1) % totalImages;
  const prevIndex = (currentIndex - 1 + totalImages) % totalImages;

  return (
    <div className="my-carousel-container">
      <button
        className="my-prev-btn"
        onClick={() => handleIndexChange(prevIndex)}
      >
        <ArrowBackIosIcon />
      </button>
      <div className="image-container">
        <img
          className="my-carousel-image"
          src={images[currentIndex].img}
          alt={images[currentIndex].title}
        />
        <div className="image-text title">
          <h2>{images[currentIndex].title}</h2>
        </div>
        <div className="image-text subtitle">
          <p>{images[currentIndex].subtitle}</p>
        </div>
      </div>
      <button
        className="my-next-btn"
        onClick={() => handleIndexChange(nextIndex)}
      >
        <ArrowForwardIosIcon />
      </button>
    </div>
  );
}

export default Carousel;
