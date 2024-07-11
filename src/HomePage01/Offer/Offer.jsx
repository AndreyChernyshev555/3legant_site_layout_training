import React from "react";

export default function Offer({offerText}) {
  return (
    <div className="offer" id="offer1">
      <div></div>
      <div className="offer_center">
        <img className="offer_img" src="../public/offer.svg" />
        <span className="offer_text">{offerText}</span>
        <span className="offer_link">Shop now &#8594;</span>
      </div>
      <span className="offer_close">×</span>
    </div>
  );
}
