import React from "react";

export default function Collection() {
  return (
    <div className="collection">
      <div className="collection_main">
        <div className="collection_main-text">
          <div>Living Room</div>
          <div className="collection_link">Shop Now</div>
        </div>
        <img className="collection_img" src="../public/living_room.svg" />
      </div>
      <div className="collection_sub">
        <div className="collection_sub-item">
          <div className="collection_sub-text">
            <div>Bedroom</div>
            <div className="collection_link">Shop Now</div>
          </div>
          <img className="collection_img" src="../public/bedroom.svg" />
        </div>
        <div className="collection_sub-item">
          <div className="collection_sub-text">
            <div>Kitchen</div>
            <div className="collection_link">Shop Now</div>
          </div>
          <img className="collection_img" src="../public/kitchen.svg" />
        </div>
      </div>
    </div>
  );
}
