import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

export default function TopSlider() {
  const sliders = [
    {
      name: "Slider1",
      src: require("./imgs/6387623_316.jpg"),
      active: true,
    },
    {
      name: "Slider2",
      src: require("./imgs/6387624_317.jpg"),
      active: false,
    },
    {
      name: "Slider3",
      src: require("./imgs/6537989_406.jpg"),
      active: false,
    },
  ];
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="true"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        {sliders.map((slider) =>
          slider.active === true ? (
            <div key={slider.src} className="carousel-item active">
              <img style={{height:"25rem", objectFit:"cover"}}
                src={slider.src}
                className="d-block w-100"
                alt={slider.name}
              ></img>
            </div>
          ) : (
            <div key={slider.name} className="carousel-item">
              <img style={{height:"25rem", objectFit:"cover"}}
                src={slider.src}
                className="d-block w-100"
                alt={slider.name}
              ></img>
            </div>
          )
        )}
      </div>
      <button
        className="carousel-control-prev justify-content-start ms-3"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next justify-content-end me-3"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
