import React from "react";
import image from "./arbyz.jfif";
import "./error-indicator.css";
export default function ErrorIndicator() {
  return (
    <div className="d-flex justify-content-center col-md-12">
      <img src={image} className="" />
    </div>
  );
}
