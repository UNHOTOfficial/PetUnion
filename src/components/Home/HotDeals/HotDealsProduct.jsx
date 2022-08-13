import React from "react";
import { Link } from "react-router-dom";
import "./HotDealsProduct.scss";
import "../../dark.scss";

export default function HotDealsProduct(props) {
  return (
    <React.Fragment>
      <Link
        className="card ProductCard ProductItem m-3 ms-2 me-2 user-select-none HotDealProductCard rounded-5  bg-background-secondary border-divider text-dark"
        to={`/Products/${props.id}`}
        style={{ width: "18rem", height:"22rem" }}
      >
        <img
          src={props.img}
          className="card-img-top mx-auto mt-3 HotDealProductCard"
          style={{ width: "10rem", height: "10rem", objectFit: "contain" }}
          alt={props.name}
        ></img>
        <div className="card-body d-flex flex-column justify-content-evenly">
          <p
            className="card-title"
            style={{
              display: "inline-block",
              textOverflow: "ellipsis",
              wordWrap: "break-word",
              overflow: "hidden",
              maxHeight: "3rem",
            }}
          >
            {props.name}
          </p>
          <div className="d-flex flex-column">
            <div className="d-flex w-100 align-items-baseline justify-content-between">
              {props.hasDiscount === true ? (
                <React.Fragment>
                  <div className="d-flex flex-column">
                    <h5 className="">{props.price - props.discount}$</h5>
                    <h6 className="mx-1 text-secondary">
                      <s>{props.price}$</s>
                    </h6>
                  </div>
                  <div className="d-flex flex-column">
                    <span className="badge badge-pill bg-danger">
                      {Math.round(
                        100 -
                          ((props.price - props.discount) * 100) / props.price
                      )}
                      %
                    </span>
                    <small className="fw-bold text-danger">OFFER</small>
                  </div>
                </React.Fragment>
              ) : (
                <div className="d-flex flex-column">
                  <h5 className="text-dark">{props.price}$</h5>
                  <br />
                </div>
              )}
            </div>
          </div>

          <div
            className="progress HotDealsProgress"
            style={{ height: "0.4rem" }}
          >
            <div
              className="progress-bar bg-warning HotDeals-progress-bar"
              role="progressbar"
              aria-valuenow={70}
              aria-valuemin={0}
              aria-valuemax={10}
              style={{ width: "70%" }}
            ></div>
          </div>
        </div>
      </Link>
    </React.Fragment>
  );
}
