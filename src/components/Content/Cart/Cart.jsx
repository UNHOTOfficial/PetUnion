import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import TopScrollMenu from "../../ScrollMenu";
import TopSccrollMenu from "../../ScrollMenu";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/products`)
      .then((res) => {
        setProducts(res.data);
        setCart(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="container justify-content-around my-3">
      <div className="d-flex">
        <div className="rounded-3 bg-light border p-3 w-75 me-3">
          <div className="d-flex flex-column">
            <span className="fw-bold fs-5">Cart</span>
            <small className="text-muted">{cart.length} Products</small>
          </div>
          {/* <div className="d-flex flex-column align-items-center">
            <img
              src={require("./imgs/shopping-cart.png")}
              alt="Cart"
              style={{ width: "8rem" }}
            ></img>
            <h3 className="mt-3">Cart Is Empty!</h3>
            <p className="text-capitalize text-muted m-0 mt-2 mb-1">
              you can see pages bellow:
            </p>
            <div className="d-flex w-25 justify-content-evenly">
              <Link className="text-link" to={"/offers"}>
                Hot Deals
              </Link>
              <p>|</p>
              <Link className="text-link" to={"products"}>
                Products
              </Link>
            </div>
          </div> */}
          <div className="">
            {cart.map((cartProduct) => (
              <div className="d-flex row  border-bottom rounded-0 bg-transparent align-items-center justify-content-between py-2">
                <Link className="col-3" to={`/products/${cartProduct._id}`}>
                  <img
                    src={cartProduct.image}
                    alt={cartProduct.image.replace(/^.*[\\\/]/)}
                    style={{
                      width: "12rem",
                      height: "12rem",
                      objectFit: "contain",
                    }}
                  ></img>
                </Link>
                <div className="col-7 d-flex flex-column">
                  <Link
                    className="m-0 text-dark mb-2 fw-bold fs-5"
                    to={`/products/${cartProduct._id}`}
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: "1",
                      lineClamp: "1",
                      WebkitBoxOrient: "vertical",
                      maxHeight: "2.5rem",
                    }}
                  >
                    {cartProduct.title}
                  </Link>

                  {Object.entries(cartProduct.specifications).map(
                    (specification) => (
                      <div className="d-flex justify-content-between">
                        <span className="text-capitalize fw-bold">
                          {specification[0]}
                        </span>
                        <span>{specification[1]}</span>
                      </div>
                    )
                  )}
                </div>
                <div className="col-2 d-flex flex-column align-items-center">
                  {cartProduct.hasDiscount === true ? (
                    <div className="row">
                      <span className="text-danger col-2">
                        {Math.round(
                          100 -
                            ((cartProduct.price - cartProduct.discount) * 100) /
                              cartProduct.price
                        )}
                        %
                      </span>

                      <span className="fw-bold col-6">
                        $
                        {Math.floor(
                          (cartProduct.price - cartProduct.discount) * 100
                        ) / 100}
                      </span>

                      <span className="text-decoration-line-through text-muted col-6">
                        ${Math.floor(cartProduct.price * 100) / 100}
                      </span>
                    </div>
                  ) : (
                    <span>{Math.floor(cartProduct.price * 100) / 100}</span>
                  )}

                  <div className="d-flex justify-content-center align-items-center">
                    <span className="btn btn-outline-warning border-end-0 rounded-0 rounded-start">
                      <i className="bi bi-plus m-0"></i>
                    </span>
                    <input
                      className="form-control rounded-0 px-0"
                      style={{ width: "50%" }}
                      readOnly
                      value={cartProduct.quantity}
                    ></input>
                    <span className="btn btn-outline-warning border-start-0 rounded-0 rounded-end">
                      <i className="bi bi-dash m-0"></i>
                    </span>
                    <i
                      class="bi bi-trash3 text-danger fs-5"
                      role={"button"}
                    ></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Link
          className="border rounded-3 d-flex flex-column bg-light border text-dark p-3 w-25"
          to={"/account"}
          style={{ height: "fit-content" }}
        >
          <div className="d-flex align-items-center">
            <img
              src={require("./imgs/log-in.png")}
              alt="Login"
              style={{ width: "5rem" }}
            ></img>
            <h3>Sign In!</h3>
            <h3 className="ms-auto">
              <i className="bi bi-chevron-right"></i>
            </h3>
          </div>
          <p className="text-capitalize">
            sign in to your account to save your cart, and get the best shopping
            experience.
          </p>
        </Link>
      </div>
      <TopScrollMenu title="recent views" />
    </div>
  );
}
