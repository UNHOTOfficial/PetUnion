import React from 'react'

export default function Top() {
  return (
    <div className="d-flex mt-5">
      <div className="col-9">
        <div className="d-flex align-items-center ms-3">
          <img
            width={80}
            style={{ width: "5rem" }}
            src={require("./imgs/terms-of-use.png")}
            alt="help"
          ></img>
          <h1 className="ms-2">Terms Of Use</h1>
        </div>
        <p className="text-capitalize w-50">
          here we got our terms of use policies. please read carefully in order to know your and our rights and responsibilities. responsibility of further problems due to any failure in reading this page is fully up to you.
        </p>
        <div className="input-group w-50"></div>
      </div>
    </div>
  )
}
