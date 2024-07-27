import React, {useState} from "react";
import "./HomePage01.scss";
import Offer from "./Components/Offer/Offer.jsx";
import Head from "./Components/Head.jsx";
import Slider from "./Components/Slider/Slider.jsx";
import Description from "./Components/Description.jsx";
import Collection from "./Components/Collection/Collection.jsx";
import NewArrivals from "./Components/NewArrivals/NewArrivals.jsx";
import Pros from "./Components/Pros.jsx";
import Info2 from "./Components/Info2.jsx";
import Articles from "./Components/Articles/Articles.jsx";
import Newsletter from "./Components/Newsletter.jsx";
import Footer from "./Components/Footer.jsx";

const itemInfo = [
  {
    path: "../public/img/furniture/sofa.png",
    rating: 5,
    goods: "Loveseat Sofa",
    price: "$199.00",
    oldPrice: "$400.00",
    discount: "-50%"
  },
  {
    path: "../public/img/furniture/lamp.png",
    rating: 5,
    goods: "Table Lamp",
    price: "$24.99",
    discount: "-50%"
  },
  {
    path: "../public/img/furniture/beige_lamp.png",
    rating: 5,
    goods: "Loveseat Sofa",
    price: "$24.00",
    discount: "-50%"
  },
  {
    path: "../public/img/furniture/cart.png",
    rating: 5,
    goods: "Bamboo Basket",
    price: "$10.50",
    discount: "-50%"
  },
  {
    path: "../public/img/furniture/toster.png",
    rating: 5,
    goods: "Toaster",
    price: "$249.25",
    oldPrice: "$400.00",
    discount: "-50%"
  },
];

const goodsInfo = [
  { label: "Living Room", img: "../public/img/living_room.svg", top: "7%", left: "8.6%" },
  { label: "Bedroom", img: "../public/img/bedroom.svg" },
  { label: "Kitchen", img: "../public/img/kitchen.svg" },
];
const collOffering = "Shop Now";

export default function HomePage01(props) {
  const [cartItems, setCartItems] = useState(0);
  const handleClick = () => setCartItems(cartItems => (cartItems + 1));
  return (
    <div>
      <Offer offerText={"30% off storewide — Limited time!"} />
      <Head 
          amount={cartItems}
          homePageFunc={props.setFunc}
          headStyle={{
            backgroundColor: "white",
            color: "#6c7275",
          }}
      />
      <div className="page">
        <Slider />
        <Description />
        <Collection 
          goods={goodsInfo}
          collOffer={collOffering}
        />
        <NewArrivals 
          itemList={itemInfo}
          addFunc={handleClick}
          wrap="no-wrap"
          header="New arrivals"
        />
        <Pros />
        <Info2 />
        <Articles />
        <Newsletter 
          background="../public/img/newsletter.png"
        />
        <Footer />
      </div>
    </div>
  );
}
