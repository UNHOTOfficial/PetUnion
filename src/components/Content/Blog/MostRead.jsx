import React from "react";
import { Link } from "react-router-dom";

export default function MostRead(props) {
  return (
    <div className="d-flex flex-column align-items-center">
      <Link className="text-dark" to={"/"}>
        <div className="d-flex my-3 align-items-center">
          <div className="d-flex flex-column">
            <h5 className="text-capitalize">{props.heading}</h5>
            <p className="text-capitalize text-muted">{props.paragraph}</p>
          </div>
          <img
            className="rounded-2"
            src={props.img}
            alt="Parrot"
            style={{ width: "15rem" }}
          ></img>
        </div>
      </Link>
    </div>
  );
}
