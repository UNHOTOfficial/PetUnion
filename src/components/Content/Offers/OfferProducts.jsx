import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ProductCard from "../../ProductCard";

export default function OfferProducts() {
  const [offerProducts, setOfferProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/products")
      .then((res) => {
        let offerProductsArray = [];
        res.data.map((discountProducts) =>
          discountProducts.discount > 0 ? (
            offerProductsArray.push(discountProducts)
          ) : (
            <></>
          )
        );
        setOfferProducts(offerProductsArray);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="row col-10">
      {offerProducts.map((offerProduct) => (
        <ProductCard
          id={offerProduct._id}
          image={offerProduct.image}
          title={offerProduct.title}
          rate={offerProduct.rating.rate}
          count={offerProduct.rating.count}
          hasDiscount={offerProduct.hasDiscount}
          price={offerProduct.price}
          discount={offerProduct.discount}
          category={offerProduct.category?.main}
          quantity={offerProduct.quantity}
        />
      ))}
    </div>
  );
}
