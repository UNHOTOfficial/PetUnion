import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import ProductCard from "./ProductCard";
import SideMenu from "./SideMenu";
import Pagination from "./Pagination";
import SortBy from "./SortBy";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <div className="container-fluid row mx-auto justify-content-between my-3">
      <SideMenu />
      <div className=" col-10">
        <SortBy count={products.length}/>
        <div className="row">
          {products.map((product) => (
            <React.Fragment key={product.id}>
              <ProductCard
                title={product.title}
                image={product.image}
                description={product.description}
                price={product.price}
                discount={product.discount}
                rate={product.rating.rate}
              />
            </React.Fragment>
          ))}
        </div>
        <Pagination />
      </div>
    </div>
  );
}
