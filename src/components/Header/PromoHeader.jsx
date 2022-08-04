import React from 'react'
import {Link} from "react-router-dom"

export default function PromoHeader() {
  return (
    <div className='container-fluid bg-dark'>
        <div className='text-white d-flex justify-content-center py-1'>
            <p className='m-0'>We Added New Products To Promos. <Link to={"/"}>See Promos</Link></p>
        </div>
    </div>
  )
}
