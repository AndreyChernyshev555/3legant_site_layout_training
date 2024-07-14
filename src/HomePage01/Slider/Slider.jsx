import React, { useState, useEffect } from "react";
import SlideIndicator from "./SlideIndicator.jsx";

const images = [
  "../public/slider_images/home_page_slide1.png",
  "../public/slider_images/home_page_slide2.jpg",
  "../public/slider_images/home_page_slide3.jpg",
  "../public/slider_images/home_page_slide4.jpg",
];

const imageList = images.map((image) => <img src={image} width="1120" />);

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

  return (
    <div className="slider">
      <div className="slide_filter-left"></div>
      <div className="slide_filter-right"></div>
      <div
        className="slide_carousel-imgs"
        style={{ transform: `translateX(-${currImg * 1120}px)` }}
      >
        {imageList}
      </div>
      <div className="slide_button-left" onClick={leftClick}>
        <img src="../public/arrow-left.svg" />
      </div>
      <div className="slide_button-right" onClick={rightClick}>
        <img src="../public/arrow-right.svg" />
      </div>
      <SlideIndicator amount={4} light={currImg}/>
    </div>
  );
}
