import React, { useState } from "react";

export default function Offer({ offerText }) {
  const [isShown, setIsShown] = useState(true);

  const handleClick = () => setIsShown(!isShown);

  return (
    <div className="offer" id="offer1" style={{display: isShown ? 'flex' : 'none'}}>
      <div></div>
      <div className="offer_center">
        <img className="offer_img" src="../public/offer.svg" />
        <span className="offer_text">{offerText}</span>
        <span className="offer_link">Shop now &#8594;</span>
      </div>
      <span className="offer_close" onClick={handleClick}>×</span>
    </div>
  );
}
