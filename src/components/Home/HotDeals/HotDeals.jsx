import React from "react";
import HotDealsProduct from "./HotDealsProduct";

export default function HotDeals() {
  const products = [
    {
      name: "Pet Bed",
      img: require("../Imgs/Pet-Bed.jpg"),
      desc: "A very comfortable bed for your loveable pet. very soft and comfy!",
      price: "50",
      hasDiscount: true,
      discount: "10",
      productId: "2574128",
    },
    {
      name: "Pet Food",
      img: require("../Imgs/Pet-Food.jpg"),
      desc: "Contains one (1) 33 lb. bag of PEDIGREE Complete Nutrition Adult Dry Dog Food, Roasted Chicken, Rice & Vegetable Flavor.",
      price: "23",
      hasDiscount: true,
      discount: "5",
      productId: "8889419",
    },
    {
      name: "Pet Mineral",
      img: require("../Imgs/Pet-Mineral.jpg"),
      desc: "HIGH-QUALITY HEALTH SUPPLEMENT FOR DOGS: Give your pet the nutritional support that provides four different health benefits.",
      price: "12",
      hasDiscount: true,
      discount: "3",
      productId: "673787",
    },
    {
      name: "Pet Mineral",
      img: require("../Imgs/Pet-Mineral.jpg"),
      desc: "HIGH-QUALITY HEALTH SUPPLEMENT FOR DOGS: Give your pet the nutritional support that provides four different health benefits.",
      price: "12",
      hasDiscount: true,
      discount: "3",
      productId: "673787",
    },
    {
      name: "Pet Mineral",
      img: require("../Imgs/Pet-Mineral.jpg"),
      desc: "HIGH-QUALITY HEALTH SUPPLEMENT FOR DOGS: Give your pet the nutritional support that provides four different health benefits.",
      price: "12",
      hasDiscount: true,
      discount: "3",
      productId: "673787",
    },
    {
      name: "Pet Mineral",
      img: require("../Imgs/Pet-Mineral.jpg"),
      desc: "HIGH-QUALITY HEALTH SUPPLEMENT FOR DOGS: Give your pet the nutritional support that provides four different health benefits.",
      price: "12",
      hasDiscount: true,
      discount: "3",
      productId: "673787",
    },
    {
      name: "Pet Mineral",
      img: require("../Imgs/Pet-Mineral.jpg"),
      desc: "HIGH-QUALITY HEALTH SUPPLEMENT FOR DOGS: Give your pet the nutritional support that provides four different health benefits.",
      price: "12",
      hasDiscount: true,
      discount: "3",
      productId: "673787",
    },
    {
      name: "Pet Mineral",
      img: require("../Imgs/Pet-Mineral.jpg"),
      desc: "HIGH-QUALITY HEALTH SUPPLEMENT FOR DOGS: Give your pet the nutritional support that provides four different health benefits.",
      price: "12",
      hasDiscount: true,
      discount: "3",
      productId: "673787",
    },
    {
      name: "Pet Mineral",
      img: require("../Imgs/Pet-Mineral.jpg"),
      desc: "HIGH-QUALITY HEALTH SUPPLEMENT FOR DOGS: Give your pet the nutritional support that provides four different health benefits.",
      price: "12",
      hasDiscount: true,
      discount: "3",
      productId: "673787",
    },
    {
      name: "Pet Mineral",
      img: require("../Imgs/Pet-Mineral.jpg"),
      desc: "HIGH-QUALITY HEALTH SUPPLEMENT FOR DOGS: Give your pet the nutritional support that provides four different health benefits.",
      price: "12",
      hasDiscount: true,
      discount: "3",
      productId: "673787",
    },
  ];

  const scrollHtoDeals = () => {
    const scrollHotDeals = document.getElementsByClassName("HotDealsRow")[0];
    scrollHotDeals.addEventListener("wheel", (event) => {
      event.preventDefault();

      scrollHotDeals.scrollBy({
        left: event.deltaY < 0 ? -30 : 30,
      });
    });
  };

  const dragHotDeals = () => {
    const dragHotDeals = document.getElementsByClassName("HotDealsRow")[0];

    let isDown = false;
    let startX;
    let scrollLeft;

    dragHotDeals.addEventListener('mousedown', (e)=>{
      isDown = true;
      dragHotDeals.classList.add('active')
      startX = e.pageX - dragHotDeals.offsetLeft;
      scrollLeft = dragHotDeals.scrollLeft;
    });
    dragHotDeals.addEventListener('mouseleave', () => {
      isDown = false;
      dragHotDeals.classList.remove('active');
    });
    dragHotDeals.addEventListener('mouseup', () => {
      isDown = false;
      dragHotDeals.classList.remove('active');
    });
    dragHotDeals.addEventListener('mousemove', (e) => {
      if(!isDown) return;
      e.preventDefault();
      const x = e.pageX - dragHotDeals.offsetLeft;
      const walk = (x - startX) * 3; //scroll-fast
      dragHotDeals.scrollLeft = scrollLeft - walk;
    });
  };

  const scrollArrowLeft = () =>{
const arrowLeft = document.querySelector('.HotDeals-arrow-left');
const HotDealsRow = document.querySelector('.HotDealsRow');
arrowLeft.addEventListener('click', (event)=>{
  event.preventDefault();
  HotDealsRow.scrollBy({
    left: event.deltaY = -305,
  });
})};

const scrollArrowRight = () =>{
  const arrowRight = document.querySelector('.HotDeals-arrow-right');
  const HotDealsRow = document.querySelector('.HotDealsRow');
  arrowRight.addEventListener('click', (event)=>{
    event.preventDefault();
    HotDealsRow.scrollBy({
      left: event.deltaY = 305,
    });
  })};
  return (
    <React.Fragment>
      <div className="container bg-dark mt-3 mb-3 text-white rounded-4 HotDealsContainer overflow-auto">
        <h3 className="text-center mt-3 text-warning">Hot Deals</h3>
        <div className="d-flex align-items-center">

        <div className="me-2" onClick={scrollArrowLeft}><i class="bi bi-arrow-left-circle-fill fs-3 text-warning HotDeals-arrow-left"></i></div>
        <div className="row flex-nowrap HotDealsRow" onWheel={scrollHtoDeals} onMouseDown={dragHotDeals}>
          {products.map((product) => (
            <div className="col-lg p-0 HotDealsItem">
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
        <div className="ms-4" onClick={scrollArrowRight}><i class="bi bi-arrow-right-circle-fill fs-3 text-warning HotDeals-arrow-right"></i></div>
        </div>

      </div>
    </React.Fragment>
  );
}
