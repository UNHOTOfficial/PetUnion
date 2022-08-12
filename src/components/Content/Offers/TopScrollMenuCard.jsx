import React from "react";

export default function TopScrollMenuCard(props) {
  return (
    <div
      className="card border-0 bg-transparent justify-content-evenly border-end p-3 rounded-0"
      style={{ height: "18rem" }}
    >
      <img
        className="mx-auto"
        src={props.img}
        alt={props.img}
        style={{ width: "10rem", height: "10rem", objectFit: "contain" }}
      ></img>
      <h6
        className="mt-3"
        style={{
          display: "inline-block",
          textOverflow: "ellipsis",
          wordWrap: "break-word",
          overflow: "hidden",
          maxHeight: "3.5rem",
        }}
      >
        {props.title}
      </h6>
      <div className="d-flex align-items-center">
        <span className="fw-bold me-2">{props.price - props.discount}$</span>
        <small style={{ textDecoration: "line-through" }}>{props.price}$</small>
        <span className="badge text-bg-danger ms-auto">
          {Math.round(
            100 - ((props.price - props.discount) * 100) / props.price
          )}
          %
        </span>
      </div>
    </div>
  );
}
