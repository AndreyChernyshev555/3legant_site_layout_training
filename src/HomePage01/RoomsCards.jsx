import React from "react";

export default function RoomsCards() {
  return (
    <div className="rooms-cards">
      <div className="rooms-cards_main">
        <div className="rooms-cards_main-text">
          <div>Living Room</div>
          <div className="rooms-cards_link">Shop Now</div>
        </div>
        <img className="rooms-cards_img" src="../public/living_room.svg" />
      </div>
      <div className="rooms-cards_sub">
        <div className="rooms-cards_sub-item">
          <div className="rooms-cards_sub-text">
            <div>Bedroom</div>
            <div className="rooms-cards_link">Shop Now</div>
          </div>
          <img className="rooms-cards_img" src="../public/bedroom.svg" />
        </div>
        <div className="rooms-cards_sub-item">
          <div className="rooms-cards_sub-text">
            <div>Kitchen</div>
            <div className="rooms-cards_link">Shop Now</div>
          </div>
          <img className="rooms-cards_img" src="../public/kitchen.svg" />
        </div>
      </div>
    </div>
  );
}
