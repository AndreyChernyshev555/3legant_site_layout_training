import React from "react";
import "./ShopContent.scss";
import { itemInfo } from "../../HomePage01.jsx";
import NewArrivalsItem from "../NewArrivals/NewArrivalsItem.jsx";

export default function ShopContent() {
  const itemsHTML = itemInfo.map((item) => (
    <NewArrivalsItem
      path={item.path}
      rating={item.rating}
      title={item.title}
      price={item.price}
      discount={item.discount}
      oldPrice={item.oldPrice}
    />
  ));

  return (
    <div className="shop-content">
      <div className="shop-content_head">Living Room</div>
      <div className="shop-content_items">
        {itemsHTML}
      </div>
    </div>
  );
}
