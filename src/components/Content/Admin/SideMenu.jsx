import React from 'react'
import {Link} from "react-router-dom"

export default function SideMenu() {
  return (
    <div className='col-3 bg-light text-dark border rounded-3 p-4'>
        <h5>Operations</h5>
        <ul class="list-group list-group-flush">
  <li class="list-group-item text-capitalize bg-transparent" style={{cursor:"pointer"}}>add a new product</li>
  <li class="list-group-item text-capitalize bg-transparent" style={{cursor:"pointer"}}>edit a product</li>
  <li class="list-group-item text-capitalize bg-transparent" style={{cursor:"pointer"}}>remove a product</li>
</ul>
    </div>
  )
}
