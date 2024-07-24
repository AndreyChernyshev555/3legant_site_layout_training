import React from "react";
import "./Collection.scss";

export default function Collection(props) {
  return (
    <div className="collection">
      <div className="collection_main">
        <div className="collection_main-text" style={{top: `${props.goods[0].top}`, left: `${props.goods[0].left}`}}>
          <div>{props.goods[0].label}</div>
          <div className="collection_link">{props.collOffer}</div>
        </div>
        <img className="collection_img" src={props.goods[0].img} />
      </div>
      <div className="collection_sub">
        <div className="collection_sub-item">
          <div className="collection_sub-text">
            <div>{props.goods[1].label}</div>
            <div className="collection_link">{props.collOffer}</div>
          </div>
          <img className="collection_img" src={props.goods[1].img} />
        </div>
        <div className="collection_sub-item">
          <div className="collection_sub-text">
            <div>{props.goods[2].label}</div>
            <div className="collection_link">{props.collOffer}</div>
          </div>
          <img className="collection_img" src={props.goods[2].img} />
        </div>
      </div>
    </div>
  );
}
