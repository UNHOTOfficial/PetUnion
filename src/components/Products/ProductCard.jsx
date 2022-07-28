import React from "react";
import { Link } from "react-router-dom";

export default function Product(props) {

 
  return (
    <Link className="card ProductCard ProductItem bg-background-secondary border-divider text-dark" style={{"color":"inherit","textDecoration":"none"}} to={`/Product/${props.ProductId}`}>
      <img
        src={props.img}
        className="card-img-top mx-auto mt-4" style={{"width":"10rem","height":"10rem","objectFit":"contain"}}
        alt={props.name}
      ></img>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text text-secondary" style={{"whiteSpace":"wrap","height":"8rem","overflow":"hidden","textOverflow":"ellipsis"}}>{props.desc}</p>
        <div className="d-flex flex-column">
          <div className="d-flex w-100 align-items-baseline justify-content-between">
            {props.hasDiscount === true ? (
              <React.Fragment>
                <div className="d-flex flex-column">
                  <h5>{props.price - props.discount}$</h5>
                  <h6 className="mx-1 text-secondary"><s>{props.price}$</s></h6>
                </div>
                <span className="badge rounded-pill text-bg-danger">
                  {Math.round(
                    100 - ((props.price - props.discount) * 100) / props.price
                  )}
                  %
                </span>
              </React.Fragment>
            ) : (
              <div className="d-flex flex-column">
                <h5>{props.price}$</h5>
                <br />
              </div>
            )}
          </div>
        </div>
      </div>
      </Link>
  )
}
