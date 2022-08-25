import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthContainer from "../AuthContainer";
import "./Header.scss";

export default function Header() {
  const [logo, setLogo] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/configs")
      .then((response) => {
        setLogo(response.data[0].logo);
      })
      .catch((error) => {
        console.log(error.message);
      });

    localStorage.getItem("AuthKey") !== null
      ? setIsLoggedIn(true)
      : setIsLoggedIn(false);
  }, []);

  const toggleDarkmode = () => {
    const darkmodeToggle = document.querySelector(
      ".header-darkmode-switch-input"
    );
    document.body.classList.toggle("dark");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand">
          <img
            className="Header-logo"
            src={logo}
            alt="Logo"
            style={{ width: "5rem" }}
          ></img>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0 w-75">
            <li className="nav-items w-75 mx-auto">
              <form className="d-flex" role="search">
                <input
                  className="form-control rounded-start border-end-0 rounded-0 bg-input"
                  type="search"
                  placeholder="Search For Products Or Brands..."
                  aria-label="Search"
                ></input>
                <button
                  type="submit"
                  className="btn btn-warning border-start-0 rounded-end rounded-0"
                  id="basic-addon1"
                >
                  <i className="bi bi-search m-0"></i>
                </button>
              </form>
            </li>
          </ul>
          <div className="d-flex align-items-center w-25 justify-content-evenly">
            <AuthContainer isLoggedIn={isLoggedIn} name={"user"} />
            <Link className="btn btn-outline-dark" to={"/cart"}>
              <i className="bi bi-cart m-0"></i>
            </Link>
            <div className="form-check form-switch">
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
    </nav>
  );
}
