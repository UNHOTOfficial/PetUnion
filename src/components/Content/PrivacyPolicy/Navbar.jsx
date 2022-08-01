import React from 'react'
 import {Link} from "react-router-dom"

export default function Navbar() {
  return (
    <div className='navbar bg-light text-dark p-3 justify-content-evenly'>
        <Link to={"legal/agreement"} className="text-dark">User Agreement</Link>
        <Link to={"/"} className="text-dark">Privacy Policy</Link>
        <Link to={"/"} className="text-dark">Cookies</Link>
        <Link to={"/"} className="text-dark">Licenses</Link>
        <Link to={"/"} className="text-dark">Rules</Link>
    </div>
  )
}
