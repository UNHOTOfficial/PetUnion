import React from "react";
import TopScrollMenuCard from "./TopScrollMenuCard";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export default function TopScrollMenu() {
  const scrollHtoDeals = () => {
    const scrollHotDeals =
      document.getElementsByClassName("topscrollMenuRow")[0];
    scrollHotDeals.addEventListener("wheel", (event) => {
      event.preventDefault();

      scrollHotDeals.scrollBy({
        left: event.deltaY < 0 ? -100 : 100,
        behavior: "auto",
      });
    });
  };

  const dragHotDeals = () => {
    const dragHotDeals = document.getElementsByClassName("topscrollMenuRow")[0];

    let isDown = false;
    let startX;
    let scrollLeft;

    dragHotDeals.addEventListener("mousedown", (e) => {
      isDown = true;
      startX = e.pageX - dragHotDeals.offsetLeft;
      scrollLeft = dragHotDeals.scrollLeft;
    });
    dragHotDeals.addEventListener("mouseleave", () => {
      isDown = false;
    });
    dragHotDeals.addEventListener("mouseup", () => {
      isDown = false;
    });
    dragHotDeals.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - dragHotDeals.offsetLeft;
      const walk = (x - startX) * 3; //scroll-fast
      dragHotDeals.scrollLeft = scrollLeft - walk;
    });
  };

  const scrollArrowLeft = () => {
    const arrowLeft = document.querySelector(".tophotdeals-arrow-left");
    const HotDealsRow = document.querySelector(".topscrollMenuRow");
    arrowLeft.addEventListener("click", (event) => {
      event.preventDefault();
      HotDealsRow.scrollBy({
        left: (event.deltaY = -305),
      });
    });
  };

  const scrollArrowRight = () => {
    const arrowRight = document.querySelector(".tophotdeals-arrow-right");
    const HotDealsRow = document.querySelector(".topscrollMenuRow");
    arrowRight.addEventListener("click", (event) => {
      event.preventDefault();
      HotDealsRow.scrollBy({
        left: (event.deltaY = 305),
      });
    });
  };

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
        setOfferProducts(
          offerProductsArray.sort((a, b) => 0.5 - Math.random())
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="container-fluid bg-white text-dark">
      <div className="d-flex align-items-center">
        <i
          onClick={scrollArrowLeft}
          className="bi bi-arrow-left-circle-fill fs-3 text-dark tophotdeals-arrow-left"
          style={{ cursor: "pointer" }}
        ></i>
        <div
          onWheel={scrollHtoDeals}
          onMouseDown={dragHotDeals}
          className="d-flex overflow-hidden topscrollMenuRow"
          style={{ scrollBehavior: "smooth" }}
        >
          {offerProducts.map((item) => (
            <TopScrollMenuCard
              img={item.image}
              title={item.title}
              price={item.price}
              discount={item.discount}
            />
          ))}
        </div>
        <i
          onClick={scrollArrowRight}
          className="bi bi-arrow-right-circle-fill fs-3 text-dark tophotdeals-arrow-right ms-3"
          style={{ cursor: "pointer" }}
        ></i>
      </div>
    </div>
  );
}
