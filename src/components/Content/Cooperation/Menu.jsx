import React from 'react'
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className='container bg-light rounded-5 d-flex flex-column text-dark p-4' style={{height:"fit-content"}}>
<h5 className=''>Parts</h5>
<div className='nav justify-content-around'>
    <Link className='text-dark' to={'/'}>Electronics</Link>
    <Link className='text-dark' to={'/'}>Audio & Tools</Link>
    <Link className='text-dark' to={'/'}>Fashion & Clothes</Link>
    <Link className='text-dark' to={'/'}>Groceries</Link>
    <Link className='text-dark' to={'/'}>Toys & Kids</Link>
    <Link className='text-dark' to={'/'}>Health & Cosmetics</Link>
    <Link className='text-dark' to={'/'}>Home & Kitchen</Link>
    <Link className='text-dark' to={'/'}>Books & Art</Link>
    <Link className='text-dark' to={'/'}>Sport & Travel</Link>
</div>
    </div>
  )
}
