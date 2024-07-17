import React from "react";
import PromoTimer from "./PromoTimer.jsx";
import "./TimePromo.scss";

export default function TimePromo() {
  return (
    <div className="time-promotion">
      <img className="time-promotion_img" src="../public/hurry.svg" />
      <div className="time-promotion_content">
        <div className="time-promotion_header">PROMOTION</div>
        <div className="time-promotion_offer">Hurry up! 40% OFF</div>
        <div className="time-promotion_text">
          Thousands of high tech are waiting for you
        </div>
        <PromoTimer 
            days="02"
            hours="12"
            minutes="45"
            seconds="05"
        />
        <div className="time-promotion_button">
            Shop now
        </div>
      </div>
    </div>
  );
}
