import React from "react";
import "./Content.scss";
import petimg from "./imgs/Pet-Bed.jpg";

export default function Content() {
  const products = [
    {
      name: "Pet Bed",
      img: { petimg },
      desc: "good.",
      price: "31",
      hasDiscount: true,
      discount: "10",
    },
    {
      name: "Pet Food",
      img: { petimg },
      desc: "good.",
      price: "31",
      hasDiscount: true,
      discount: "10",
    },
    {
      name: "Pet Mineral",
      img: { petimg },
      desc: "good.",
      price: "31",
      hasDiscount: true,
      discount: "10",
    },
    {
      name: "Pet water",
      img: { petimg },
      desc: "good.",
      price: "31",
      hasDiscount: true,
      discount: "10",
    },
    {
      name: "Pet toy",
      img: { petimg },
      desc: "good.",
      price: "31",
      hasDiscount: true,
      discount: "10",
    },
    {
      name: "Pet toy",
      img: { petimg },
      desc: "good.",
      price: "31",
      hasDiscount: true,
      discount: "10",
    },
    {
      name: "Pet toy",
      img: { petimg },
      desc: "good.",
      price: "31",
      hasDiscount: true,
      discount: "10",
    },
    {
      name: "Pet toy",
      img: { petimg },
      desc: "good.",
      price: "31",
      hasDiscount: true,
      discount: "10",
    },
    {
      name: "Pet toy",
      img: { petimg },
      desc: "good.",
      price: "31",
      hasDiscount: true,
      discount: "10",
    },
    {
      name: "Pet toy",
      img: { petimg },
      desc: "good.",
      price: "31",
      hasDiscount: true,
      discount: "10",
    },
  ];

  const productsContainer = products.map((item) => (
    <div className="card ProductCard">
      <img
        src={item.img.petimg}
        className="card-img-top mx-auto mt-1"
        alt={item.name}
      ></img>
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">{item.desc}</p>
        <div className="d-flex flex-column">
          <div className="d-flex w-100 align-items-baseline justify-content-between">
            <div className="d-flex flex-column">
              <h5>{item.price - item.discount}$</h5>
              <h6 className="mx-1 text-secondary">{item.price}$</h6>
            </div>
            {item.hasDiscount == true ? (
              <span className="badge badge-pill bg-danger">
                {Math.round(((item.price - item.discount) * 100) / item.price)}%
              </span>
            ) : (
              <React.Fragment></React.Fragment>
            )}
          </div>
          <a href="#" className="btn btn-warning btn-sm">
            <i className="bi bi-cart"></i>Add To Cart{" "}
          </a>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <div className="card-group flex-wrap m-2">{productsContainer}</div>
    </div>
  );
}
