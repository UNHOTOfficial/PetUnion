import React from 'react'

export default function Top() {
  return (
    <div className="d-flex mt-5">
      <div className="col-9">
        <div className="d-flex align-items-center ms-3">
          <img
            width={80}
            style={{ width: "5rem" }}
            src={require("./imgs/signaling.png")}
            alt="help"
          ></img>
          <h1 className="ms-2">How To ...</h1>
        </div>
        <p className="text-capitalize w-50">
          confused with website?<br/>this page made for this purpose; taking down confusion.<br/>take a look at articles.
        </p>
        <div className="input-group w-50"></div>
      </div>
    </div>
  )
}
