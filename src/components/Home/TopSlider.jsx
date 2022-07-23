import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";


export default function TopSlider() {
  const sliders = [
    {
      name: 'Slider1',
      src: require('./Imgs/Slider1.png')
    },
    {
      name: 'Slider3',
      src: require('./Imgs/Slider3.jpg')
    },
  ]
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
{
  sliders.map(slider=>
    <div key={slider.name} className="carousel-item active">
    <img src={slider.src} className="d-block w-100" alt={slider.name}></img>
  </div>
  )
}
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}
