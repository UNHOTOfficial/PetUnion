import React from 'react'
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className='container bg-light rounded-5 d-flex flex-column text-dark p-4' style={{height:"fit-content"}}>
<h5 className=''>Parts</h5>
<div className='nav justify-content-around'>
    <Link className='text-dark' to={'/'}><small className='fw-bold'>Electronics</small></Link>
    <Link className='text-dark' to={'/'}><small className='fw-bold'>Audio & Tools</small></Link>
    <Link className='text-dark' to={'/'}><small className='fw-bold'>Fashion & Clothes</small></Link>
    <Link className='text-dark' to={'/'}><small className='fw-bold'>Groceries</small></Link>
    <Link className='text-dark' to={'/'}><small className='fw-bold'>Toys & Kids</small></Link>
    <Link className='text-dark' to={'/'}><small className='fw-bold'>Health & Cosmetics</small></Link>
    <Link className='text-dark' to={'/'}><small className='fw-bold'>Home & Kitchen</small></Link>
    <Link className='text-dark' to={'/'}><small className='fw-bold'>Books & Art</small></Link>
    <Link className='text-dark' to={'/'}><small className='fw-bold'>Sport & Travel</small></Link>
</div>
    </div>
  )
}
