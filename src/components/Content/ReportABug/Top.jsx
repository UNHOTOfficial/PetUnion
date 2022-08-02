import React from "react";

export default function Top() {
  return (
    <div className="d-flex mt-5">
      <div className="col-9">
        <div className="d-flex align-items-center ms-3">
          <img
            width={80}
            style={{ width: "5rem" }}
            src={require("./imgs/lice.png")}
            alt="help"
          ></img>
          <h1 className="ms-2">Report A Bug</h1>
        </div>
        <p className="text-capitalize w-50">
          like you, we also hate bugs. why not reporting it to us so we fix it
          as soon as possible. if you seen a bug in webpage interface, use the
          following page to report it. as a thank, we will offer a gift!
        </p>
        <div className="input-group w-50"></div>
      </div>
    </div>
  );
}
