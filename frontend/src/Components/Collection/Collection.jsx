import React, { useState, useEffect } from "react";
import "./Collection.scss";

export default function Collection(props) {
  const heightProportionMain = window.matchMedia(
    "screen and (max-width: 480px)"
  ).matches
    ? 1920 / 1920
    : 650 / 1920;
  const heightProportionSub = window.matchMedia(
    "screen and (max-width: 480px)"
  ).matches
    ? 960 / 1920
    : 310 / 1920;

  const [sizeMain, setSizeMain] = useState(heightProportionMain * window.innerWidth);
  const [sizeSub, setSizeSub] = useState(heightProportionSub * window.innerWidth);

  useEffect(() => {
    const resize = () => {
      setSizeMain(heightProportionMain * window.innerWidth);
      setSizeSub(heightProportionSub * window.innerWidth);
    };
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="collection">
      <div
        className="collection_main"
        style={{ background: `url(${props.goods[0].img})`, backgroundSize: "cover", height: sizeMain }}
      >
        <div
          className="collection_main-text"
          style={{
            top: `${props.goods[0].top}`,
            left: `${props.goods[0].left}`,
          }}
        >
          <div>{props.goods[0].label}</div>
          <div className="collection_link">{props.collOffer}</div>
        </div>
      </div>
      <div className="collection_sub">
        <div className="collection_sub-item" style={{ background: `url(${props.goods[1].img})`, backgroundSize: "cover", height: sizeSub  }}>
          <div className="collection_sub-text">
            <div>{props.goods[1].label}</div>
            <div className="collection_link">{props.collOffer}</div>
          </div>
        </div>
        <div className="collection_sub-item" style={{ background: `url(${props.goods[2].img})`, backgroundSize: "cover", height: sizeSub }}>
          <div className="collection_sub-text">
            <div>{props.goods[2].label}</div>
            <div className="collection_link">{props.collOffer}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
