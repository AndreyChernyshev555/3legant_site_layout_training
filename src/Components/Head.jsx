import React from "react";
import HeadIndicator from "./HeadIndicator.jsx";

export default function Head(props) {
  return (
    <div className="head">
      <div className="head_logo">3legant.</div>
      <div className="head_section-block">
        <span className="head_main-section">Home</span>
        <span className="head_section">Shop</span>
        <span className="head_section">Product</span>
        <span className="head_section">Contact us</span>
      </div>
      <div className="head_buttons-block">
        <img className="head_button" src="../public/search.svg" />
        <img className="head_button" src="../public/user.svg" />
        <div className="head_cart">
          <img className="head_button" src="../public/cart.svg" />
          <HeadIndicator
            amount={props.amount}
          />
        </div>
      </div>
    </div>
  );
}
