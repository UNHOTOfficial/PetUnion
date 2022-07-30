import React from 'react'
import { Link } from "react-router-dom";

export default function SideMenu() {
  return (
    <div className='d-flex flex-column bg-light text-dark w-25 rounded-5 ms-3 align-items-center justify-content-evenly' style={{height:"18rem"}}>
        <h4><i class="bi bi-shield-check"></i> Guarantee</h4>
<Link className='ms-5 py-2 w-100' to={"/"}>Policy</Link>
<Link className='ms-5 py-2 w-100' to={"/"}>Inquiry</Link>
<Link className='ms-5 py-2 w-100' to={"/"}>Send Order</Link>
<Link className='ms-5 py-2 w-100' to={"/"}>Retail Complication</Link>
    </div>
  )
}
