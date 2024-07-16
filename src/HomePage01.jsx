import React, {useState} from "react";
import "./HomePage01.scss";
import Offer from "./Components/Offer/Offer.jsx";
import Head from "./Components/Head.jsx";
import Slider from "./Components/Slider/Slider.jsx";
import Description from "./Components/Description.jsx";
import Collection from "./Components/Collection.jsx";
import NewArrivals from "./Components/NewArrivals/NewArrivals.jsx";
import Pros from "./Components/Pros.jsx";
import Info2 from "./Components/Info2.jsx";
import Articles from "./Components/Articles/Articles.jsx";
import Newsletter from "./Components/Newsletter.jsx";
import Footer from "./Components/Footer.jsx";

const itemInfo = [
  {
    path: "../public/furniture/sofa.png",
    rating: 5,
    goods: "Loveseat Sofa",
    price: "$199.00",
    oldPrice: "$400.00",
    discount: "-50%"
  },
  {
    path: "../public/furniture/lamp.png",
    rating: 5,
    goods: "Table Lamp",
    price: "$24.99",
    discount: "-50%"
  },
  {
    path: "../public/furniture/beige_lamp.png",
    rating: 5,
    goods: "Loveseat Sofa",
    price: "$24.00",
    discount: "-50%"
  },
  {
    path: "../public/furniture/cart.png",
    rating: 5,
    goods: "Bamboo Basket",
    price: "$10.50",
    discount: "-50%"
  },
  {
    path: "../public/furniture/toster.png",
    rating: 5,
    goods: "Toaster",
    price: "$249.25",
    oldPrice: "$400.00",
    discount: "-50%"
  },
];

export default function HomePage01() {
  const [cartItems, setCartItems] = useState(0);
  const handleClick = () => setCartItems(cartItems => (cartItems + 1));
  return (
    <div>
      <Offer offerText={"30% off storewide — Limited time!"} />
      <div className="page">
        <Head 
          amount={cartItems}
        />
        <Slider />
        <Description />
        <Collection />
        <NewArrivals 
          itemList={itemInfo}
          addFunc={handleClick}
        />
        <Pros />
        <Info2 />
        <Articles />
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
}
