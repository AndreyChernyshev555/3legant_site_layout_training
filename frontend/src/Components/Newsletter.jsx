import React from "react";

export default function Newsletter(props) {
  return (
    <div className="newsletter" style={{backgroundImage: `url(${props.background})`}}>
      <div className="newsletter_block">
        <div className="newsletter_text">
          <div className="newsletter_header">Join Our Nesletter</div>
          <div className="newsletter_desc">
            Sign up for deals, new products and promotions
          </div>
        </div>
        <div className="newsletter_form">
          <div className="newsletter_form-left">
            <img src="../public/img/icons/email.svg" />
            <input
              className="newsletter_form-input"
              placeholder="Email adress"
              type="email"
            />
          </div>
          <span className="newsletter_form-right">Signup</span>
        </div>
      </div>
    </div>
  );
}
