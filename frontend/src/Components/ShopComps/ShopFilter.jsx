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

export default function ShopFilter() {
  let tempHTML = [];
  const [active, setActive] = useState(0);

  for (let i = 0; i < categories.length; i++) {
    tempHTML.push(
      <div
        className="shop-filter_categories-item"
        key={i}
        style={{
          color: i == active ? "black" : "#605f5f",
          textDecoration: i == active ? "underline" : "none",
        }}
        onClick={() => handleClick(i)}
      >
        {categories[i]}
      </div>
    );
  }

  const [categoriesHTML, setCategoriesHTML] = useState(tempHTML);

  const handleClick = (num) => {
    console.log(`Trying to set active elem number ${num}`);
    let tempHTML = [...categoriesHTML];
    let keyNum = active;
    tempHTML[keyNum] = (
      <div
        className="shop-filter_categories-item"
        key={keyNum}
        style={{
          color: "#605f5f",
        }}
        onClick={() => handleClick(keyNum)}
      >
        {categories[keyNum]}
      </div>
    );
    tempHTML[num] = (
      <div
        className="shop-filter_categories-item"
        key={num}
        style={{
          color: "black",
          textDecoration: "underline",
        }}
        onClick={() => handleClick(num)}
      >
        {categories[num]}
      </div>
    );
    setCategoriesHTML(tempHTML);
    console.log(num, "set active");
    setActive(num);
  };

  const handlePriceChange = (id) => {
    console.log(`handlePriceChange on ${id} started`);

    if (id == prices[0]) {
      let checkboxArray = document.getElementsByClassName(
        "shop-filter_prices-item-checkbox"
      );
      for (let i = 0; i < checkboxArray.length; i++) {
        checkboxArray[i].checked = false;
      }
    }
    else {
      document.getElementById(prices[0]).checked = false
    }
    document.getElementById(id).checked = true;
    console.log(`handlePriceChange on ended`);
  };

  let pricesHTML = [];

  for (let i = 0; i < prices.length; i++) {
    pricesHTML.push(
      <div className="shop-filter_prices-item" key={i}>
        <label className="shop-filter_prices-item-text" htmlFor={prices[i]}>
          {prices[i]}
        </label>
        <input
          type="checkbox"
          class="shop-filter_prices-item-checkbox"
          id={prices[i]}
          defaultChecked={i == 0 ? true : false}
          onChange={() => handlePriceChange(prices[i])}
        />
      </div>
    );
  }

  return (
    <div className="shop-filter">
      <div className="shop-filter_head">
        <img src={filterIcon} /> Filter
      </div>
      <div className="shop-filter_categories">
        CATEGORIES
        <div className="shop-filter_categories-scroller">{categoriesHTML}</div>
      </div>
      <div className="shop-filter_price">
        PRICE
        <div className="shop-filter_price-items">{pricesHTML}</div>
      </div>
    </div>
  );
}
