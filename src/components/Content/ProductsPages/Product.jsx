import React from "react";
import TopScrollMenu from "../Offers/TopScrollMenu";
import { Link } from "react-router-dom";

export default function Product(props) {
  let price;
let discountPercent;

  return (
    <div classNameName="container-fluid my-3">
      <div classNameName="row align-items-start">
        <img
          classNameName="col-4 mt-5"
          src={props.image}
          alt={props.image}
          style={{ height: "auto", objectFit: "contain" }}
        ></img>
        <div classNameName="col-5 d-flex flex-column">
          <div>
            <h4>{props.title}</h4>
            <div classNameName="rating-section d-flex">
              <div classNameName="d-flex">
                <i className="bi bi-star"></i>
                <i className="bi bi-star"></i>
                <i className="bi bi-star"></i>
                <i className="bi bi-star"></i>
                <i className="bi bi-star"></i>
              </div>
              <span>{props.count} Ratings</span>
            </div>
          </div>
          <hr></hr>
          <div classNameName="price-section">
            {props.hasDiscount === true ? (
              <div classNameName="d-flex flex-column">
                <div classNameName="d-flex">
                  <span classNameName="text-danger">
                    {discountPercent = Math.round(
                      100 - ((props.price - props.discount) * 100) / props.price
                    )}
                    %
                  </span>
                  <span>{(price = props.price - props.discount)}</span>
                </div>
                <span>
                  Last Price:
                  <span style={{ textDecoration: "line-through" }}>
                    {props.price}$
                  </span>
                </span>
              </div>
            ) : (
              <div classNameName="d-flex">
                <span>{props.price}</span>
              </div>
            )}
          </div>
          <hr></hr>
          <div classNameName="info-section">
            <span classNameName="fw-bold">About This Product</span>
            <p>{props.description}</p>
          </div>
          <div classNameName="product-related bg-light text-dark rounded-3 border"></div>
        </div>
        <div classNameName="col-3" style={{height:"38rem"}}>
          <div classNameName="bg-light rounded-3 border p-3 d-flex flex-column h-100 justify-content-evenly">
            <div classNameName="d-flex align-items-center justify-content-evenly">
            <h5 classNameName="fw-bold">{price}$</h5>
            <span classNameName="badge text-bg-danger">{discountPercent}%</span>
            </div>
            <span classNameName="text-center">
              $155.78 delivery <span classNameName="fw-bold">August 29 - September 14</span>.{" "}
              <Link to="/FAqs">Details</Link>
            </span>
            <small>
              <i className="bi bi-geo-fill text-danger"></i>Delivery To: <span classNameName="fw-bold">"Country"</span>
            </small>
            <span>Only "Quantity" Left In Stock.</span>
            <div classNameName="d-flex align-items-center justify-content-around">
              <span>Quantity:</span>
              <select
                className="form-select form-select-sm w-25"
                aria-label="Default select example"
              >
                <option selected value="1">
                  1
                </option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <button classNameName="btn btn-warning rounded-4">Add To Cart</button>
            <button classNameName="btn btn-outline-warning rounded-4">
              Buy Now
            </button>
            <span>
              <i className="bi bi-lock-fill"></i>Secure Transaction
            </span>
            <span>Ship From: "Seller Location"</span>
            <span>Sold By: "Seller"</span>
            <span>Return Policy:</span>
            <span>Warranty Policy:</span>
            <div classNameName="d-flex flex-column">
              <h6>Add An Accessory</h6>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                ></input>
                <label className="form-check-label" for="flexCheckChecked">
                  Microsoft 365
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                ></input>
                <label className="form-check-label" for="flexCheckChecked">
                  Eset Premium
                </label>
              </div>{" "}
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                ></input>
                <label className="form-check-label" for="flexCheckChecked">
                  Windows 11 Home Edition
                </label>
              </div>{" "}
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                ></input>
                <label className="form-check-label" for="flexCheckChecked">
                  MacAfee
                </label>
              </div>
            </div>
          </div>
        </div>
        <TopScrollMenu title="Related Products" />
      </div>
    </div>
  );
}
