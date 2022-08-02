import React from 'react'
import {Link} from "react-router-dom"

export default function HeaderSecondary() {
  return (
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
      <ul class="navbar-nav align-items-center w-50 justify-content-evenly">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle fw-bold text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="bi bi-list"></i>Categories
          </a>
          <ul class="dropdown-menu dropdown-menu-dark">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className='nav-item dropdown'><i class="bi bi-fire"></i>Offers</li>
        <li className='nav-item dropdown'><i class="bi bi-heart"></i>Popular</li>
        <li className='nav-item dropdown'><i class="bi bi-box-seam"></i>Packs</li>
 


      </ul>
    </div>
  </div>
</nav>
  )
}
