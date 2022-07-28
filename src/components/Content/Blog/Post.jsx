import React from "react";

export default function Post(props) {
  return (
    <div className="card m-4 border-dark bg-light" style={{ width: "18rem" }}>
      <img src={props.img} className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title">{props.heading}</h5>
        <p className="card-text text-muted">{props.paragraph}</p>
        <div className="d-flex justify-content-between">
          <small>
            <div className="d-flex text-muted">
              <i className="bi bi-person-circle"></i>
              <p>{props.author}</p>
            </div>
          </small>
          <small>
            <div className="d-flex text-muted">
              <i className="bi bi-clock"></i>
              <p>{props.time}</p>
            </div>
          </small>
        </div>
      </div>
    </div>
  );
}
