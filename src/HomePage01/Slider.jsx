import React from "react";

export default function Slider() {
  return (
    <div className="slider">
      <img className="slide_img" src="../public/home_page_slide.png" />
      <div className="slide_button-left">
        <img src="../public/arrow-left.svg" />
      </div>
      <div className="slide_button-right">
        <img src="../public/arrow-right.svg" />
      </div>
    </div>
  );
}
