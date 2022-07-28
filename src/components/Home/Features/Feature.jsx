import React from 'react'

export default function props(props) {
  return (
    <div className="col mt-2">
    <div className="card FeaturesCard" style={{maxWidth: "20rem"}}>
      <img src={props.src} className="card-img" alt={props.name} style={{height:"15rem", backgroundColor: "#000","maskImage":"linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%)","WebkitMaskImage":"linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 60%)","objectFit":"cover"}}></img>
      <div className="card-img-overlay">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text text-secondary" style={{"whiteSpace":"wrap","height":"8rem","overflow":"hidden","textOverflow":"ellipsis"}}>
          {props.text}
        </p>
      </div>
    </div>
  </div>  )
}
