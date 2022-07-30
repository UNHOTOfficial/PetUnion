import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.scss";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import "../dark.scss";

export default function Header() {
  const toggleDarkmode = () => {
    const darkmodeToggle = document.querySelector(
      ".header-darkmode-switch-input"
    );
    document.body.classList.toggle("dark");
  };

  const searchEnter = ()=>{
    document.querySelector('.Hsearch').addEventListener('keypress', (e)=>{
      if (e.key === 'Enter') {
        e.preventDefault();
//code Here
      }
    });
  }


  return (
    <header className="p-3 bg-dark text-white bg-material header">
      <Link to={'/'}>
      <img
        className="Logo ms-2 navbar-brand float-left"
        style={{width:"3rem", float:'left'}}
        alt="Logo"
        src= {require('../Content/imgs/Logo/Logo.png')}
        ></img>
        </Link>
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          ></a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 align-items-center">
            <li className="bg-transparent">
              <nav className="navbar navbar-expand-lg bg-transparent">
                <div className="container-fluid">
                  <div
                    className="collapse navbar-collapse"
                    id="navbarNavDarkDropdown"
                  >
                    <ul className="navbar-nav">
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle Hitem text-text"
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
                            <Link className="dropdown-item Hitem" to={"/#"}>
                              <i className="bi bi-info-circle"></i>About
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item Hitem" to={"/#"}>
                              <i className="bi bi-info-circle"></i>About
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item Hitem" to={"/#"}>
                              <i className="bi bi-info-circle"></i>About
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </li>
            <li>
              <Link className="nav-link px-2 text-text Hitem" to={"/"}>
                <i className="bi bi-house"></i>Home
              </Link>
            </li>
            <li>
              <Link className="nav-link px-2 text-text Hitem" to={"/FAQs"}>
                <i className="bi bi-question-circle"></i>FAQs
              </Link>
            </li>

            <li>
              <Link className="nav-link px-2 text-text Hitem" to={"/About"}>
                <i className="bi bi-info-circle"></i>About
              </Link>
            </li>
          </ul>
          <form
            className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
            role="search"
          >
            <input
            onFocus={searchEnter}
              type="search"
              className="form-control form-control-dark text-white bg-input border-0 Hsearch"
              placeholder="Search..."
              aria-label="Search"
            ></input>
          </form>

          <div className="text-end d-flex">
            <Link to="/Account">
              <button type="button" className="btn btn-outline-text me-2">
                Sign up / Sign In
              </button>
            </Link>
            <button
              type="button"
              className="btn btn-outline-text ms-2 HCartButton"
            >
              <i className="bi bi-cart me-2"></i>Cart
            </button>
            <div className="form-check form-switch ms-5 mt-1">
              <input
                onClick={toggleDarkmode}
                className="form-check-input header-darkmode-switch-input"
                type="checkbox"
                role="switch"
                id="darkmodeToggle"
              ></input>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
