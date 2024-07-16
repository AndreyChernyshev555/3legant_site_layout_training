import React, { useState } from "react";
import "./HomePage02.scss";
import Offer from "./Components/Offer/Offer.jsx";
import Head from "./Components/Head.jsx";
import Promo from "./Components/Promo.jsx";
import Logos from "./Components/Logos.jsx";
import Footer from "./Components/Footer.jsx";
import NewArrivals from "./Components/NewArrivals/NewArrivals.jsx";

const itemInfo = [
  {
    path: "../public/headphones/item0.svg",
    rating: 5,
    goods: "Skullcandy - Crusher anc 2 wireless headphones",
    price: "$299.99",
  },
  {
    path: "../public/headphones/item1.svg",
    rating: 5,
    goods: "Beats Studio Pro",
    price: "$349.99",
  },
  {
    path: "../public/headphones/item2.svg",
    rating: 5,
    goods: "Sony - WH-CH720N Wireless Noise Canceling",
    price: "$149.99",
  },
  {
    path: "../public/headphones/item3.svg",
    rating: 5,
    goods: "Skullcandy - Rail True Wireless Earbuds",
    price: "$79.99",
  },
  {
    path: "../public/headphones/item4.svg",
    rating: 5,
    goods: "Beats Studio Pro",
    price: "$224.99",
  },
];

export default function HomePage02() {
  const [cartItems, setCartItems] = useState(0);
  const handleClick = () => setCartItems((cartItems) => cartItems + 1);
  return (
    <div>
      <Offer offerText={"30% off storewide — Limited time!"} />
      <Head amount={cartItems} />
      <Promo />
      <div className="page">
        <Logos />
        <NewArrivals itemList={itemInfo} addFunc={handleClick} />
      </div>
      <Footer />
    </div>
  );
}
