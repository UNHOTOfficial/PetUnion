import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.scss";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link, Route, Router, Routes } from "react-router-dom";
import FAQs from "../pages/FAQs";

export default function Header() {
  return (
    <header className="p-3 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          ></a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 align-items-center">
            <li>
              <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                  <div
                    className="collapse navbar-collapse"
                    id="navbarNavDarkDropdown"
                  >
                    <ul className="navbar-nav">
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          href="#"
                          id="navbarDarkDropdownMenuLink"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="bi bi-list"></i>Categories
                        </a>
                        <ul
                          className="dropdown-menu dropdown-menu-dark"
                          aria-labelledby="navbarDarkDropdownMenuLink"
                        >
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
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </li>
            <li>
              <a href="#" className="nav-link px-2 text-white Hitem">
                <i className="bi bi-house"></i>Home
              </a>
            </li>
            <li>
               <a href="/FAQs" className="nav-link px-2 text-white Hitem">
                <i className="bi bi-question-circle"></i>FAQs
              </a>
            </li>

            <li>
              <a href="#" className="nav-link px-2 text-white Hitem">
                <i className="bi bi-info-circle"></i>About
              </a>
            </li>
          </ul>
          <form
            className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
            role="search"
          >
            <input
              type="search"
              className="form-control form-control-dark text-white bg-dark Hsearch"
              placeholder="Search..."
              aria-label="Search"
            ></input>
          </form>

          <div className="text-end">
            <button type="button" className="btn btn-outline-light me-2">
              Login
            </button>
            <button type="button" className="btn btn-warning">
              Sign-up
            </button>
          </div>
        </div>
      </div>
          </header>
  );
}
