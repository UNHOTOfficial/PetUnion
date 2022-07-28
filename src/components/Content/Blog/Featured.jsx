import React from 'react'
import { Link } from "react-router-dom";

export default function Featured(props) {
  return (
    <div className="d-flex flex-column">
    <div className="">
      <img
        className="rounded-2"
        src={props.img}
        alt="healthy-food"
        style={{ width: "25rem" }}
      ></img>
      <small className="text-muted mt-2 mb-2">{props.time}</small>
      <h4 className="text-capitalize text-dark">
        {props.heading}
      </h4>
      <p className="text-capitalize text-muted mb-2-">
        {props.paragraph}
      </p>
      <Link className="text-link" to={"/"}>
        Continue Reading...
      </Link>
    </div>
  </div>  )
}
