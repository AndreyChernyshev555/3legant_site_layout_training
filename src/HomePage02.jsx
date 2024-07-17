import React, { useState } from "react";
import "./HomePage02.scss";
import Offer from "./Components/Offer/Offer.jsx";
import Head from "./Components/Head.jsx";
import Promo from "./Components/Promo.jsx";
import Logos from "./Components/Logos.jsx";
import Footer from "./Components/Footer.jsx";
import NewArrivals from "./Components/NewArrivals/NewArrivals.jsx";
import Collection from "./Components/Collection/Collection.jsx";
import PageHeader from "./Components/PageHeader.jsx";
import TimePromo from "./Components/TimePromo/TimePromo.jsx";
import Pros from "./Components/Pros.jsx";
import Newsfeed from "./Components/Newsfeed.jsx";
import Newsletter from "./Components/Newsletter.jsx";

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
  {
    path: "../public/headphones/item5.svg",
    rating: 5,
    goods: "JBL Reflect Flow Pro+ Bluetooth Truly Wireless Sports",
    price: "$179.95",
  },
  {
    path: "../public/headphones/item6.svg",
    rating: 5,
    goods: "Bose QuietComfort Headphones",
    price: "$349.00",
  },
  {
    path: "../public/headphones/item7.svg",
    rating: 5,
    goods: "AKG Y600NC Wireless",
    price: "$349.99",
  },
];

const goodsInfo = [
  {
    label: "Headband",
    img: "../public/headphones_collection/item0.svg",
    top: "81.5%",
    left: "8.6%",
  },
  { label: "Earbuds", img: "../public/headphones_collection/item1.svg" },
  { label: "Accessories", img: "../public/headphones_collection/item2.svg" },
];
const collOffering = "Collection →";

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
        <NewArrivals
          itemList={itemInfo.slice(0, 4)}
          addFunc={handleClick}
          wrap="no-wrap"
          header="New Arrivals"
        />
        <PageHeader text="Shop Collection" />
        <Collection goods={goodsInfo} collOffer={collOffering} />
        <NewArrivals
          itemList={itemInfo}
          addFunc={handleClick}
          wrap="wrap"
          header="Bestseller"
          overflow="hidden"
        />
        <TimePromo />
        <Pros />
        <Newsfeed />
        <Newsletter 
          background="../public/newsletter2.svg"
        />
      </div>
      <Footer />
    </div>
  );
}
