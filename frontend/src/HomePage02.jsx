import React, { useState } from "react";
import "./HomePage02.scss";
import Offer from "./Components/Offer/Offer.jsx";
import Head from "./Components/Head/Head.jsx";
import Promo from "./Components/Promo.jsx";
import Logos from "./Components/Logos.jsx";
import Footer from "./Components/Footer.jsx";
import NewArrivals from "./Components/NewArrivals/NewArrivals.jsx";
import Collection from "./Components/Collection/Collection.jsx";
import PageHeader from "./Components/PageHeader/PageHeader.jsx";
import TimePromo from "./Components/TimePromo/TimePromo.jsx";
import Pros from "./Components/Pros/Pros.jsx";
import Newsfeed from "./Components/Newsfeed/Newsfeed.jsx";
import Newsletter from "./Components/Newsletter.jsx";

const itemInfo = [
  {
    path: "../public/img/headphones/item0.svg",
    rating: 5,
    goods: "Skullcandy - Crusher anc 2 wireless headphones",
    price: "$299.99",
  },
  {
    path: "../public/img/headphones/item1.svg",
    rating: 5,
    goods: "Beats Studio Pro",
    price: "$349.99",
  },
  {
    path: "../public/img/headphones/item2.svg",
    rating: 5,
    goods: "Sony - WH-CH720N Wireless Noise Canceling",
    price: "$149.99",
  },
  {
    path: "../public/img/headphones/item3.svg",
    rating: 5,
    goods: "Skullcandy - Rail True Wireless Earbuds",
    price: "$79.99",
  },
  {
    path: "../public/img/headphones/item4.svg",
    rating: 5,
    goods: "Beats Studio Pro",
    price: "$224.99",
  },
  {
    path: "../public/img/headphones/item5.svg",
    rating: 5,
    goods: "JBL Reflect Flow Pro+ Bluetooth Truly Wireless Sports",
    price: "$179.95",
  },
  {
    path: "../public/img/headphones/item6.svg",
    rating: 5,
    goods: "Bose QuietComfort Headphones",
    price: "$349.00",
  },
  {
    path: "../public/img/headphones/item7.svg",
    rating: 5,
    goods: "AKG Y600NC Wireless",
    price: "$349.99",
  },
];

const goodsInfo = [
  {
    label: "Headband",
    img: "../public/img/headphones_collection/item0.svg",
    top: "81.5%",
    left: "8.6%",
  },
  { label: "Earbuds", img: "../public/img/headphones_collection/item1.svg" },
  {
    label: "Accessories",
    img: "../public/img/headphones_collection/item2.svg",
  },
];
const collOffering = "Collection →";

// .head {
//     background-color: $main-head-color;
//     color: $head-font-color;
//   }
//   .head_section {
//     transition: color, 0.2s;
//     &:hover {
//       color: $font-color;
//     }
//   }
//   .head_button {
//     transition: filter, 0.2s;
//     &:hover {
//       filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(240deg)
//         brightness(105%) contrast(103%);
//     }
//   }
//   .head_indicator {
//     background-color: #141718;
//     color: $font-color;
//   }

export default function HomePage02(props) {
  const [cartItems, setCartItems] = useState(0);
  const handleClick = () => setCartItems((cartItems) => cartItems + 1);
  return (
    <div>
      <Offer
        offerText={"30% off storewide — Limited time!"}
        offerColors={{ background: "#141718", color: "#f3f5f7" }}
        offerImg={{
          filter:
            "invert(100%) sepia(0%) saturate(0%) hue-rotate(240deg) brightness(105%) contrast(103%)",
        }}
        offerLink={{ color: "rgba(255, 171, 0, 0.64" }}
      />
      <Head
        amount={cartItems}
        homePageFunc={props.setFunc}
        headStyle={{
          backgroundColor: "rgba(255, 171, 0, 0.64)",
          color: "#141718",
        }}
      />
      <Promo />
      <div className="page">
        <Logos />
        <NewArrivals
          itemList={itemInfo.slice(0, 5)}
          addFunc={handleClick}
          wrap="no-wrap"
          header="New Arrivals"
        />
        <div className="page-header">Shop Collection</div>
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
        <Newsletter background="../public/img/newsletter2.svg" />
      </div>
      <Footer />
    </div>
  );
}
