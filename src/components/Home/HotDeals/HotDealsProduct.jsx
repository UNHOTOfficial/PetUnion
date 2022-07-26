import React from 'react'
import { Link } from "react-router-dom";
import './HotDealsProduct.scss'
import '../../dark.scss'

export default function HotDealsProduct(props) {

  return (
    <React.Fragment>
         <Link className="card ProductCard ProductItem m-3 ms-2 me-2 user-select-none HotDealProductCard" to={`/Product/${props.ProductId}`}>
      <img
        src={props.img}
        className="card-img-top mx-auto mt-3 HotDealProductCard"
        alt={props.name}
      ></img>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <div className="d-flex flex-column">
          <div className="d-flex w-100 align-items-baseline justify-content-between">
            {props.hasDiscount === true ? (
              <React.Fragment>
                <div className="d-flex flex-column">
                  <h5 className=''>{props.price - props.discount}$</h5>
                  <h6 className="mx-1 text-secondary"><s>{props.price}$</s></h6>
                </div>
                <span className="badge badge-pill bg-danger">
                  {Math.round(
                    100 - ((props.price - props.discount) * 100) / props.price
                  )}
                  %
                </span>
              </React.Fragment>
            ) : (
              <div className="d-flex flex-column">
                <h5 className='text-dark'>{props.price}$</h5>
                <br />
              </div>
            )}
          </div>
        </div>

        <div className='progress HotDealsProgress'>
  <div className='progress-bar bg-warning'
       role='progressbar'
       aria-valuenow={70}
       aria-valuemin={0}
       aria-valuemax={10}
       style={{width: '70%'}}>
  </div>
</div>

      </div>
      </Link>
    </React.Fragment>
  )
}
