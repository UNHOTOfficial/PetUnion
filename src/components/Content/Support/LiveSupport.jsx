import React from "react";

export default function LiveSupport() {
  return (
    <div className="rounded-2 border p-4 bg-light">
      <div className="d-flex align-items-center">
        <img
          className="me-2"
          src={require("./imgs/instagram-live.png")}
          style={{ width: "4.5rem" }}
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
  <option selected>Select Support Section</option>
  <option value="1">Account</option>
  <option value="2">Orders</option>
  <option value="3">Payment</option>
  <option value="4">Features</option>
</select>
      <div className="mb-3 mt-3">
        <label for="exampleFormControlTextarea1" className="form-label">
          Support Case
        </label>
        <textarea style={{resize:"none", height:"8rem"}}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
        
      </div>
      <button className="btn btn-warning">Start Chat</button>
    </div>
  );
}
