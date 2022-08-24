import React from "react";
import RatingStars from "./RatingStars";

export default function Comments(props) {
  return (
    <div className="container-fluid row justify-content-center mt-3">
      <div className="col-2">
        <span className="fs-5 fw-bold">Customers Ratings</span>
        <div className="d-flex">
          <RatingStars />
          <span className="ms-2">{props.generalRate} out of 5</span>
        </div>
        <span className="text-muted">{props.count} Ratings</span>
        <hr></hr>
        <span className="fs-5 fw-bold">Features</span>
        <div className="d-flex">
          <span className="me-2">Title</span>
          <RatingStars />
        </div>
      </div>
      <div className="col-8">
        <div>
          <span className="fw-bold">{props.heading}</span>
          <RatingStars />
        </div>
        <div className="d-flex">
          <span>{props.date}</span>
          <span>{props.fullName}</span>
        </div>
        <hr></hr>
        <p>{props.description}</p>
        <div className="d-flex">rate comment</div>
      </div>
    </div>
  );
}
