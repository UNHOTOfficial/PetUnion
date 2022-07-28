import React from "react";
import HotDealsProduct from "./HotDealsProduct";
import '../../dark.scss'

export default function HotDeals() {
  const products = [
    {
      name: "Pet Bed",
      img: require("../Imgs/Pet-Bed.jpg"),
      desc: "A very comfortable bed for your loveable pet. very soft and comfy!",
      price: "50",
      hasDiscount: true,
      discount: "10",
      productId: "25734128",
    },
    {
      name: "Pet Food",
      img: require("../Imgs/Pet-Food.jpg"),
      desc: "Contains one (1) 33 lb. bag of PEDIGREE Complete Nutrition Adult Dry Dog Food, Roasted Chicken, Rice & Vegetable Flavor.",
      price: "23",
      hasDiscount: true,
      discount: "5",
      productId: "88829419",
    },
    {
      name: "Pet Mineral",
      img: require("../Imgs/Pet-Mineral.jpg"),
      desc: "HIGH-QUALITY HEALTH SUPPLEMENT FOR DOGS: Give your pet the nutritional support that provides four different health benefits.",
      price: "12",
      hasDiscount: true,
      discount: "3",
      productId: "6737787",
    },
    {
      name: "Pet Mineral",
      img: require("../Imgs/Pet-Mineral.jpg"),
      desc: "HIGH-QUALITY HEALTH SUPPLEMENT FOR DOGS: Give your pet the nutritional support that provides four different health benefits.",
      price: "12",
      hasDiscount: true,
      discount: "3",
      productId: "6734787",
    },
    {
      name: "Pet Mineral",
      img: require("../Imgs/Pet-Mineral.jpg"),
      desc: "HIGH-QUALITY HEALTH SUPPLEMENT FOR DOGS: Give your pet the nutritional support that provides four different health benefits.",
      price: "12",
      hasDiscount: true,
      discount: "3",
      productId: "6737687",
    },
    {
      name: "Pet Mineral",
      img: require("../Imgs/Pet-Mineral.jpg"),
      desc: "HIGH-QUALITY HEALTH SUPPLEMENT FOR DOGS: Give your pet the nutritional support that provides four different health benefits.",
      price: "12",
      hasDiscount: true,
      discount: "3",
      productId: "6735787",
    },
    {
      name: "Pet Mineral",
      img: require("../Imgs/Pet-Mineral.jpg"),
      desc: "HIGH-QUALITY HEALTH SUPPLEMENT FOR DOGS: Give your pet the nutritional support that provides four different health benefits.",
      price: "12",
      hasDiscount: true,
      discount: "3",
      productId: "67354787",
    },
    {
      name: "Pet Mineral",
      img: require("../Imgs/Pet-Mineral.jpg"),
      desc: "HIGH-QUALITY HEALTH SUPPLEMENT FOR DOGS: Give your pet the nutritional support that provides four different health benefits.",
      price: "12",
      hasDiscount: true,
      discount: "3",
      productId: "68767",
    },
    {
      name: "Pet Mineral",
      img: require("../Imgs/Pet-Mineral.jpg"),
      desc: "HIGH-QUALITY HEALTH SUPPLEMENT FOR DOGS: Give your pet the nutritional support that provides four different health benefits.",
      price: "12",
      hasDiscount: true,
      discount: "3",
      productId: "6786876",
    },
    {
      name: "Pet Mineral",
      img: require("../Imgs/Pet-Mineral.jpg"),
      desc: "HIGH-QUALITY HEALTH SUPPLEMENT FOR DOGS: Give your pet the nutritional support that provides four different health benefits.",
      price: "12",
      hasDiscount: true,
      discount: "3",
      productId: "68763638",
    },
  ];

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
      <div className="container bg-background-secondary mt-3 mb-3 text-daek rounded-5 HotDealsContainer overflow-auto">
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
            {products.map((product) => (
              <div key={product.productId} className="col-lg p-0 HotDealsItem">
                <HotDealsProduct
                  ProductId={product.productId}
                  img={product.img}
                  name={product.name}
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
