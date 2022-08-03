import React from "react";

export default function Cards(props) {
  return (
    <div className="bg-light col-5 rounded-5 border border-dark p-4 py-0 d-flex flex-column justify-content-evenly my-2" style={{height:"14rem", width:"29rem"}}>

        <div className="d-flex w-50 justify-content-evenly">
          {props.tags.map((tag) =>
            tag === "New" ? (
              <span key={tag} className="badge text-bg-warning">{tag}</span>
            ) : (
              <span key={tag} className="badge text-bg-secondary">{tag}</span>
            )
          )}
        </div>
            <div className="d-flex align-items-center">
          <img
            className="me-1"
            style={{ width: "2rem" }}
            src={props.img}
            alt={props.title}
            ></img>
          <h5 className="text-dark text-capitalize m-0">{props.title}</h5>
            </div>
          <p className="text-secondary m-0">{props.paragraph}</p>
          <div className="d-flex align-items-center justify-content-between text-muted">
            <p className="d-flex text-capitalize m-0"><i className="bi bi-clock"></i>{props.time}</p>
            <p className="d-flex text-capitalize m-0"><i className="bi bi-pin"></i>{props.location}</p>
          </div>
      </div>
  );
}
