import React from 'react'

export default function Top() {
  return (
    <div className='d-flex mt-5'>
    <div className='col-9'>
    <div className='d-flex align-items-center ms-3'>
    <img width={80} style={{width:"5rem"}} src={require("./imgs/lifesaver.png")} alt="help"></img>
    <h1 className='ms-2'>Help Center</h1>
    </div>
    <p className='text-capitalize w-50'>we're here to help. if you got any trouble with your experience in PetUnion, please search for your problem, else use made up articles to know PetUnion features better.</p>
    <div className='input-group w-50'>
    <span className="input-group-text ms-2 bg-input border-end-0 border-dark" id="basic-addon1"><i className="bi bi-search m-0"></i></span>
<input className='form-control bg-input border-dark border-start-0' type='text' placeholder='Search For Your Problem'></input>
    </div>
    </div>
    <div className='col-3'>
        <ul className='list-group border rounded-2 bg-light'>
            <strong className='ms-3 mt-3 mb-3'>Content</strong>
            <li className='list-group-item border-0 text-link bg-light'>Getting Started</li>
            <li className='list-group-item border-0 text-link bg-light'>Account</li>
            <li className='list-group-item border-0 text-link bg-light'>Orders</li>
            <li className='list-group-item border-0 text-link bg-light'>Payment</li>
            <li className='list-group-item border-0 text-link bg-light'>Features</li>
            <li className='list-group-item border-0 text-link bg-light'>Changelog</li>
        </ul>
    </div>
    </div>
  )
}
