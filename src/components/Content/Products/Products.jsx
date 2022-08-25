import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import ProductCard from "../../ProductCard";
import SideMenu from "../../SideMenu";
import Pagination from "./Pagination";
import SortBy from "./SortBy";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/products")
      .then((response) => {
        setProducts(response.data);
        setIsLoaded(true);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  if (isLoaded === true) {
    return (
      <div className="container-fluid row mx-auto justify-content-between my-3">
        <SideMenu />
        <div className=" col-10">
          <SortBy count={products.length} />
          <div className="row">
            {products.map((product) => (
              <React.Fragment key={product.id}>
                <ProductCard
                  id={product._id}
                  image={product.image}
                  title={product.title}
                  rate={product.rating.rate}
                  count={product.rating.count}
                  hasDiscount={product.hasDiscount}
                  price={product.price}
                  discount={product.discount}
                  category={product.category?.main}
                  quantity={product.quantity}
                />
              </React.Fragment>
            ))}
          </div>
          <Pagination />
        </div>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}
