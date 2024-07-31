import React, { useState } from "react";
import starIcon from "../../../public/img/star.svg"

export default function NewArrivalsItem(props) {
  const rating = props.rating;
  let rateBlock = [];
  for (let i = 0; i < rating; i++) {
    rateBlock.push(<img src={starIcon} />);
  }

  const [buttonShow, setButtonShow] = useState(false);
  const handleHover = () => setButtonShow(!buttonShow);

  const visibility = (typeof props.discount === 'string') ? "block" : "none";
  return (
    <div className="new-arrivals_goods-item">
      <div
        className="new-arrivals_img"
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <div className="new-arrivals_img-info">
          <div className="new-arrivals_new">NEW</div>
          <div className="new-arrivals_discount" style={{display: `${visibility}`}}>
            {props.discount}
          </div>
        </div>
        <img className="new-arrivals_goods-img" src={props.path} />
        <div
          className="new-arrivals_add-button"
          onClick={props.addFunc}
          style={{ opacity: buttonShow ? 1 : 0 }}
        >
          Add to cart
        </div>
      </div>
      <div className="new-arrivals_description">
        <span className="new-arrivals_rating">{rateBlock}</span>
        <span className="new-arrivals_name">{props.goods}</span>
        <div className="new-arrivals_price">
          <span className="new-arrivals_price-act">{props.price}</span>
          <span className="new-arrivals_price-old">{props.oldPrice}</span>
        </div>
      </div>
    </div>
  );
}
