import React from "react";
import Offer from "./Offer/Offer.jsx";
import "./HomePage01.scss";

export default function HomePage01() {
  return (
    <div>
      <Offer 
        offerText={"30% off storewide — Limited time!"}
      />
      <div className="page">
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
            <img className="head_button" src="../public/cart.svg" />
          </div>
        </div>
        <div className="slider">
          <img className="slide_img" src="../public/home_page_slide.png" />
          <div className="slide_button-left">
            <img src="../public/slide_left.svg" />
          </div>
          <div className="slide_button-right">
            <img src="../public/slide_right.svg" />
          </div>
        </div>
        <div className="description">
          <div className="description_item1">
            Simply Unique<span className="description_back">/</span> Simply
            Better.
          </div>
          <div className="description_item2">
            <span className="description_label">3legant</span> is a gift &
            decorations store based in HCMC, Vietnam. Est since 2019.
          </div>
        </div>
        <div className="rooms-cards">
          <div className="rooms-cards_main">
            <img className="rooms-cards_img" src="../public/living_room.png" />
          </div>
          <div className="rooms-cards_sub">
            <div className="rooms-cards_sub-item1">
              <img className="rooms-cards_img" src="../public/bedroom.png" />
            </div>
            <div className="rooms-cards_sub-item2">
              <img className="rooms-cards_img" src="../public/kitchen.png" />
            </div>
          </div>
        </div>
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
        <div className="pros">
          <div className="pros_item">
            <img className="pros_ico" src="../public/icons/fast_delivery.svg" />
            <div className="pros_text">
              <span className="pros_main">Free Shipping</span>
              <span className="pros_sub">Order above $200</span>
            </div>
          </div>
          <div className="pros_item">
            <img className="pros_ico" src="../public/icons/money.svg" />
            <div className="pros_text">
              <span className="pros_main">Money-back</span>
              <span className="pros_sub">30 days guarantee</span>
            </div>
          </div>
          <div className="pros_item">
            <img className="pros_ico" src="../public/icons/lock.svg" />
            <div className="pros_text">
              <span className="pros_main">Secure Payments</span>
              <span className="pros_sub">Secured by Stripe</span>
            </div>
          </div>
          <div className="pros_item">
            <img className="pros_ico" src="../public/icons/call.svg" />
            <div className="pros_text">
              <span className="pros_main">24/7 Support</span>
              <span className="pros_sub">Phone and Email support</span>
            </div>
          </div>
        </div>
        <div className="info2">
          <img className="info2_img" src="../public/paste1.png" />
          <div className="info2_offer">
            <div className="info2_offer-sale-up">SALE UP TO 35% OFF</div>
            <div className="info2_offer-head">
              HUNDREDS of New lower prices!
            </div>
            <div className="info2_offer-desc">
              It’s more affordable than ever to give every room in your home a
              stylish makeover
            </div>
            <div className="info2_offer-link">
              <span>Shop Now &#8594;</span>
            </div>
          </div>
        </div>
        <div className="articles">
          <div className="articles_header">Articles</div>
          <div className="articles_block">
            <div className="articles_item">
              <img
                className="articles_img"
                src="../public/articles/article1.png"
              />
              <span className="articles_name">7 ways to decor your home</span>
              <a className="articles_read" href="dzen.ru">
                Read More &#8594;
              </a>
            </div>
            <div className="articles_item">
              <img
                className="articles_img"
                src="../public/articles/article2.png"
              />
              <span className="articles_name">Kitchen organization</span>
              <a className="articles_read" href="dzen.ru">
                Read More &#8594;
              </a>
            </div>
            <div className="articles_item">
              <img
                className="articles_img"
                src="../public/articles/article3.png"
              />
              <span className="articles_name">Decor your bedroom</span>
              <a className="articles_read" href="dzen.ru">
                Read More &#8594;
              </a>
            </div>
          </div>
        </div>
        <div className="newsletter">
          <img className="newsletter_img" src="../public/newsletter.png" />
          <div className="newsletter_block">
            <div className="newsletter_text">
              <div className="newsletter_header">Join Our Nesletter</div>
              <div className="newsletter_desc">
                Sign up for deals, new products and promotions
              </div>
            </div>
            <div className="newsletter_form">
              <span className="newsletter_form-left">
                <img src="../public/email.svg" />
                Email adress
              </span>
              <span className="newsletter_form-right">Signup</span>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="footer_navigation">
            <div className="footer_company">
              <div className="footer_company-logo">
                3legant<span>.</span>
              </div>
              <div className="footer_company-caption">
                Gift & Decoration Store
              </div>
            </div>
            <div className="footer_nav-buttons">
              <span>Home</span>
              <span>Shop</span>
              <span>Product</span>
              <span>Blog</span>
              <span>Contact Us</span>
            </div>
          </div>
          <div className="footer_sources">
            <div className="footer_copyright">
              <div className="footer_copyright-text">
                Copyright © 2023 3legant. All rights reserved
              </div>
              <div className="footer_copyright-policy">Privacy Policy</div>
              <div className="footer_copyright-terms">Terms of Use</div>
            </div>
            <div className="footer_social">
              <img src="../public/icons/instagram.svg" />
              <img src="../public/icons/facebook.svg" />
              <img src="../public/icons/youtube.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
