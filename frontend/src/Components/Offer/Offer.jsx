import React, { useState } from "react";
import "./Offer.scss";

export default function Offer(props) {
  const [isShown, setIsShown] = useState(true);

  const handleClick = () => setIsShown(!isShown);

  return (
    <div className="offer" id="offer1" style={isShown ? props.offerColors : {display: 'none'}}>
      <div></div>
      <div className="offer_center">
        <img className="offer_img" src="../public/img/icons/offer.svg" style={props.offerImg}/>
        <span className="offer_text">{props.offerText}</span>
        <span className="offer_link" style={props.offerLink}>Shop now &#8594;</span>
      </div>
      <span className="offer_close" onClick={handleClick}>×</span>
    </div>
  );
}
