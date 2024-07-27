import React from "react";
import HeadIndicator from "./HeadIndicator.jsx";
import "./Head.scss";

export default function Head(props) {
  return (
    <div className="head" style={props.headStyle}>
      <div className="head_logo">3legant.</div>
      <div className="head_section-block">
        <span className="head_section" onClick={() => props.homePageFunc(0)}>Home</span>
        <span className="head_section" onClick={() => props.homePageFunc(1)}>Shop</span>
        <span className="head_section">Product</span>
        <span className="head_section">Contact us</span>
      </div>
      <div className="head_buttons-block">
        <img className="head_button" src="../public/img/icons/search.svg" />
        <img className="head_button" src="../public/img/icons/user.svg" />
        <div className="head_cart">
          <img className="head_button" src="../public/img/icons/cart.svg" />
          <HeadIndicator
            amount={props.amount}
          />
        </div>
      </div>
    </div>
  );
}
