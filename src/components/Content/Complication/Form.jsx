import React from 'react'
import { Link } from "react-router-dom";

export default function Form() {
  return (
<form className='bg-light rounded-5 border p-4'>
    <div className='d-flex align-items-center justify-content-between'>
    <h4>Complication Form</h4>
<small>Already Have An Account? <Link to={"/"}>Sign In</Link></small>    
</div>
  <div className="mb-3">
    <div className='row'>
        <div className='col-6'>
    <label for="first-name" className="form-label">First Name</label>
    <input type="text" className="form-control" id="first-name" aria-describedby="emailHelp"></input>
        </div>
        <div className='col-6'>
    <label for="last-name" className="form-label">Last Name</label>
    <input type="text" className="form-control" id="last-name"></input>
        </div>
    </div>
    <div className='row'>
        <div className='col-6'>
    <label for="first-name" className="form-label">Email</label>
        <input type="email" className='form-control' id="email"></input>
        </div>
        <div className='col-6'>
    <label for="first-name" className="form-label">Phone</label>
        <input type="text" className='form-control' id="phone"></input>
        </div>
    </div>
    <div className="row">
        <div className='col-12'>
  <label for="exampleFormControlTextarea1" className="form-label">Complication</label>
  <textarea style={{resize:"none", height:"8rem"}} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
</div>
  </div>
  <button type="submit" className="btn btn-warning">Submit</button>
</form>
  )
}
