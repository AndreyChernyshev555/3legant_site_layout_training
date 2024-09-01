import React from "react";
import Head from "./Components/Head/Head.jsx";
import Newsletter from "./Components/Newsletter.jsx";
import Footer from "./Components/Footer.jsx";
import ShopFilter from "./Components/ShopComps/ShopFilter.jsx";
import "./Shop.scss";
import newsletterBack from "./img/newsletter.png";

export default function Shop() {
  return (
    <div>
      <Head />
      <div className="page">
        <div className="shop-banner">
          <div className="shop-banner_text1">
            <span className="shop-banner__grey">Home &gt;</span> Shop
          </div>
          <div className="shop-banner_text2">Shop Page</div>
          <div className="shop-banner_text3">
            Let’s design the place you always imagined.
          </div>
        </div>
        <div className="shop">
          <ShopFilter />
        </div>
        <Newsletter background={newsletterBack} />
      </div>
      <Footer />
    </div>
  );
}
