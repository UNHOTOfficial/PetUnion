import React from "react";
import Blog from "./Blog";
import { Link } from "react-router-dom";

export default function BlogContainer() {
  const featured = [
    {
      img: "./imgs/healthy-fresh-pet-food-ingredients-dark-surface.jpg",
      time: "July 28, 2022",
      heading: "complete guide to buy food for your pet",
      paragraph:
        "confused with various pet foods? we are here to help you choose the best one that suits your pet.",
    },
  ];
  return (
    <div>
      <header className="lh-1 pt-3 pb-2 px-3">
        <div className="d-flex flex-nowrap justify-content-between">
          <div className="d-flex align-items-center">
            <img
              className="me-4"
              src={require("../imgs/Logo/Logo-Black.png")}
              alt="Blog-logo"
              style={{ width: "4rem" }}
            ></img>
            <div className="d-flex">
              <h5 className="me-2">Home</h5>
              <h5 className="me-2">About</h5>
              <h5 className="me-2">Shop</h5>
            </div>
          </div>
          <h1>ShopUnion</h1>
          <div className="d-flex align-items-center">
            <button className="btn btn-outline-dark me-2">
              Sign Up | Sign In
            </button>
            <button className="btn btn-dark">Subscribe</button>
          </div>
        </div>
      </header>
      <div className="nav-scroller border-top ">
        <nav className="nav d-flex justify-content-evenly mt-1">
          <Link className="link-secondary p-2 text-capitalize text-decoration-none" to={"/"}>
            Technology
          </Link>
          <Link className="link-secondary p-2 text-capitalize text-decoration-none" to={"/"}>
            Fashion
          </Link>
          <Link className="link-secondary p-2 text-capitalize text-decoration-none" to={"/"}>
            Health
          </Link>
          <Link className="link-secondary p-2 text- text-decoration-none" to={"/"}>
            Home
          </Link>
          <Link className="link-secondary p-2 text-capitalize text-decoration-none" to={"/"}>
            Culture
          </Link>
          <Link className="link-secondary p-2 text-capitalize text-decoration-none" to={"/"}>
            Sport
          </Link>
          <Link className="link-secondary p-2 text-capitalize text-decoration-none" to={"/"}>
            Travel
          </Link>
          <span className="text-secondary d-flex align-items-center">|</span>
          
          <Link className="link-secondary p-2 text-capitalize text-decoration-none" to={"/"}>
            Editors Picks
          </Link>
          <Link className="link-secondary p-2 text-capitalize text-decoration-none" to={"/"}>
            popular
          </Link>
          <Link className="link-secondary p-2 text-capitalize text-decoration-none" to={"/"}>
            New
          </Link>
        </nav>
      </div>

      <Blog />

      <footer className="bg-light">
        <div className="d-flex justify-content-center">
          © 2022 Company, Inc. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
