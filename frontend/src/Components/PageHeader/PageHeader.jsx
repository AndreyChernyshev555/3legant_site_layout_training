import React from "react";

export default function PageHeader(props) {
  return (
    <div
      style={{
        fontFamily: "Poppins",
        fontSize: "40px",
        fontWeight: "500",
        lineHeight: "44px",
        letterSpacing: "-0.4px",
        padding: "3% 11.1% 3% 11.1%",
      }}
    >
      {props.text}
    </div>
  );
}
