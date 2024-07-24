import React, { useState, useEffect} from "react";

const proportion = 60 / 1920;

export default function Logos() {
  const [size, setSize] = useState(proportion * window.innerWidth);
  console.log(size);
  useEffect(() => {
    const resize = () => {
      setSize(proportion * window.innerWidth);
    };
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  let images = [];
  for (let i = 1; i <= 6; i++) {
    const address = "../public/img/team_logos/logo" + i + ".svg";
    images.push(
      <div
        className="logos_item"
        style={{
          backgroundImage: `url(${address})`,
          backgroundSize: "cover",
          height: `${size}px`,
        }}
      ></div>
    );
  }
  return <div className="logos">{images}</div>;
}
