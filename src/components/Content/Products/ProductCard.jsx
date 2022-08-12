import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
  const discountPercent = Math.round(
    100 - ((props.price - props.discount) * 100) / props.price
  );
  return (
    <Link
      className="d-flex flex-column border  p-4 justify-content-evenly text-dark bg-light rounded-0 col-3"
      to={props.title}
    >
      <img
        className="mx-auto"
        src={props.image}
        alt={props.image}
        style={{ width: "12rem", height: "12rem", objectFit: "contain" }}
      ></img>
      <h6
        style={{
          display: "inline-block",
          textOverflow: "ellipsis",
          wordWrap: "break-word",
          overflow: "hidden",
          maxHeight: "3.5rem",
        }}
        className="mt-3"
      >
        {props.title}
      </h6>
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
      <div className="d-flex align-items-center justify-content-between">
       {discountPercent > 0 ?  <div className="d-flex align-items-center">
        <span className="fw-bold me-2">{props.price - props.discount}$</span>
        <small className="m-0" style={{textDecoration:"line-through"}}>{props.price}$</small>
        </div> : <span className="fw-bold me-2">{props.price}$</span>}
        <div className="d-flex flex-column">
          {props.discount !== 0 ? (
            <span class="badge text-bg-danger rounded-pill">
              {discountPercent}%
            </span>
          ) : (
            <></>
          )}
          {discountPercent > 30 ? (
            <span className="text-danger fw-bold">OFFER</span>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="d-flex align-items-center">
        <i className="bi bi-star-fill text-warning"></i>
        <small>{props.rate}</small>
      </div>
    </Link>
  );
}
