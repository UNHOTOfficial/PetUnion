import React from "react";
import { Link } from "react-router-dom";

export default function Tiles(props) {
  return (
    <div
      className="col-3 bg-light rounded-2 text-dark rounded-5 p-4 border"
      style={{ width: "20rem" }}
    >
      <h3 className="text-capitalize">{props.heading}</h3>
      <div
        className="row p-2 rounded-5"
        style={{ backgroundColor: "#fff", height: "24rem" }}
      >
        {props.imgs.map((img) => (
          <img
            key={img}
            style={{ maxHeight: "11.6rem", objectFit: "contain" }}
            className="col-6 p-1"
            src={img}
            alt={img.replace(/^.*[\\\/]/)}
          ></img>
        ))}
      </div>
      <Link to={"/"}>See More...</Link>
    </div>
  );
}
