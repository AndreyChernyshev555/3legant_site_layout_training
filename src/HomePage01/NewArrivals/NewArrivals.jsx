import React from "react";
import NewArrivalsItem from "./NewArrivalsItem.jsx";

export default function NewArrivals(props) {
  return (
    <div className="new-arrivals">
      <div className="new-arrivals_text">
        <div className="new-arrivals_text-item1">New arrivals</div>
        <a className="new-arrivals_text-item2" href="https://dzen.ru">
          More products &#8594;
        </a>
      </div>
      <div className="new-arrivals_goods">
        <NewArrivalsItem 
          path={"../public/furniture/sofa.png"}
          rating={5}
          goods={"Loveseat Sofa"}
          price={"$199.00"}
          addFunc={props.addFunc}
          oldPrice={"$400.00"}
        />
        <NewArrivalsItem
          path={"../public/furniture/lamp.png"}
          rating={1}
          goods={"Table Lamp"}
          price={"$24.99"}
          addFunc={props.addFunc}
        />
        <NewArrivalsItem
          path={"../public/furniture/beige_lamp.png"}
          rating={4}
          goods={"Beige Table Lamp"}
          price={"$24.99"}
          addFunc={props.addFunc}
        />
        <NewArrivalsItem
          path={"../public/furniture/cart.png"}
          rating={5}
          goods={"Bamboo basket"}
          price={"$24.99"}
          addFunc={props.addFunc}
        />
        <NewArrivalsItem
          path={"../public/furniture/toster.png"}
          rating={3}
          goods={"Toaster"}
          price={"$224.99"}
          addFunc={props.addFunc}
        />
      </div>
    </div>
  );
}
