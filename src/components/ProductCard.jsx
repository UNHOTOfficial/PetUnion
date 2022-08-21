import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
  let discountPercent;
  return (
    <div
      className="col-3 bg-light p-2 d-flex flex-column border text-dark justify-content-evenly cardProduct"
      style={{ minHeight: "500px" }}
    >
      <div className="rounded-3" style={{ backgroundColor: "#fff" }}>
        <Link to={`/products/${props.id}`}>
          <img
            className="mx-auto"
            src={props.image}
            alt={props.image}
            style={{ width: "18rem", height: "15rem", objectFit: "contain" }}
          ></img>
        </Link>
      </div>
      <div className="d-flex flex-column">
        <Link className="text-dark" to={props.id}>
          <span
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxHeight: "4.5rem",
            }}
          >
            {props.title}
          </span>
        </Link>
        <small className="text-capitalize text-muted">{props.category}</small>
      </div>
      <div className="d-flex">
        <div className="d-flex">
          <span>
            <i class="text-warning bi bi-star-fill"></i>
          </span>
          <span>
            <i class="text-warning bi bi-star-fill"></i>
          </span>
          <span>
            <i class="text-warning bi bi-star-fill"></i>
          </span>
          <span>
            <i class="text-warning bi bi-star"></i>
          </span>
          <span>
            <i class="text-warning bi bi-star"></i>
          </span>
        </div>
        <small className="ms-1 mt-1">{props.count}</small>
      </div>

      {props.discount === false ? (
        <span>${props.price}</span>
      ) : (
        <div className="d-flex justify-content-between">
          <div>
            <span>${props.price}</span>
            <s className="text-muted ms-2">${props.price - props.discount}</s>
          </div>
          <div className="d-flex flex-column">
            <span className="badge text-bg-danger rounded-pill">
              %
              {
                (discountPercent = Math.round(
                  100 - ((props.price - props.discount) * 100) / props.price
                ))
              }
            </span>
            {discountPercent >= 30 ? (
              <span className="text-danger fw-bold">OFFER</span>
            ) : (
              <></>
            )}
          </div>
        </div>
      )}
      {props.quantity <= 5 ? (
        <span className="text-danger">
          Only {props.quantity} left in stock - order soon.
        </span>
      ) : (
        <></>
      )}
      <div className="d-flex">
        <i style={{cursor:"pointer"}} class="bi bi-cart-plus"></i>
        <i style={{cursor:"pointer"}} class="bi bi-heart"></i>
        <i style={{cursor:"pointer"}} class="bi bi-bookmark"></i>
      </div>
    </div>
  );
}
