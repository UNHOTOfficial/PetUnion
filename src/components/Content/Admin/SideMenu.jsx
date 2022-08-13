import React from 'react'
import {Link} from "react-router-dom"

export default function SideMenu() {
  return (
    <div classNameName='col-3 bg-light text-dark border rounded-3 p-4'>
        <h5>Operations</h5>
        <ul className="list-group list-group-flush">
  <li className="list-group-item text-capitalize bg-transparent" style={{cursor:"pointer"}}>add a new product</li>
  <li className="list-group-item text-capitalize bg-transparent" style={{cursor:"pointer"}}>edit a product</li>
  <li className="list-group-item text-capitalize bg-transparent" style={{cursor:"pointer"}}>remove a product</li>
</ul>
    </div>
  )
}
