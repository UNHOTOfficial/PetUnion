import React from 'react'
import "./Features.scss"

export default function props(props) {
  return (
    <div class="col mt-2">
    <div class="card bg-dark text-white FeaturesCard">
      <img src={props.src} class="card-img" alt={props.name}></img>
      <div class="card-img-overlay">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">
          {props.text}
        </p>
      </div>
    </div>
  </div>  )
}
