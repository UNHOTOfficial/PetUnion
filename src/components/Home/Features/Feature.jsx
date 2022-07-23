import React from 'react'
import "./Features.scss"

export default function props(props) {
  return (
    <div className="col mt-2">
    <div className="card bg-dark text-white FeaturesCard">
      <img src={props.src} className="card-img" alt={props.name}></img>
      <div className="card-img-overlay">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">
          {props.text}
        </p>
      </div>
    </div>
  </div>  )
}
