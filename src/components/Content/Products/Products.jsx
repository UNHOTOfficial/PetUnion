import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import ProductCard from "./ProductCard";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        {products.map((product) => (
          <React.Fragment key={product.id}>
            <ProductCard
              title={product.title}
              image={product.image}
              description={product.description}
              price={product.price}
              rate={product.rating.rate}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
