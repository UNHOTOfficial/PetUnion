import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
  return (
    <Link
      className="card p-4 justify-content-evenly text-dark"
      to={props.title}
    >
      <img
        className="mx-auto"
        src={props.image}
        alt={props.image}
        style={{ width: "12rem", height: "12rem", objectFit: "contain" }}
      ></img>
      <h6 className="mt-3">{props.title}</h6>
      <p
        className="overflow-hidden text-muted mt-2"
        style={{
          display: "inline-block",
          textOverflow: "ellipsis",
          wordWrap: "break-word",
          overflow: "hidden",
          maxHeight: "6rem",
        }}
      >
        {props.description}
      </p>
      <p>{props.price}$</p>
      <div className="d-flex align-items-center">
        <i className="bi bi-star-fill text-warning"></i>
        <small>{props.rate}</small>
      </div>
    </Link>
  );
}
