import React from 'react'
import TopScrollMenuCard from './TopScrollMenuCard'

export default function TopScrollMenu() {
    const scrollHtoDeals = () => {
        const scrollHotDeals = document.getElementsByClassName("topscrollMenuRow")[0];
        scrollHotDeals.addEventListener("wheel", (event) => {
          event.preventDefault();
    
          scrollHotDeals.scrollBy({
            left: event.deltaY < 0 ? -100 : 100,
            behavior: "auto"
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
          const walk = (x - startX) *3; //scroll-fast
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
      
    const topScrollMenuItems = [
        {
          title: "Govee Smart Outdoor String Lights",
          img: require("./imgs/desk.jpg"),
          price: 150,
          discount:25
        },
        {
            title: "Champion Power Equipment",
            img: require("./imgs/genertor.jpg"),
            price: 326,
            discount:36
          },
          {
            title: "eufy Security Smart Lock Touch & Wi-Fi",
            img: require("./imgs/smartlock.jpg"),
            price: 48,
            discount:8
          },
          {
            title: "Beckham Hotel Collection Bed Pillows",
            img: require("./imgs/pillow.jpg"),
            price: 12,
            discount:3
          },
          {
            title: "DEERC 1:10 Scale Fast Brushless RC Car for Adults",
            img: require("./imgs/offroad2.jpg"),
            price: 170,
            discount:13
          },
          {
            title: "DEERC Brushless 302E RC Cars for Adults",
            img: require("./imgs/offroad.jpg"),
            price: 190,
            discount:18
          },
          {
            title: "AIPER Cordless Automatic Pool Cleaner",
            img: require("./imgs/poolcleaner.jpg"),
            price: 80,
            discount:10
          },
          {
            title: "WolfWise 3 Person Portable Beach Tent",
            img: require("./imgs/tent.jpg"),
            price: 79,
            discount:20
          },
          {
            title: "EAST OAK Patio Furniture Set 3-Piece",
            img: require("./imgs/oak.jpg"),
            price: 320,
            discount:50
          },
      ];
  return (
    <div className='container-fluid bg-white text-dark'>
<div className='d-flex align-items-center'>
<i onClick={scrollArrowLeft} className="bi bi-arrow-left-circle-fill fs-3 text-dark tophotdeals-arrow-left" style={{cursor:"pointer"}}></i>
<div             onWheel={scrollHtoDeals}
            onMouseDown={dragHotDeals} className='d-flex overflow-hidden topscrollMenuRow' style={{scrollBehavior:"smooth"}}>
    {topScrollMenuItems.map((item)=>(
        <TopScrollMenuCard img={item.img} title={item.title} price={item.price} discount={item.discount}/>
    ))}
</div>
<i onClick={scrollArrowRight} className="bi bi-arrow-right-circle-fill fs-3 text-dark tophotdeals-arrow-right ms-3" style={{cursor:"pointer"}}></i>
</div>
    </div>
  )
}
