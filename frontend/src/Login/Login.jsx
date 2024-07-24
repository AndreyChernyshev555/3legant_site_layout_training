import React from "react";
import "./login.scss";

export default function Login({setter = ()=>{}}) {
  return (
    <div className="enter-page">
      <div className="enter-page_logo">
        <img className="enter-page_img-left" src="../public/img/main_img_left.png" />
        <img className="enter-page_img-top" src="../public/img/main_img_top.png" />
        <div className="enter-page_logo-text">3legant.</div>
      </div>
      <div className="enter-block">
        <div className="enter-block_head">
          <span className="enter-block_head-title">Sign up</span>
          <span className="enter-block_head-text">
            Already have an account?&nbsp;
            <a className="enter-block_head-link">Sign in</a>
          </span>
        </div>
        <form className="enter-block_form">
          <input className="enter-block_form-field" placeholder="Your name" />
          <input className="enter-block_form-field" placeholder="Username" />
          <input
            className="enter-block_form-field"
            placeholder="Email address"
          />
          <input className="enter-block_form-field" placeholder="Password" />
          <div className="enter-block_agreement">
            <input
              className="enter-block_agreement-box"
              type="checkbox"
              id="agreement"
              names="agreement"
            />
            <label className="enter-block_agreement-text" for="agreement">
              I agree with&nbsp;
              <a className="enter-block_agreement-link">Privacy Policy</a>
              &nbsp;and&nbsp;
              <a className="enter-block_agreement-link">Terms of Use</a>
            </label>
          </div>
        </form>
        <button 
          className="enter-block_button"
          onClick={setter}
        >
          Sign up
        </button>
      </div>
    </div>
  );
}
