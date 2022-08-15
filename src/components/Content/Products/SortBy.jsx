import React from "react";

export default function SortBy(props) {
  return (
    <nav className="navbar bg-transparent">
      <div className="container-fluid">
            <div className="d-flex fw-bold align-items-center">
          <i className="bi bi-sort-down fs-5"></i>
          <span>Sort By:</span>
            </div>
          <span style={{cursor:"pointer"}} className="text-capitalize text-warning">most relevant</span>
          <span style={{cursor:"pointer"}} className="text-capitalize">most visited</span>
          <span style={{cursor:"pointer"}} className="text-capitalize">newest</span>
          <span style={{cursor:"pointer"}} className="text-capitalize">Best selling</span>
          <span style={{cursor:"pointer"}} className="text-capitalize">cheapest</span>
          <span style={{cursor:"pointer"}} className="text-capitalize">most expensive</span>
          <span style={{cursor:"pointer"}} className="text-capitalize">Fastest shipping</span>
          <span style={{cursor:"pointer"}} className="text-capitalize">customer suggestions</span>
          <small className="text-muted">{props.count} Products</small>
        </div>
    </nav>
  );
}
