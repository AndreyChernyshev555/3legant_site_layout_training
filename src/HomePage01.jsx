import React, {useState} from "react";
import "./HomePage01.scss";
import Offer from "./Components/Offer/Offer.jsx";
import Head from "./Components/Head.jsx";
import Slider from "./Components/Slider/Slider.jsx";
import Description from "./Components/Description.jsx";
import RoomsCards from "./Components/RoomsCards.jsx";
import NewArrivals from "./Components/NewArrivals/NewArrivals.jsx";
import Pros from "./Components/Pros.jsx";
import Info2 from "./Components/Info2.jsx";
import Articles from "./Components/Articles/Articles.jsx";
import Newsletter from "./Components/Newsletter.jsx";
import Footer from "./Components/Footer.jsx";

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
