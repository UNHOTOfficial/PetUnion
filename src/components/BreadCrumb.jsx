import React from "react";
import { Link } from "react-router-dom";

export default function BreadCrumb(props) {
  return (
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <Link to={"/"}><small>ShopUnion</small></Link>
        </li>
        <i class="bi bi-chevron-right"></i>
        <li class="breadcrumb-item">
          <Link className="text-capitalize" to={`/products/?${props.category}`}>
            <small>{props.category}</small>
          </Link>
        </li>
        <i class="bi bi-chevron-right"></i>
        <li class="breadcrumb-item">
          <Link className="text-capitalize" to={`/products/?${props.type}`}>
            <small>{props.type}</small>
          </Link>
        </li>
        <i class="bi bi-chevron-right"></i>
        <li
          style={{
            width: "11rem",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          class="breadcrumb-item active"
        >
         <small>{props.pageName}</small>
        </li>
      </ol>
    </nav>
  );
}
