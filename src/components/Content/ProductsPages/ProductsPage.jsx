import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

export default function ProductsPage() {
  let { id } = useParams();

  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [id]);

  return (
    <Product
      image={product.image}
      title={product.title}
      rate={product.rate}
      count={product.count}
      hasDiscount={product.hasDiscount}
      price={product.price}
      discount={product.discount}
      description={product.description}
    />
  );
}
