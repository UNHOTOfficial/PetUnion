import React from "react";
import "./FAQs.scss";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
export default function FAQsContent() {
  return (
    <div className="mb-5 mt-5">
      <div className="container text-center">
        <h2>Got A Question?</h2>
        <h6>Search, Or Choose From Categories Below.</h6>
        <div class="input-group mb-3 mx-auto mt-3 FAQsSearch">
          <input
            type="text"
            class="form-control"
            placeholder="Your Question..."
            aria-label="Your Question..."
            aria-describedby="button-addon2"
          ></input>
          <button
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            <i class="bi bi-search m-0"></i>
          </button>
        </div>
      </div>
      <div class="container text-center mb-3 mt-5 border rounded">
        <div className="pt-2">
      <i class="bi bi-menu-button h5"></i>
        <h5 className="m-0 border-bottom pb-3">
          Frequently Asked Questions Categories
        </h5>
        </div>
        <div class="row row-cols-2">
          <Link to={"/"}>
            <h6 class="col border-end border-bottom pb-2 m-0 pt-2">
              <i class="bi bi-person"></i>Accounts
            </h6>
          </Link>
          <Link to={"/"}>
            <h6 class="col border-bottom pb-2 m-0 pt-2">
              <i class="bi bi-cart4"></i>Making Orders
            </h6>
          </Link>
          <Link to={"/"}>
            <h6 class="col border-end border-bottom pt-2 pb-2 m-0">
              <i class="bi bi-truck"></i>Tracking Order
            </h6>
          </Link>
          <Link to={"/"}>
            <h6 class="col border-bottom pt-2 pb-2 m-0">
              <i class="bi bi-arrow-repeat"></i>Refund
            </h6>
          </Link>
          <Link to={"/"}>
            <h6 class="col border-bottom border-end pt-2 pb-2 m-0">
              <i class="bi bi-gift"></i>Discounts
            </h6>
          </Link>
          <Link to={"/"}>
            <h6 class="col  border-bottom pt-2 pb-2 m-0">
              <i class="bi bi-gem"></i>Guarantee
            </h6>
          </Link>
          <Link to={"/"}>
            <h6 class="col border-end pt-2 m-0 pb-2">
              <i class="bi bi-boxes"></i>Cooperation
            </h6>
          </Link>
          <Link to={"/"}>
            <h6 class="col border-end pt-2 m-0">
              <i class="bi bi-box2"></i>Products
            </h6>
          </Link>
        </div>
      </div>

<div>
  <div className="text-center mt-5 h5">
  <i class="bi bi-patch-question"></i>
    <h5>Questions</h5>
  </div>
  <div className="">
      <div>Some Collapse Here.</div>
      <div>Some Collapse Here.</div>
      <div>Some Collapse Here.</div>
      <div>Some Collapse Here.</div>
      </div>
    </div>
    </div>
  );
}
