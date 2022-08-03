import React from "react";

export default function Side() {
  return (
    <div className="col-3">
      <div className="rounded-2 border bg-light p-4">

<div className="d-flex flex-column">
<div className="d-flex">
        <h3>Suspicious Activity?</h3>
<img src={require("./imgs/lock.png")} alt="lock" style={{width:"5rem"}}></img>

</div>
        <p className="text-capitalize">if you seen any suspicious activity in your account, first change the password. then terminate other devices. and at the end, contact support if needed.</p>
<button className="btn btn-warning">Learn More</button>
</div>

      </div>
      <ul className="list-group border rounded-2 bg-light">
        <strong className="ms-3 mt-3 mb-3">Hot Lines</strong>
        <div className="list-group-item border-0 bg-light text-dark">
          <h5>
            <img
              src={require("../Contact/Imgs/Flags/usa.png")}
              alt="usa"
              style={{ width: "2rem" }}
            ></img>{" "}
            United States
          </h5>
          <p>+1 339-889-0725</p>
          <p>+1 339-889-0725</p>
          <p>+1 339-889-0725</p>
          <h5>
            <img
              src={require("../Contact/Imgs/Flags/united-kingdom.png")}
              alt="uk"
              style={{ width: "2rem" }}
            ></img>{" "}
            United Kingdom
          </h5>
          <p>+44 7457 275963</p>
          <p>+44 7457 275963</p>
          <h5>
            <img
              src={"https://cdn-icons-png.flaticon.com/128/688/688444.png"}
              alt="brazil"
              style={{ width: "2rem" }}
            ></img>{" "}
            Brazil
          </h5>
          <p>+55 71 98644-8174</p>
          <p>+55 71 98644-8174</p>
          <h5>
            <img
              src={require("../Contact/Imgs/Flags/turkey.png")}
              alt="turkey"
              style={{ width: "2rem" }}
            ></img>{" "}
            Turkey
          </h5>
          <p>+90 516 885 93 50</p>
          <h5>
            <img
              src={require("../Contact/Imgs/Flags/russia.png")}
              alt="russia"
              style={{ width: "2rem" }}
            ></img>{" "}
            Russia
          </h5>
          <p>+7 924 089-90-75</p>
          <h5>
            <img
              src={"https://cdn-icons-png.flaticon.com/128/297/297092.png"}
              alt="Australia"
              style={{ width: "2rem" }}
            ></img>{" "}
            Australia
          </h5>
          <p>+61 419 988 588</p>
        </div>
      </ul>
    </div>
  );
}
