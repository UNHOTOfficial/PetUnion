import React from "react";

export default function Filter() {
  return (
    <div
      className="w-25 bg-light text-dark p-4 rounded-5 d-flex flex-column justify-content-evenly"
      style={{ height: "22rem" }}
    >
      <h5>
        <i class="bi bi-funnel"></i>Filter
      </h5>
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Categories
        </button>
        <ul class="dropdown-menu">
          <li>
            <a class="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </div>
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Locations
        </button>
        <ul class="dropdown-menu">
          <li>
            <a class="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h5>Amount:</h5>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            checked
          ></input>
          <label class="form-check-label" for="flexRadioDefault2">
            Wholesale
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          ></input>
          <label class="form-check-label" for="flexRadioDefault1">
            Middle
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          ></input>
          <label class="form-check-label" for="flexRadioDefault1">
            Retail
          </label>
        </div>
      </div>
      <button className="btn btn-warning rounded-5">Apply Filters</button>
    </div>
  );
}
