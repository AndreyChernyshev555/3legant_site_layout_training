import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import HeadIndicator from "./HeadIndicator.jsx";
import "./Head.scss";
import searchIcon from "../../img/icons/search.svg";
import userIcon from "../../img/icons/user.svg";
import cartIcon from "../../img/icons/cart.svg";
import menuIcon from "../../img/icons/menu.svg";

export default function Head(props) {
  let styles = props.headStyle
    ? props.headStyle
    : { backgroundColor: "white", color: "#6c7275" };

  const navigate = useNavigate();
  const cartItems = useSelector((state) => state);
  return (
    <div className="head" style={styles}>
      <div className="head_logo">
        <img className="head_menu" src={menuIcon} onClick={props.showClick} />
        3legant.
      </div>
      <div className="head_section-block">
        <span className="head_section" onClick={() => navigate("/home1")}>
          Home
        </span>
        <span className="head_section" onClick={() => navigate("/shop")}>
          Shop
        </span>
        <span className="head_section">Product</span>
        <span className="head_section">Contact us</span>
      </div>
      <div className="head_buttons-block">
        <img className="head_button" src={searchIcon} />
        <img className="head_button" src={userIcon} />
        <div className="head_cart">
          <img
            className="head_button"
            src={cartIcon}
            onClick={() => navigate("/cart")}
          />
          <HeadIndicator amount={cartItems.length} />
        </div>
      </div>
    </div>
  );
}
