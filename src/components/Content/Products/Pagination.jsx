import React from 'react'

export default function Pagination() {
  return (
    <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center mt-3">
    <li class="page-item"><a class="page-link text-dark bg-light" href="#">&laquo; Previous</a></li>
    <li class="page-item"><a class="page-link text-dark bg-light" href="#">1</a></li>
    <li class="page-item"><a class="page-link text-dark bg-light" href="#">2</a></li>
    <li class="page-item"><a class="page-link text-dark bg-light" href="#">3</a></li>
    <li class="page-item"><a class="page-link text-dark bg-light" href="#">3</a></li>
    <li class="page-item"><a class="page-link text-dark bg-light" href="#">3</a></li>
    <li class="page-item"><a class="page-link text-dark bg-light" href="#">...</a></li>
    <li class="page-item"><a class="page-link text-dark bg-light" href="#">Next &raquo;</a></li>
  </ul>
</nav>
  )
}
