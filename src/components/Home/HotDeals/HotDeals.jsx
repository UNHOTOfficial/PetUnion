import React from "react";
import HotDealsProduct from "./HotDealsProduct";
import '../../dark.scss'
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export default function HotDeals() {
  const [offerProducts, setOfferProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/products")
      .then((res) => {
        let offerProductsArray = [];
        res.data.map((discountProducts)=>(
          discountProducts.discount > 0 ? offerProductsArray.push(discountProducts) : <></>
          ))
          setOfferProducts(offerProductsArray)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const scrollHtoDeals = () => {
    const scrollHotDeals = document.getElementsByClassName("HotDealsRow")[0];
    scrollHotDeals.addEventListener("wheel", (event) => {
      event.preventDefault();

      scrollHotDeals.scrollBy({
        left: event.deltaY < 0 ? -100 : 100,
        behavior: "auto"
      });
    });
  };

  const dragHotDeals = () => {
    const dragHotDeals = document.getElementsByClassName("HotDealsRow")[0];

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
      const walk = (x - startX) *3; //scroll-fast
      dragHotDeals.scrollLeft = scrollLeft - walk;
    });
  };

  const scrollArrowLeft = () => {
    const arrowLeft = document.querySelector(".HotDeals-arrow-left");
    const HotDealsRow = document.querySelector(".HotDealsRow");
    arrowLeft.addEventListener("click", (event) => {
      event.preventDefault();
      HotDealsRow.scrollBy({
        left: (event.deltaY = -305),
      });
    });
  };

  const scrollArrowRight = () => {
    const arrowRight = document.querySelector(".HotDeals-arrow-right");
    const HotDealsRow = document.querySelector(".HotDealsRow");
    arrowRight.addEventListener("click", (event) => {
      event.preventDefault();
      HotDealsRow.scrollBy({
        left: (event.deltaY = 305),
      });
    });
  };

  return (
    <React.Fragment>
      <div className="container bg-light mt-3 mb-3 text-dark rounded-5 HotDealsContainer overflow-auto border">
        {/* <div className="d-flex justify-content-between"> */}
{/* <img className="HotDeals-img" alt="Coupon" src={require('./Imgs/coupon.png')}></img> //wasn't good enough */} 
        <h3 className="text-center mt-3">Hot Deals</h3>
{/* <img className="HotDeals-img" alt="Discount" src={require('./Imgs/discount.png')}></img> //wasn't good enough */}
        {/* </div> */}
        <div className="d-flex align-items-center">
          <div className="me-2" onClick={scrollArrowLeft}>
            <i className="bi bi-arrow-left-circle-fill fs-3 text-warning HotDeals-arrow-left" style={{cursor:"pointer"}}></i>
          </div>
          <div
            className="row flex-nowrap HotDealsRow"
            style={{overflow:"hidden", scrollBehavior:"smooth"}}
            onWheel={scrollHtoDeals}
            onMouseDown={dragHotDeals}
          >
            {offerProducts.map((product) => (
              <div key={product.productId} className="col-lg p-0 HotDealsItem">
                <HotDealsProduct
                  ProductId={product.productId}
                  img={product.image}
                  name={product.title}
                  hasDiscount={product.hasDiscount}
                  discount={product.discount}
                  price={product.price}
                />
              </div>
            ))}
          </div>
          <div className="ms-4" onClick={scrollArrowRight}>
            <i className="bi bi-arrow-right-circle-fill fs-3 text-warning HotDeals-arrow-right" style={{cursor:"pointer"}}></i>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
