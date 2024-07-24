import React, { useState, useEffect } from "react";
import SlideIndicator from "./SlideIndicator.jsx";
import "./Slider.scss";

const images = [
  "../public/img/slider_images/home_page_slide1.png",
  "../public/img/slider_images/home_page_slide2.jpg",
  "../public/img/slider_images/home_page_slide3.jpg",
  "../public/img/slider_images/home_page_slide4.jpg",
];

export default function Slider() {
  const widthProportion = window.matchMedia(
    "screen and (max-width: 1440px) and (orientation: portrait)"
  ).matches
    ? 1920 / 1920
    : 1120 / 1920;
  const heightProportion = window.matchMedia(
    "screen and (max-width: 1440px) and (orientation: portrait)"
  ).matches
    ? 720 / 1920
    : 560 / 1920;

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
    width: widthProportion * window.innerWidth,
    height: heightProportion * window.innerWidth,
  });

  useEffect(() => {
    const resize = () => {
      setSize({
        width: widthProportion * window.innerWidth,
        height: heightProportion * window.innerWidth,
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
      <div
        className="slide_filter-left"
        style={{ height: `${size.height}px` }}
      ></div>
      <div
        className="slide_filter-right"
        style={{ height: `${size.height}px` }}
      ></div>
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
        <img src="../public/img/icons/arrow-left.svg" />
      </div>
      <div className="slide_button-right" onClick={rightClick}>
        <img src="../public/img/icons/arrow-right.svg" />
      </div>
      <SlideIndicator amount={4} light={currImg} />
    </div>
  );
}
