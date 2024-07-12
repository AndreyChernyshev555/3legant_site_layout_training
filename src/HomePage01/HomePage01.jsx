import React, {useState} from "react";
import "./HomePage01.scss";
import Offer from "./Offer/Offer.jsx";
import Head from "./Head.jsx";
import Slider from "./Slider.jsx";
import Description from "./Description.jsx";
import RoomsCards from "./RoomsCards.jsx";
import NewArrivals from "./NewArrivals/NewArrivals.jsx";
import Pros from "./Pros.jsx";
import Info2 from "./Info2.jsx";
import Articles from "./Articles/Articles.jsx";
import Newsletter from "./Newsletter.jsx";
import Footer from "./Footer.jsx";

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
        <RoomsCards />
        <NewArrivals 
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
