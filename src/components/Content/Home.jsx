import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import PetBed from "./imgs/Pet-Bed.jpg";
import PetFood from "./imgs/Pet-Food.jpg";
import PetMineral from "./imgs/Pet-Mineral.jpg";
import PetWatelBowl from "./imgs/Pet-Water-Bowl.jpg";
import PetToy from "./imgs/Pet-Toy.png";
import PetShampoo from "./imgs/Pet-Shampoo.jpg";

export default function Content() {
  
  const products = [
    {
      name: "Pet Bed",
      img: PetBed,
      desc: "A very comfortable bed for your loveable pet. very soft and comfy!",
      price: "50",
      hasDiscount: true,
      discount: "10",
      productId: "2574128",
    },
    {
      name: "Pet Food",
      img: PetFood,
      desc: "Contains one (1) 33 lb. bag of PEDIGREE Complete Nutrition Adult Dry Dog Food, Roasted Chicken, Rice & Vegetable Flavor.",
      price: "23",
      hasDiscount: true,
      discount: "5",
      productId: "8889419",
    },
    {
      name: "Pet Mineral",
      img: PetMineral,
      desc: "HIGH-QUALITY HEALTH SUPPLEMENT FOR DOGS: Give your pet the nutritional support that provides four different health benefits.",
      price: "12",
      hasDiscount: true,
      discount: "3",
      productId: "673787",
    },
    {
      name: "Pet water Bowl",
      img: PetWatelBowl,
      desc: "Durable stainless-steel food bowl for puppies, dogs, cats, or kittens",
      price: "25",
      hasDiscount: true,
      discount: "4",
      productId: "3838973",
    },
    {
      name: "Pet toy",
      img: PetToy,
      desc: "FUN FOR ALL BIG OR SMALL Wobble Wag Giggle Ball is great for dogs of all ages and sizes! The 4 clutch pockets on the toy make it easy for your dog to pick up during playtime!",
      price: "8",
      hasDiscount: false,
      discount: "1",
      productId: "3783789",
    },
    {
      name: "Pet Shampoo",
      img: PetShampoo,
      desc: "Dog Oatmeal Shampoo - Try our popular dog shampoo formulas handcrafted to cleanse and moisturize dry skin.",
      price: "12",
      hasDiscount: false,
      discount: "10",
      productId: "2574128",
    },
    {
      name: "Pet toy",
      img: PetFood,
      desc: "good.",
      price: "31",
      hasDiscount: true,
      discount: "10",
      productId: "2574128",
    },
    {
      name: "Pet toy",
      img: PetFood,
      desc: "good.",
      price: "31",
      hasDiscount: true,
      discount: "10",
      productId: "2574128",
    },
    {
      name: "Pet toy",
      img: PetFood,
      desc: "good.",
      price: "31",
      hasDiscount: true,
      discount: "10",
      productId: "2574128",
    },
    {
      name: "Pet toy",
      img: PetFood,
      desc: "good.",
      price: "31",
      hasDiscount: true,
      discount: "10",
      productId: "2574128",
    },
  ];

  const productsContainer = products.map((item) => (
    <Link className="card ProductCard ProductItem" to={`/Product/${item.productId}`}>
      <img
        src={item.img}
        className="card-img-top mx-auto mt-4"
        alt={item.name}
      ></img>
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">{item.desc}</p>
        <div className="d-flex flex-column">
          <div className="d-flex w-100 align-items-baseline justify-content-between">
            {item.hasDiscount === true ? (
              <React.Fragment>
                <div className="d-flex flex-column">
                  <h5>{item.price - item.discount}$</h5>
                  <h6 className="mx-1 text-secondary">{item.price}$</h6>
                </div>
                <span className="badge badge-pill bg-danger">
                  {Math.round(
                    100 - ((item.price - item.discount) * 100) / item.price
                  )}
                  %
                </span>
              </React.Fragment>
            ) : (
              <div className="d-flex flex-column">
                <h5>{item.price}$</h5>
                <br />
              </div>
            )}
          </div>
          <a href="#" className="btn btn-warning btn-sm">
            <i className="bi bi-cart"></i>Add To Cart{" "}
          </a>
        </div>
      </div>
    </Link>
  ));

  return (
    <div>
      <div className="card-group flex-wrap m-2">{productsContainer}</div>
    </div>
  );
}
