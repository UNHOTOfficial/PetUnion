import React from 'react'
import { Link } from "react-router-dom";

export default function AboutGuarantee() {
  return (
    <div className='bg-light text-dark d-flex flex-column rounded-5 p-3'>
        <div className='d-flex flex-column align-items-center'>
<div className='d-flex flex-column align-items-center pb-3 border-bottom'>
    <h4>Our Guarantee</h4>
    <div className='d-flex align-items-center'>
    <img className='mx-2' src={require("./imgs/shield.png")} alt="shield" style={{width:"10rem"}}></img>
    <p className='text-capitalize' style={{maxWidth:"50rem"}}>we test our products regularly to ensure the quality. so the products that you receive, is fully tested in our testing environments. also in order to guarantee products under ShopUnion© label products need to be tested.</p>
    </div>
</div>
<div className='d-flex flex-column align-items-center pb-3 pt-3 border-bottom'>
    <h4>Label</h4>
    <div className='d-flex align-items-center'>
    <p className='text-capitalize' style={{maxWidth:"50rem"}}>in order to your guarantee take place, check your order's box for ShopUnion© guarantee label. if the label is damaged or scratched, contact immediately.</p>
    <img className='mx-2' src={require("./imgs/label.png")} alt="label" style={{width:"10rem"}}></img>
    </div>
</div>
<div className='d-flex flex-column align-items-center pb-3 pt-3 border-bottom'>
    <h4>7-day Return</h4>
    <div className='d-flex align-items-center'>
    <img className='mx-2' src={require("./imgs/return.png")} alt="return" style={{width:"10rem"}}></img>
    <p className='text-capitalize' style={{maxWidth:"50rem"}}>each product has 7-day return. in order to use your 7-day return, the product's box shouldn't be opened. your 7-day return duration voids if box opens.</p>
    </div>
</div>
<div className='d-flex flex-column align-items-center mb-3 pt-3'>
    <h4>Retail Guarantees</h4>
    <div className='d-flex align-items-center'>
    <p className='text-capitalize' style={{maxWidth:"50rem"}}>retail guarantees are also available. read each retail has its own guarantee policy. read about retail guarantee providers: <Link className='ms-1' to={'/'}>retails guarantee policies</Link></p>
    <img className='mx-2' src={require("./imgs/distribution.png")} alt="distribution" style={{width:"10rem"}}></img>
    </div>
</div>
        </div>

    </div>
  )
}
