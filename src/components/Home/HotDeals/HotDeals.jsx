import React from "react";
import HotDealsProduct from "./HotDealsProduct";

export default function () {
  const products = [
    {
      name: "Pet Bed",
      img: require("../Imgs/Pet-Bed.jpg"),
      desc: "A very comfortable bed for your loveable pet. very soft and comfy!",
      price: "50",
      hasDiscount: true,
      discount: "10",
      productId: "2574128",
    },
    {
      name: "Pet Food",
      img: require("../Imgs/Pet-Food.jpg"),
      desc: "Contains one (1) 33 lb. bag of PEDIGREE Complete Nutrition Adult Dry Dog Food, Roasted Chicken, Rice & Vegetable Flavor.",
      price: "23",
      hasDiscount: true,
      discount: "5",
      productId: "8889419",
    },
    {
      name: "Pet Mineral",
      img: require("../Imgs/Pet-Mineral.jpg"),
      desc: "HIGH-QUALITY HEALTH SUPPLEMENT FOR DOGS: Give your pet the nutritional support that provides four different health benefits.",
      price: "12",
      hasDiscount: true,
      discount: "3",
      productId: "673787",
    },
    {
      name: "Pet Mineral",
      img: require("../Imgs/Pet-Mineral.jpg"),
      desc: "HIGH-QUALITY HEALTH SUPPLEMENT FOR DOGS: Give your pet the nutritional support that provides four different health benefits.",
      price: "12",
      hasDiscount: true,
      discount: "3",
      productId: "673787",
    },
  ];

  return (
    <React.Fragment>
      <div class="container bg-dark mt-3 mb-3 text-white rounded-4 HotDealsContainer">
        <div class="row HotDealsRow">
          {products.map((product) => (
            <div class="col-lg HotDealsItem">
<HotDealsProduct ProductId={product.productId} img={product.img} name={product.name} hasDiscount={product.hasDiscount} discount={product.discount} price={product.price}/>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
