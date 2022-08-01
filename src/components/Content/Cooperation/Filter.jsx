import React from "react";

export default function Filter() {
  return (
    <div
      className="w-25 bg-light text-dark p-4 rounded-5 d-flex flex-column justify-content-evenly"
      style={{ height: "22rem" }}
    >
      <h5>
        <i className="bi bi-funnel"></i>Filter
      </h5>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Categories
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </div>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Locations
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h5>Amount:</h5>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            checked
          ></input>
          <label className="form-check-label" for="flexRadioDefault2">
            Wholesale
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          ></input>
          <label className="form-check-label" for="flexRadioDefault1">
            Middle
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          ></input>
          <label className="form-check-label" for="flexRadioDefault1">
            Retail
          </label>
        </div>
      </div>
      <button className="btn btn-warning rounded-5">Apply Filters</button>
    </div>
  );
}
