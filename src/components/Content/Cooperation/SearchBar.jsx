import React from 'react'

export default function SearchBar() {
  return (
<div className="input-group mt-3 mx-auto">
<span className="input-group-text rounded-end rounded-5 bg-light text-dark" id="basic-addon1"><i className="bi bi-search m-0"></i></span>
  <input type="text" className="form-control  bg-light text-dark rounded-start rounded-5" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
</div>
  )
}
