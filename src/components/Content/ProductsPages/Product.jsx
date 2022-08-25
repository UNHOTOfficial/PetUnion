import React from "react";
import TopScrollMenu from "../../ScrollMenu";
import { Link } from "react-router-dom";
import RatingStars from "../../RatingStars";
import Comments from "../../Comments";
import BreadCrumb from "../../BreadCrumb";

export default function Product(props) {
  let price;
  let discountPercent;

  return (
    <div className="container-fluid my-3">
      <BreadCrumb pageName={props.title} category={props.category} type={props.type}/>
      <div className="row align-items-start">
        <img
          className="col-4 mt-5"
          src={props.image}
          alt={props.image}
          style={{ height: "auto", objectFit: "contain" }}
        ></img>
        <div className="col-5 d-flex flex-column">
          <div>
            <h4>{props.title}</h4>
            <div className="rating-section d-flex">
              <RatingStars rate={props.rate} />
              <span>{props.count} Ratings</span>
            </div>
          </div>
          <hr></hr>
          <div className="price-section">
            {props.hasDiscount === true ? (
              <div className="d-flex flex-column">
                <div className="d-flex align-items-center">
                  <span className="fs-5 fw-bold me-2">
                    $
                    {Math.floor((price = props.price - props.discount) * 100) /
                      100}
                  </span>
                  <span className="badge text-bg-danger">
                    {
                      (discountPercent = Math.round(
                        100 -
                          ((props.price - props.discount) * 100) / props.price
                      ))
                    }
                    %
                  </span>
                </div>
                <span className="text-muted">
                  Last Price:
                  <span style={{ textDecoration: "line-through" }}>
                    {Math.floor(props.price * 100) / 100}$
                  </span>
                </span>
              </div>
            ) : (
              <div className="d-flex w-25 justify-content-between">
                <span>{Math.floor(props.price * 100) / 100}</span>
              </div>
            )}
          </div>
          <hr></hr>
          <div className="d-flex flex-column">
            {Object.entries(props.specifications).map((specification) => (
              <div className="d-flex  justify-content-between">
                <span className="fw-bold text-capitalize">
                  {specification[0]}
                </span>
                <span>{specification[1]}</span>
              </div>
            ))}
          </div>
          <hr></hr>
          <div className="info-section">
            <span className="fw-bold">About This Product</span>
            <p>{props.description}</p>
          </div>
          <div className="product-related bg-light text-dark rounded-3 border"></div>
        </div>
        <div className="col-3" style={{ height: "38rem" }}>
          <div className="bg-light rounded-3 border p-3 d-flex flex-column h-100 justify-content-evenly">
            <div className="d-flex align-items-center justify-content-evenly">
              <h5 className="fw-bold">{Math.floor(price)}$</h5>
              <span className="badge text-bg-danger">{discountPercent}%</span>
            </div>
            <span className="text-center">
              $155.78 delivery
              <span className="fw-bold">August 29 - September 14</span>.
              <Link to="/FAqs">Details</Link>
            </span>
            <small>
              <i className="bi bi-geo-fill text-danger"></i>Delivery To:
              <span className="fw-bold">"Country"</span>
            </small>
            <span>Only "Quantity" Left In Stock.</span>
            <div className="d-flex align-items-center justify-content-around">
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
            <button className="btn btn-warning rounded-4">Add To Cart</button>
            <button className="btn btn-outline-warning rounded-4">
              Buy Now
            </button>
            <span>
              <i className="bi bi-lock-fill"></i>Secure Transaction
            </span>
            <span>Ship From: "Seller Location"</span>
            <span>Sold By: "Seller"</span>
            <span>Return Policy:</span>
            <span>Warranty Policy:</span>
            <div className="d-flex flex-column">
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
              </div>
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
              </div>
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
        <Comments
          rate="2"
          heading="Very Nice!"
          date="8/24/2022"
          fullName="John Doe"
          description="Very nice products. strongly recommend it"
          generalRate={props.rate}
          count={props.count}
        />
      </div>
    </div>
  );
}
