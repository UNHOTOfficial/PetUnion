import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

export default function ProductsPage() {
  let { id } = useParams();

  const [product, setProduct] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setIsLoaded(true);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [id]);

  if (isLoaded === true) {
    return (
      <Product
        id={product._id}
        image={product.image}
        title={product.title}
        rate={product.rating.rate}
        count={product.rating.count}
        hasDiscount={product.hasDiscount}
        price={product.price}
        discount={product.discount}
        description={product.description}
        specifications={product.specifications}
        category={product.category.main}
        type={product.category.type}
      />
    );
  } else {
    return <div class="spinner-border mx-auto" role="status"></div>;
  }
}
