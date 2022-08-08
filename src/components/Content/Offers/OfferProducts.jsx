import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom"

export default function OfferProducts() {
  const [offerProducts, setOfferProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setOfferProducts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="container-fluid row mb-3">
      <div className="col-3">SideBar</div>
      <div className="col-9">
        <div className="row">
          {offerProducts.map((offerProduct) => (
            <Link to={`/products/${offerProduct.title}`}
              className="card col-3 p-3 justify-content-around text-dark"
              style={{ height: "20rem" }}
            >
              <img
                className="mx-auto"
                style={{
                  width: "10rem",
                  height: "10rem",
                  objectFit: "contain",
                }}
                src={offerProduct.image}
                alt={offerProduct.image.replace(/^.*[\\\/]/)}
              ></img>
              <h6
                style={{
                  display: "inline-block",
                  textOverflow: "ellipsis",
                  wordWrap: "break-word",
                  overflow: "hidden",
                  maxHeight: "3.5rem",
                }}
              >
                {offerProduct.title}
              </h6>
              <div className="d-flex justify-content-between">
                <span className="fw-bold">{offerProduct.price}$</span>
                <span className="text-danger fw-bold">OFFER</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
