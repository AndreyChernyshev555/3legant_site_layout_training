import React, {useState} from "react";

const images = [
  "../public/slider_images/home_page_slide1.png",
  "../public/slider_images/home_page_slide2.jpg"
];

const imageList = images.map(image => (<img src={image} width="1120"/>));

export default function Slider() {
  const [currImg, setCurrImg] = useState(0);
  const leftClick = function () {
    if (currImg > 0)
      setCurrImg(currImg => (currImg-1));
  };
  const rightClick = function () {
    if (currImg < (images.length - 1))
      setCurrImg(currImg => (currImg+1));
  };

  return (
    <div className="slider">
      <div className="slide_filter-left"></div>
      <div className="slide_filter-right"></div>
      <div className="slide_carousel-imgs" style={{transform:`translateX(-${currImg * 1120}px)`}}>
        {imageList}
      </div>
      <div className="slide_button-left" onClick={leftClick}>
        <img src="../public/arrow-left.svg" />
      </div>
      <div className="slide_button-right" onClick={rightClick}>
        <img src="../public/arrow-right.svg" />
      </div>
    </div>
  );
}
