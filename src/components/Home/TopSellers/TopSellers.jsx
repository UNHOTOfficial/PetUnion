import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export default function TopSellers() {
  const [topsellers, setTopSellers] = useState([]);

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
        setTopSellers(offerProductsArray);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const scrollTopSellers = () => {
    const scrollHotDeals = document.getElementsByClassName("topsellers-row")[0];
    scrollHotDeals.addEventListener("wheel", (event) => {
      event.preventDefault();

      scrollHotDeals.scrollBy({
        left: event.deltaY < 0 ? -100 : 100,
        behavior: "auto",
      });
    });
  };

  const dragTopSellers = () => {
    const dragHotDeals = document.getElementsByClassName("topsellers-row")[0];

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
    const arrowLeft = document.querySelector(".topsellers-arrow-left");
    const HotDealsRow = document.querySelector(".topsellers-row");
    arrowLeft.addEventListener("click", (event) => {
      event.preventDefault();
      HotDealsRow.scrollBy({
        left: (event.deltaY = -200),
      });
    });
  };

  const scrollArrowRight = () => {
    const arrowRight = document.querySelector(".topsellers-arrow-right");
    const HotDealsRow = document.querySelector(".topsellers-row");
    arrowRight.addEventListener("click", (event) => {
      event.preventDefault();
      HotDealsRow.scrollBy({
        left: (event.deltaY = 200),
      });
    });
  };

  return (
    <div className="container mt-3">
      <div className="bg-light text-dark rounded-5 p-4 align-items-center border">
        <h3>Top Sellers</h3>
        <div className="d-flex align-items-center">
          <i
            onClick={scrollArrowLeft}
            className="bi bi-arrow-left-circle-fill fs-3 text-warning topsellers-arrow-left"
            style={{ cursor: "pointer" }}
          ></i>
          <div
            className="d-flex flex-nowrap overflow-hidden topsellers-row user-select-none p-4"
            style={{ scrollBehavior: "smooth" }}
          >
            {topsellers.map((topSeller) => (
              <div
                key={topSeller.key}
                onWheel={scrollTopSellers}
                onMouseDown={dragTopSellers}
                className="d-flex flex-column border-end px-3"
              >
                <img
                  style={{
                    width: "10rem",
                    height: "10rem",
                    objectFit: "contain",
                  }}
                  className="rounded-2"
                  src={topSeller.image}
                  alt={topSeller.image.replace(/^.*[\\\/]/, "")}
                ></img>
                <p
                  style={{
                    display: "inline-block",
                    textOverflow: "ellipsis",
                    wordWrap: "break-word",
                    overflow: "hidden",
                    maxHeight: "3rem",
                  }}
                  className="text-capitalize mt-3"
                >
                  {topSeller.title}
                </p>
              </div>
            ))}
          </div>
          <i
            onClick={scrollArrowRight}
            className="bi bi-arrow-right-circle-fill fs-3 text-warning ms-3 topsellers-arrow-right"
            style={{ cursor: "pointer" }}
          ></i>
        </div>
      </div>
    </div>
  );
}
