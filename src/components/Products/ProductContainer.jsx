import React from "react";
import { Link } from "react-router-dom";
import "../Content/Home.scss";
import PetBed from "../Content/imgs/Pet-Bed.jpg";
import PetFood from "../Content/imgs/Pet-Food.jpg";
import PetMineral from "../Content/imgs/Pet-Mineral.jpg";
import PetWatelBowl from "../Content/imgs/Pet-Water-Bowl.jpg";
import PetToy from "../Content/imgs/Pet-Toy.png";
import PetShampoo from "../Content/imgs/Pet-Shampoo.jpg";
import ProductCard from "./ProductCard";

export default function ProductContainer() {

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
          name: "Pet Toy",
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
          name: "Catnip",
          img: PetFood,
          desc: "good.",
          price: "31",
          hasDiscount: true,
          discount: "10",
          productId: "2574128",
        },
        {
          name: "Cat Brush",
          img: PetFood,
          desc: "good.",
          price: "31",
          hasDiscount: true,
          discount: "10",
          productId: "2574128",
        },
        {
          name: "Cat Toothbrush",
          img: PetFood,
          desc: "good.",
          price: "31",
          hasDiscount: true,
          discount: "10",
          productId: "2574128",
        },
        {
          name: "Cat Toothpaste",
          img: PetFood,
          desc: "good.",
          price: "31",
          hasDiscount: true,
          discount: "10",
          productId: "2574128",
        },
      ];
    

  return (
<div className="card-group flex-wrap m-2">
    {
        products.map(product=>
            <ProductCard key={product.name} ProductId={product.productId} img={product.img} name={product.name} desc={product.desc} price={product.price} hasDiscount={product.hasDiscount} discount={product.discount}/>
            )
    }
</div>  )
}
