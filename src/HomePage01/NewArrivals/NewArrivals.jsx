import React from "react";
import NewArrivalsItem from "./NewArrivalsItem.jsx";

export default function NewArrivals() {
  return (
    <div className="new-arrivals">
      <div className="new-arrivals_text">
        <div className="new-arrivals_text-item1">New arrivals</div>
        <a className="new-arrivals_text-item2" href="dzen.ru">
          More products &#8594;
        </a>
      </div>
      <div className="new-arrivals_goods">
        <div className="new-arrivals_goods-item">
          <div className="new-arrivals_img">
            <div className="new-arrivals_img-info">
              <div className="new-arrivals_new">NEW</div>
              <div className="new-arrivals_discount">-50%</div>
            </div>
            <img
              className="new-arrivals_goods-img"
              src="../public/furniture/sofa.png"
            />
          </div>
          <div className="new-arrivals_description">
            <span className="new-arrivals_rating">
              <img src="../public/star.svg" />
              <img src="../public/star.svg" />
              <img src="../public/star.svg" />
              <img src="../public/star.svg" />
              <img src="../public/star.svg" />
            </span>
            <span className="new-arrivals_name">Loveseat Sofa</span>
            <div className="new-arrivals_price">
              <span className="new-arrivals_price-act">$199.00</span>
              <span className="new-arrivals_price-old">$400.00</span>
            </div>
          </div>
        </div>
        <NewArrivalsItem
          path={"../public/furniture/lamp.png"}
          rating={1}
          goods={"Table Lamp"}
          price={"$24.99"}
        />
        <NewArrivalsItem
          path={"../public/furniture/beige_lamp.png"}
          rating={4}
          goods={"Beige Table Lamp"}
          price={"$24.99"}
        />
        <NewArrivalsItem
          path={"../public/furniture/cart.png"}
          rating={5}
          goods={"Bamboo basket"}
          price={"$24.99"}
        />
        <NewArrivalsItem
          path={"../public/furniture/toster.png"}
          rating={3}
          goods={"Toaster"}
          price={"$224.999"}
        />
      </div>
    </div>
  );
}
