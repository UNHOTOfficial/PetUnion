import React from 'react'
import {Link} from "react-router-dom"

export default function RefundForm() {
  return (
    <div className='container w-75 rounded-5 bg-light text-dark p-4 my-4'>
        <form>
  <div className="mb-3">
    <div className='d-flex align-items-flex-start justify-content-between'>
        <div className='d-flex flex-column'>
        <h4>Refund Form</h4>
        <small className='text-capitalize text-muted mt-1 mb-2'>if you read refund process and acceptable carefully,<br/> then fill out the form bellow to our assistants reach you.</small>
        </div>
        <p className='m-0'>Have An Account? <Link to={'/'}>Sign In</Link></p>
    </div>
    <div className='row'>
<div className='col-6'>
    <label for="first-name" className="form-label">First Name</label>
    <input type="text" className="form-control bg-input" id="first-name" aria-describedby="emailHelp"></input>
</div>
<div className='col-6'>
    <label for="first-name" className="form-label">Last Name</label>
    <input type="text" className="form-control bg-input" id="first-name" aria-describedby="emailHelp"></input>
</div>
    </div>
  </div>
<div className='row'>
    <div className='col-9'>

    <label for="order-id" className="form-label">Order Id</label>
    <div className='d-flex'>
<div className='col-3 me-3'>
    <input type="text" className="form-control" id="order-id"></input>
    </div>
    <small className='text-capitalize text-muted'>put the order id that you have received earlier here.<br/> have trouble finding it? <Link to={'/'}>Help</Link></small>
</div>
    </div>
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Refund Reason</label>
  <textarea style={{resize:"none", height:"8rem"}} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
  <button type="submit" className="btn btn-warning">Submit</button>
</form>
    </div>
  )
}
