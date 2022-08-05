import React from 'react'
import {Link} from "react-router-dom"

export default function Apps() {
  return (
    <div className='container my-5 bg-light rounded-4 text-center p-4'>
        <img src={require("./imgs/coming-soon.png")} alt="Soon" style={{width:"10rem"}}></img>
        <h3 className='my-3 fw-bold'>Apps Coming Soon...!</h3>
        <Link to="/" className='btn btn-outline-warning'>Home</Link>
    </div>
  )
}
