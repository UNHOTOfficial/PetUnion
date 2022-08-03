import React from "react";

export default function EditorPicks(props) {
  return (
      <div
        className="card m-4 border border-dark bg-light user-select-none"
       
      >
        <img src={props.img} className="card-img-top" alt="..."></img>
        <div className="card-body g-light">
          <p className="card-text">{props.paragraph}</p>
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
