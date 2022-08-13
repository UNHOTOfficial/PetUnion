import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
  const discountPercent = Math.round(
    100 - ((props.price - props.discount) * 100) / props.price
  );
  return (
    <Link
      classNameName="d-flex flex-column border  p-4 justify-content-evenly text-dark bg-light rounded-0 col-3"
      to={props.id}
    >
      <img
        classNameName="mx-auto"
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
        classNameName="mt-3"
      >
        {props.title}
      </h6>
      <p
        classNameName="overflow-hidden text-muted mt-2"
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
      <div classNameName="d-flex align-items-center justify-content-between">
       {discountPercent > 0 ?  <div classNameName="d-flex align-items-center">
        <span classNameName="fw-bold me-2">{props.price - props.discount}$</span>
        <small classNameName="m-0" style={{textDecoration:"line-through"}}>{props.price}$</small>
        </div> : <span classNameName="fw-bold me-2">{props.price}$</span>}
        <div classNameName="d-flex flex-column">
          {props.discount !== 0 ? (
            <span className="badge text-bg-danger rounded-pill">
              {discountPercent}%
            </span>
          ) : (
            <></>
          )}
          {discountPercent > 30 ? (
            <span classNameName="text-danger fw-bold">OFFER</span>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div classNameName="d-flex align-items-center">
        <i classNameName="bi bi-star-fill text-warning"></i>
        <small>{props.rate}</small>
      </div>
    </Link>
  );
}
