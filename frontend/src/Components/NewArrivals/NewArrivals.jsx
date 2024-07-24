import React from "react";
import NewArrivalsItem from "./NewArrivalsItem.jsx";
import "./NewArrivals.scss";

export default function NewArrivals(props) {
  const items = props.itemList.map((item) => (
    <NewArrivalsItem
      path={item.path}
      rating={item.rating}
      goods={item.goods}
      price={item.price}
      discount={item.discount}
      addFunc={props.addFunc}
      oldPrice={item.oldPrice}
    />
  ));
  return (
    <div className="new-arrivals">
      <div className="new-arrivals_text">
        <div className="new-arrivals_text-item1">{props.header}</div>
        <a className="new-arrivals_text-item2" href="https://dzen.ru">
          More products &#8594;
        </a>
      </div>
      <div
        className="new-arrivals_goods"
        style={{ flexWrap: `${props.wrap}`, overflowX: `${props.overflow}` }}
      >
        {items}
      </div>
    </div>
  );
}
