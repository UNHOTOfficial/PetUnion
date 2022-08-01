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
      <div class="col-6">
        <label for="exampleFormControlInput1" class="form-label">
          First Name
        </label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="John"
        ></input>
      </div>
      <div class="col-6">
        <label for="exampleFormControlInput1" class="form-label">
          Last Name
        </label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Doe"
        ></input>
      </div>
      </div>
      <div class="">
        <label for="exampleFormControlInput1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        ></input>
      </div>
      <select class="form-select mt-3" aria-label="Default select example">
  <option selected>Select Support Section</option>
  <option value="1">Account</option>
  <option value="2">Orders</option>
  <option value="3">Payment</option>
  <option value="4">Features</option>
</select>
      <div class="mb-3 mt-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Support Case
        </label>
        <textarea style={{resize:"none", height:"8rem"}}
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
        
      </div>
      <button className="btn btn-warning">Start Chat</button>
    </div>
  );
}
