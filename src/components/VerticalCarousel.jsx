import React, { useState, useEffect } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import IMAGE1 from "../assets/image5.png";
import IMAGE2 from "../assets/image6.png";
import IMAGE3 from "../assets/image7.png";
import IMAGE4 from "../assets/image8.png";
import IMAGE5 from "../assets/image9.png";
import IMAGE6 from "../assets/soft1.jpg";
import IMAGE7 from "../assets/soft2.jpg";
import "./LogoSlider.css"; // Import the CSS file

const images = [IMAGE1, IMAGE2, IMAGE3, IMAGE4, IMAGE5, IMAGE6, IMAGE7];

const LogoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesPerSlide, setImagesPerSlide] = useState(4);
  const autoSlideInterval = 3000;

  useEffect(() => {
    const updateSettings = () => {
      const width = window.innerWidth;
      if (width < 640) setImagesPerSlide(1);
      else if (width < 768) setImagesPerSlide(2);
      else if (width < 1024) setImagesPerSlide(3);
      else setImagesPerSlide(4);
    };

    updateSettings();
    window.addEventListener("resize", updateSettings);
    return () => window.removeEventListener("resize", updateSettings);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex >= images.length - imagesPerSlide ? 0 : prevIndex + 1
      );
    }, autoSlideInterval);
    return () => clearInterval(interval);
  }, [imagesPerSlide]);

  return (
    <div className="slider-container">
      <h1 className="slider-title">
        TECHNOLOGY & SOFTWARE <br /> <span>WE LEVERAGE</span>
      </h1>
      <div className="slider-wrapper">
        <button className="slider-button left" onClick={() => setCurrentIndex(currentIndex - 1 < 0 ? images.length - imagesPerSlide : currentIndex - 1)}>
          <AiOutlineLeft />
        </button>
        <div
          className="slider"
          style={{
            transform: `translateX(-${currentIndex * (100 / imagesPerSlide)}%)`,
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="slide" style={{ width: `${100 / imagesPerSlide}%` }}>
              <img src={image} alt={`Logo ${index + 1}`} />
            </div>
          ))}
        </div>
        <button className="slider-button right" onClick={() => setCurrentIndex(currentIndex + 1 >= images.length - imagesPerSlide ? 0 : currentIndex + 1)}>
          <AiOutlineRight />
        </button>
      </div>
    </div>
  );
};

export default LogoSlider;
