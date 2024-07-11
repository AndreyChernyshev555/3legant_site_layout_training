import React from "react";

export default function NewArrivalsItem(props) {
  const rating = props.rating;
  let rateBlock = [];
  for (let i = 0; i < rating; i++) {
    rateBlock.push(<img src="../public/star.svg" />);
  }
  return (
    <div className="new-arrivals_goods-item">
      <div className="new-arrivals_img">
        <div className="new-arrivals_img-info">
          <div className="new-arrivals_new">NEW</div>
          <div className="new-arrivals_discount">-50%</div>
        </div>
        <img className="new-arrivals_goods-img" src={props.path} />
      </div>
      <div className="new-arrivals_description">
        <span className="new-arrivals_rating">
          {rateBlock}
        </span>
        <span className="new-arrivals_name">{props.goods}</span>
        <div className="new-arrivals_price">
          <span className="new-arrivals_price-act">{props.price}</span>
        </div>
      </div>
    </div>
  );
}
