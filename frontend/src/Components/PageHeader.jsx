import React from "react";
import "./PageHeader.scss";

export default function PageHeader(props) {
  return <div className="page-header">{props.text}</div>;
}
