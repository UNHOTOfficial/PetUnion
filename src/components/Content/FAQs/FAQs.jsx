import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
export default function FAQsContent() {
  return (
    <div className="pb-5 pt-5 FAQs-Container">
      <div className="container text-center">
        <h2>Got A Question?</h2>
        <h6>Search, Or Choose From Categories Below.</h6>
        <div
          className="input-group mb-3 mx-auto mt-3 FAQsSearch"
          style={{ width: "30rem" }}
        >
          <input
            type="text"
            className="form-control"
            placeholder="Your Question..."
            aria-label="Your Question..."
            aria-describedby="button-addon2"
          ></input>
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            <i className="bi bi-search m-0"></i>
          </button>
        </div>
      </div>
      <div className="container text-center mb-3 mt-5 border rounded">
        <div className="pt-2">
          <i className="bi bi-menu-button h5"></i>
          <h5 className="m-0 border-bottom pb-3">
            Frequently Asked Questions Categories
          </h5>
        </div>
        <div className="row row-cols-2">
          <Link to={"/"}>
            <h6 className="col border-end border-bottom pb-2 m-0 pt-2">
              <i className="bi bi-person"></i>Accounts
            </h6>
          </Link>
          <Link to={"/"}>
            <h6 className="col border-bottom pb-2 m-0 pt-2">
              <i className="bi bi-cart4"></i>Making Orders
            </h6>
          </Link>
          <Link to={"/"}>
            <h6 className="col border-end border-bottom pt-2 pb-2 m-0">
              <i className="bi bi-truck"></i>Tracking Order
            </h6>
          </Link>
          <Link to={"/"}>
            <h6 className="col border-bottom pt-2 pb-2 m-0">
              <i className="bi bi-arrow-repeat"></i>Refund
            </h6>
          </Link>
          <Link to={"/"}>
            <h6 className="col border-bottom border-end pt-2 pb-2 m-0">
              <i className="bi bi-gift"></i>Discounts
            </h6>
          </Link>
          <Link to={"/"}>
            <h6 className="col  border-bottom pt-2 pb-2 m-0">
              <i className="bi bi-gem"></i>Guarantee
            </h6>
          </Link>
          <Link to={"/"}>
            <h6 className="col border-end pt-2 m-0 pb-2">
              <i className="bi bi-boxes"></i>Cooperation
            </h6>
          </Link>
          <Link to={"/"}>
            <h6 className="col border-end pt-2 m-0">
              <i className="bi bi-box2"></i>Products
            </h6>
          </Link>
        </div>
      </div>

      <div>
        <div className="text-center mt-5 h5">
          <i className="bi bi-patch-question"></i>
          <h5>Questions</h5>
        </div>
        <div className="container bg-light p-4 rounded-4">
          <div className="d-flex align-items-center">
            <div className="border-bottom py-2">Some Collapse Here.</div>
            <i className="bi bi-caret-down-fill"></i>
          </div>
          <div className="d-flex align-items-center">
            <div className="border-bottom py-2">Some Collapse Here.</div>
            <i className="bi bi-caret-down-fill"></i>
          </div>
          <div className="d-flex align-items-center">
            <div className="border-bottom py-2">Some Collapse Here.</div>
            <i className="bi bi-caret-down-fill"></i>
          </div>
          <div className="d-flex align-items-center">
            <div className="py-2">Some Collapse Here.</div>
            <i className="bi bi-caret-down-fill"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
