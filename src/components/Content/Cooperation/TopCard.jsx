import React from "react";

export default function TopCard() {
  return (
    <div className="container bg-light rounded-5 d-flex justify-content-around p-4">
      <div className="text-dark d-flex flex-column justify-content-evenly">
        <h1 className="">Promote Your Business!</h1>
        <p>We Need Supplier!</p>
        <button className="btn btn-warning rounded-5 w-25">Let's Go!</button>
      </div>
      <div className="bg-warning text-dark rounded-5 p-4">
        <h1>Steps To Become A Supplier Is Pretty Easy.</h1>
        <div className="d-flex justify-content-evenly align-items-center">
          <h4 className="">See The Opportunities Below And Make A Auction.</h4>
          <img
            style={{ width: "10rem" }}
            src={require("./imgs/perspective_matte.png")}
            alt="Dollar"
          ></img>
        </div>
      </div>
    </div>
  );
}
