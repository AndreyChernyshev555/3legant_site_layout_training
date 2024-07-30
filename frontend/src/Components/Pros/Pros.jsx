import React from "react";
import "./Pros.scss";
export default function Pros() {
  return (
    <div className="pros">
      <div className="pros_item">
        <img className="pros_ico" src="../public/img/icons/fast_delivery.svg" />
        <div className="pros_text">
          <span className="pros_main">Free Shipping</span>
          <span className="pros_sub">Order above $200</span>
        </div>
      </div>
      <div className="pros_item">
        <img className="pros_ico" src="../public/img/icons/money.svg" />
        <div className="pros_text">
          <span className="pros_main">Money-back</span>
          <span className="pros_sub">30 days guarantee</span>
        </div>
      </div>
      <div className="pros_item">
        <img className="pros_ico" src="../public/img/icons/lock.svg" />
        <div className="pros_text">
          <span className="pros_main">Secure Payments</span>
          <span className="pros_sub">Secured by Stripe</span>
        </div>
      </div>
      <div className="pros_item">
        <img className="pros_ico" src="../public/img/icons/call.svg" />
        <div className="pros_text">
          <span className="pros_main">24/7 Support</span>
          <span className="pros_sub">Phone and Email support</span>
        </div>
      </div>
    </div>
  );
}
