import React, { useState } from "react";
import "./ShopFilter.scss";
import filterIcon from "../../img/icons/filter.svg";

const categories = [
  "All Rooms",
  "Living Room",
  "Bedroom",
  "Kitchen",
  "Bathroom",
  "Dinning",
  "Outdoor",
  "Outdoor",
  "Dinning",
  "Garage",
];

const prices = [
  "All Price",
  "$0.00 - 99.99",
  "$100.00 - 199.99",
  "$200.00 - 299.99",
  "$300.00 - 399.99",
  "$400.00+",
];

let categoriesHTML = [];
let pricesHTML = [];

export default function ShopFilter() {
  const [active, setActive] = useState(0);
  const handleClick = (num) => {
    if (num != active) setActive(num);
    console.log(num, "set active");
  };

  for (let i = 0; i < categories.length; i++) {
    categoriesHTML.push(
      <div
        className="shop-filter_categories-item"
        key={i}
        style={{
          color: i == active ? "black" : "#605f5f",
          borderBottom: i == active ? "1px solid black" : "none",
        }}
        onClick={() => handleClick(i)}
      >
        {categories[i]}
      </div>
    );
  }

  for (let i = 0; i < prices.length; i++) {
    pricesHTML.push(
      <div className="shop-filter_prices-item" key={i}>
        {prices[i]}
      </div>
    );
  }

  return (
    <div className="shop-filter">
      <div className="shop-filter_head">
        <img src={filterIcon} /> Filter
      </div>
      <div className="shop-filter_param">
        CATEGORIES
        <div className="shop-filter_param-scroller">{categoriesHTML}</div>
      </div>
      <div className="shop-filter_param">
        PRICE
        <div className="shop-filter_param-scroller">{pricesHTML}</div>
      </div>
    </div>
  );
}
