import React from "react";
import { Link } from "react-router-dom";

export default function Latest(props) {
  return (
    <div>
      <div className="my-3">
        <Link className="text-dark" to={"/"}>
          <div className="d-flex align-items-center">
            <img
              className="rounded-2 me-3"
              src={props.img}
              alt="turtle"
              style={{ width: "10rem" }}
            ></img>
            <div className="d-flex flex-column">
              <h5 className="text-capitalize">{props.heading}</h5>

              <p className="text-muted">{props.paragraph}</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
