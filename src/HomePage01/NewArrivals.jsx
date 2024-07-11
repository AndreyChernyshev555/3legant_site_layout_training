import React from "react";

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
        <div className="new-arrivals_goods-item">
          <div className="new-arrivals_img">
            <div className="new-arrivals_img-info">
              <div className="new-arrivals_new">NEW</div>
              <div className="new-arrivals_discount">-50%</div>
            </div>
            <img
              className="new-arrivals_goods-img"
              src="../public/furniture/lamp.png"
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
            <span className="new-arrivals_name">Table Lamp</span>
            <div className="new-arrivals_price">
              <span className="new-arrivals_price-act">$24.99</span>
            </div>
          </div>
        </div>
        <div className="new-arrivals_goods-item">
          <div className="new-arrivals_img">
            <div className="new-arrivals_img-info">
              <div className="new-arrivals_new">NEW</div>
              <div className="new-arrivals_discount">-50%</div>
            </div>
            <img
              className="new-arrivals_goods-img"
              src="../public/furniture/beige_lamp.png"
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
            <span className="new-arrivals_name">Beige Table Lamp</span>
            <div className="new-arrivals_price">
              <span className="new-arrivals_price-act">$24.99</span>
            </div>
          </div>
        </div>
        <div className="new-arrivals_goods-item">
          <div className="new-arrivals_img">
            <div className="new-arrivals_img-info">
              <div className="new-arrivals_new">NEW</div>
              <div className="new-arrivals_discount">-50%</div>
            </div>
            <img
              className="new-arrivals_goods-img"
              src="../public/furniture/cart.png"
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
            <span className="new-arrivals_name">Bamboo basket</span>
            <div className="new-arrivals_price">
              <span className="new-arrivals_price-act">$24.99</span>
            </div>
          </div>
        </div>
        <div className="new-arrivals_goods-item">
          <div className="new-arrivals_img">
            <div className="new-arrivals_img-info">
              <div className="new-arrivals_new">NEW</div>
              <div className="new-arrivals_discount">-50%</div>
            </div>
            <img
              className="new-arrivals_goods-img"
              src="../public/furniture/toster.png"
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
            <span className="new-arrivals_name">Toaster</span>
            <div className="new-arrivals_price">
              <span className="new-arrivals_price-act">$224.99</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
