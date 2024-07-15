import React, { useState, useEffect } from "react";
import useMediaQueries from "media-queries-in-react";
import SlideIndicator from "./SlideIndicator.jsx";

const proportion = 1120 / 1920;

const images = [
  "../public/slider_images/home_page_slide1.png",
  "../public/slider_images/home_page_slide2.jpg",
  "../public/slider_images/home_page_slide3.jpg",
  "../public/slider_images/home_page_slide4.jpg",
];

export default function Slider() {
  const lastIndex = images.length - 1;
  const [currImg, setCurrImg] = useState(0);
  const leftClick = function () {
    if (currImg > 0) setCurrImg((currImg) => currImg - 1);
    else setCurrImg(lastIndex);
  };
  const rightClick = function () {
    if (currImg < lastIndex) setCurrImg((currImg) => currImg + 1);
    else setCurrImg(0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (currImg < lastIndex) setCurrImg((currImg) => currImg + 1);
      else setCurrImg(0);
    }, 3000);
    return () => clearInterval(interval);
  }, [currImg]);

  const [size, setSize] = useState({
    width: proportion * window.innerWidth,
    height: 560*window.innerHeight/1080,
  });

  useEffect(() => {
    const resize = () => {
      setSize({
        width: proportion * window.innerWidth,
        height: 560*window.innerHeight/1080,
      });
    };
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  const imageList = images.map((image) => (
    <div
      className="slide_carousel-imgs-item"
      style={{
        backgroundImage: `url(${image})`,
        width: `${size.width}px`,
        backgroundSize: "cover",
      }}
    />
  ));

  return (
    <div
      className="slider"
      style={{ width: `${size.width}px`, height: `${size.height}px` }}
    >
      <div className="slide_filter-left" style={{ height: `${size.height}px` }}></div>
      <div className="slide_filter-right" style={{ height: `${size.height}px` }}></div>
      <div
        className="slide_carousel-imgs"
        style={{
          transform: `translateX(-${currImg * size.width}px)`,
          width: `${size.width * 4}px`,
          height: `${size.height}px`,
        }}
      >
        {imageList}
      </div>
      <div className="slide_button-left" onClick={leftClick}>
        <img src="../public/arrow-left.svg" />
      </div>
      <div className="slide_button-right" onClick={rightClick}>
        <img src="../public/arrow-right.svg" />
      </div>
      <SlideIndicator amount={4} light={currImg} />
    </div>
  );
}
