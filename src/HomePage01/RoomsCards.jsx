import React from "react";

export default function RoomsCards() {
  return (
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
  );
}
