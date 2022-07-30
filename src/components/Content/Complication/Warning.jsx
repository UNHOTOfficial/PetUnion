import React from 'react'
import { Link } from "react-router-dom";

export default function Warning() {
  return (
    <div className='bg-light text-dark rounded-5'>
        <div className='d-flex flex-column align-items-center'>
<h3>Warning!</h3>
<div className='d-flex align-items-center justify-content-evenly'>
<img style={{width:"10rem"}} src={require("./imgs/warning.png")} alt="warning"></img>
<p className='text-capitalize ms-3 fs-5'>if you have a major problem with your account and orders, you need to head to <Link to={"/Help"}>Help Center</Link>.</p>
</div>
        </div>
    </div>
  )
}
