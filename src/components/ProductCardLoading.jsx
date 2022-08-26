import React from "react";

export default function ProductCardLoading(props) {
  switch (props.type) {
    case "productCard":
      return (
        <div
          class="col-3 bg-light p-2 d-flex flex-column border text-dark justify-content-evenly"
          aria-hidden="true"
          style={{ minHeight: "350px", width: "300px" }}
        >
          <div class="card-title placeholder-wave">
            <span class="placeholder w-100" style={{ height: "15rem" }}></span>
          </div>
          <div class="card-body mt-2">
            <h5 class="card-title placeholder-wave">
              <span class="placeholder col-6"></span>
            </h5>
            <p class="card-text placeholder-wave">
              <span class="placeholder col-7"></span>
              <span class="placeholder col-4"></span>
              <span class="placeholder col-4"></span>
              <span class="placeholder col-6"></span>
              <span class="placeholder col-8"></span>
            </p>
          </div>
        </div>
      );
  
      case "ProductPage":
      return(
<div className="container-fluid my-3">
<div className="row align-items-start placeholder-wave">
<span className="placeholder col-6"></span>
</div>
</div>
      )
    default:
      break;
  }
}
