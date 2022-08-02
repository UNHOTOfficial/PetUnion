import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss"

export default function Header() {

  const toggleDarkmode = () => {
    const darkmodeToggle = document.querySelector(
      ".header-darkmode-switch-input"
    );
    document.body.classList.toggle("dark");
  };

  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <Link to={"/"} class="navbar-brand">
          <img className="Header-logo"
            src={require("../Content/imgs/Logo/Logo-Black.png")}
            style={{ width: "5rem" }}
          ></img>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
          <ul class="navbar-nav mb-2 mb-lg-0 w-75">
            <li class="nav-item">
              <a class="nav-link active text-dark" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-dark" href="#">
                Link
              </a>
            </li>
            <li className="nav-items w-75 mx-auto">
          <form class="d-flex" role="search">
            <input
              class="form-control rounded-start border-end-0 rounded-0 bg-input"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
          <button type="submit" class="btn btn-warning border-start-0 rounded-end rounded-0" id="basic-addon1"><i class="bi bi-search m-0"></i></button>
          </form>
            </li>
          </ul>
        <div className="d-flex align-items-center w-25 justify-content-evenly">
        <button className="btn btn-outline-dark">Sign In</button>
        <button className="btn btn-warning">Get Started</button>
        <button className="btn btn-outline-dark"><i class="bi bi-cart m-0"></i></button>
        <div className="form-check form-switch">
              <input
                onClick={toggleDarkmode}
                className="form-check-input header-darkmode-switch-input"
                type="checkbox"
                role="switch"
                id="darkmodeToggle"
              ></input></div>
            </div>
        </div>
              </div>
    </nav>
  );
}
