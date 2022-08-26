import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ProductCard from "../../ProductCard";
import ProductCardLoading from "../../ProductCardLoading";

export default function OfferProducts() {
  const [offerProducts, setOfferProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
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
        setIsLoaded(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (isLoaded) {
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
  } else {
    return (
      <div className="row col-10">
        {offerProducts.map(() => (
          <ProductCardLoading type="productCard" />
        ))}
      </div>
    );
  }
}
