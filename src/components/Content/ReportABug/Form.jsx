import React from 'react'

export default function Form() {
  return (
    <div className="rounded-2 border p-4 bg-light mt-5">
      <div className="d-flex align-items-center">
        <img
          className="me-2"
          src={require("./imgs/bug (1).png")}
          style={{ width: "3.5rem" }}
          alt="live"
        ></img>
        <h3 className="fw-bold">Live Support</h3>
      </div>
      <div className="row">
      <div className="col-6">
        <label for="exampleFormControlInput1" className="form-label">
          First Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="John"
        ></input>
      </div>
      <div className="col-6">
        <label for="exampleFormControlInput1" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Doe"
        ></input>
      </div>
      </div>
      <div className="">
        <label for="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        ></input>
      </div>
      <select className="form-select mt-3" aria-label="Default select example">
  <option selected>Select Bug Category</option>
  <option value="1">Front-End</option>
  <option value="2">Back-End</option>
  <option value="3">DataBase</option>
  <option value="4">Api</option>
  <option value="6">Graphics</option>
  <option value="5">Spelling Mistake</option>
</select>
      <div className="mb-3 mt-3">
        <label for="exampleFormControlTextarea1" className="form-label">
          Summary
        </label>
        <textarea style={{resize:"none", height:"8rem"}}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
        
      </div>
      <button className="btn btn-warning">Submit</button>
    </div>
  )
}
