import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/carts/1")
      .then((response) => {
        setCart(response.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProducts(response.data);
    });
  }, []);
  return (
    <div classNameName="container justify-content-around my-3">
      <div classNameName="d-flex">
        <div classNameName="rounded-3 bg-light border p-5 w-75 me-3">
          {/* <div classNameName="d-flex flex-column align-items-center">
            <img
              src={require("./imgs/shopping-cart.png")}
              alt="Cart"
              style={{ width: "8rem" }}
            ></img>
            <h3 classNameName="mt-3">Cart Is Empty!</h3>
            <p classNameName="text-capitalize text-muted m-0 mt-2 mb-1">
              you can see pages bellow:
            </p>
            <div classNameName="d-flex w-25 justify-content-evenly">
              <Link classNameName="text-link" to={"/offers"}>
                Hot Deals
              </Link>
              <p>|</p>
              <Link classNameName="text-link" to={"products"}>
                Products
              </Link>
            </div>
          </div> */}
          {cart.map((cartProduct) => (
            <div classNameName="row">
              <div classNameName="d-flex col-12 border-bottom rounded-0 bg-transparent align-items-center justify-content-between">
                <p classNameName="m-0 p-3">{cartProduct.productId}</p>
                <div classNameName="d-flex justify-content-end">
                  <span classNameName="btn btn-outline-warning border-end-0">
                    <i className="bi bi-plus m-0"></i>
                  </span>
                  <input
                    classNameName="form-control"
                    style={{ width: "20%" }}
                  ></input>
                  <span classNameName="btn btn-outline-warning border-start-0">
                    <i className="bi bi-dash m-0"></i>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link
          classNameName="border rounded-3 d-flex flex-column bg-light border text-dark p-3 w-25"
          to={"/account"}
          style={{ height: "fit-content" }}
        >
          <div classNameName="d-flex align-items-center">
            <img
              src={require("./imgs/log-in.png")}
              alt="Login"
              style={{ width: "5rem" }}
            ></img>
            <h3>Sign In!</h3>
            <h3 classNameName="ms-auto">
              <i className="bi bi-chevron-right"></i>
            </h3>
          </div>
          <p classNameName="text-capitalize">
            sign in to your account to save your cart, and get the best shopping
            experience.
          </p>
        </Link>
      </div>
      <div classNameName="rounded-3 border bg-light d-flex flex-column p-4 mt-3">
        <h3>Recent Views</h3>
        <div classNameName="d-flex align-items-center">
          <i className="bi bi-arrow-left-circle-fill fs-3"></i>
          <div classNameName="d-flex overflow-hidden">
            {products.map((product) => (
              <div
                classNameName="card border-0 border-end bg-transparent justify-content-evenly px-2"
                key={product.id}
              >
                <img
                  classNameName="mx-auto"
                  src={product.image}
                  alt={product.image.replace(/^.*[\\\/]/, "")}
                  style={{
                    width: "12rem",
                    height: "12rem",
                    objectFit: "contain",
                  }}
                ></img>
                <h6
                  classNameName="mt-4"
                  style={{
                    display: "inline-block",
                    textOverflow: "ellipsis",
                    wordWrap: "break-word",
                    overflow: "hidden",
                    maxHeight: "3.5rem",
                  }}
                >
                  {product.title}
                </h6>
                <p>{product.price}$</p>
              </div>
            ))}
          </div>
          <i className="bi bi-arrow-right-circle-fill fs-3 ms-3"></i>
        </div>
      </div>
    </div>
  );
}
