import React from 'react'
import {Link} from "react-router-dom"

export default function HeaderSecondary() {
  const hoverCategories = ()=>{
   const categories =  document.querySelector(".categories")
   const categoriesMenu =  document.querySelector(".categories-menu")

  categories.classList.add("show");
  categories.ariaExpanded = 'true';
  categoriesMenu.classList.add("show")

  categories.addEventListener("mouseout", ()=>{
    categories.classList.remove("show");
    categories.ariaExpanded = 'false';
    categoriesMenu.classList.remove("show")
  })

  }
  return (
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
      <ul class="navbar-nav align-items-center w-50 justify-content-evenly">
        <li onMouseOver={hoverCategories} class="nav-item dropdown categories">
          <a class="nav-link dropdown-toggle fw-bold text-dark" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="bi bi-list"></i>Categories
          </a>
          <ul class="dropdown-menu bg-light p-0 categories-menu">
            <li><a class="dropdown-item text-dark" href="#"><i class="fa-solid fa-desktop me-2"></i>Electronics</a></li>
            <li><a class="dropdown-item text-dark" href="#"><i class="fa-solid fa-screwdriver me-2"></i>Audio & Tools</a></li>
            <li><a class="dropdown-item text-dark" href="#"><i class="fa-solid fa-shirt me-2"></i>Fashion & Clothes</a></li>
            <li><a class="dropdown-item text-dark" href="#"><i class="fa-solid fa-basket-shopping me-2"></i>Groceries</a></li>
            <li><a class="dropdown-item text-dark" href="#"><i class="fa-solid fa-child me-2"></i>Toys & Kids</a></li>
            <li><a class="dropdown-item text-dark" href="#"><i class="fa-solid fa-pills me-2"></i>Health & Cosmetics</a></li>
            <li><a class="dropdown-item text-dark" href="#"><i class="fa-solid fa-couch me-2"></i>Home & Kitchen</a></li>
            <li><a class="dropdown-item text-dark" href="#"><i class="fa-solid fa-book me-2"></i>Books & Art</a></li>
            <li><a class="dropdown-item text-dark" href="#"><i class="fa-solid fa-basketball me-2"></i>Sport & Travel</a></li>
          </ul>
        </li>
        <li className='nav-item dropdown'><Link className='text-decoration-none text-secondary' to={"/offers"}><i class="bi bi-fire"></i>Offers</Link></li>
        <li className='nav-item dropdown'><Link className='text-decoration-none text-secondary' to={"/popular"}><i class="bi bi-heart"></i>Popular</Link></li>
        <li className='nav-item dropdown'><Link className='text-decoration-none text-secondary' to={"/packs"}><i class="bi bi-box-seam"></i>Packs</Link></li>
 


      </ul>
    </div>
  </div>
</nav>
  )
}
