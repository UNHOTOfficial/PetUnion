import React from 'react'
import { Link } from "react-router-dom";

export default function Form() {
  return (
<form className='bg-light rounded-5 border p-4'>
    <div className='d-flex align-items-center justify-content-between'>
    <h4>Complication Form</h4>
<small>Already Have An Account? <Link to={"/"}>Sign In</Link></small>    
</div>
  <div class="mb-3">
    <div className='row'>
        <div className='col-6'>
    <label for="first-name" class="form-label">First Name</label>
    <input type="text" class="form-control" id="first-name" aria-describedby="emailHelp"></input>
        </div>
        <div className='col-6'>
    <label for="last-name" class="form-label">Last Name</label>
    <input type="text" class="form-control" id="last-name"></input>
        </div>
    </div>
    <div className='row'>
        <div className='col-6'>
    <label for="first-name" class="form-label">Email</label>
        <input type="email" className='form-control' id="email"></input>
        </div>
        <div className='col-6'>
    <label for="first-name" class="form-label">Phone</label>
        <input type="text" className='form-control' id="phone"></input>
        </div>
    </div>
    <div class="row">
        <div className='col-12'>
  <label for="exampleFormControlTextarea1" class="form-label">Complication</label>
  <textarea style={{resize:"none", height:"8rem"}} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
</div>
  </div>
  <button type="submit" class="btn btn-warning">Submit</button>
</form>
  )
}
