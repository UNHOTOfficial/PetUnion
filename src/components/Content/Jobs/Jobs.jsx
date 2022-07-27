import React from "react";
import "./Jobs.scss";
import { Link } from "react-router-dom";

export default function Jobs(props) {
  return (
    <Link className="rounded-5 job-card p-4 pt-0 pb-0 m-1 d-flex flex-column justify-content-evenly" to={`/Jobs/${props.id}`}>
      <div className="jobs-card-tags w-50 mt-2 d-flex justify-content-start pt-3">
        {props.tags.map((tag) => (
          tag === "New" ? <div key={tag} className="badge rounded-pill text-bg-warning me-1">{tag}</div> : <div key={tag} className="badge rounded-pill text-bg-secondary me-1">{tag}</div>
        ))}
      </div>
      <div className="d-flex align-items-center mt-2">
<img className="me-2 job-card-img"  src={props.icon} alt={props.title}></img>
      <h5 className="text-light job-card-title mt-3">{props.title}</h5>
      </div>
      <p className="text-muted text-capitalize">{props.details}</p>
      <div className="d-flex justify-content-between">
      <p className="text-muted"><img className="job-card-Icon me-1" alt="Location" src={require('./imgs/pin (1).png')}></img>{props.location}</p>
      <p className="text-muted"><img className="job-card-Icon me-1" alt="Time" src={require('./imgs/hourglass.png')}></img>{props.time}</p>
      </div>
    </Link>
  );
}
