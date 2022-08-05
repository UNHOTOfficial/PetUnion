import React from "react";

export default function SendEmail() {
  return (
<div className="rounded-2 border p-4 bg-light row justify-content-evenly mt-3">
<div className="col-5 d-flex flex-column align-items-center">
    <div className="d-flex">
        <img src={require("./imgs/account.png")} alt="Account" style={{width:"3rem"}}></img>
        <h3>Accounts</h3>
    </div>
    <div className="d-flex flex-column">
        <p>Accounts@ShopUnion.com</p>
        <p>Breach@ShopUnion.com</p>
        <p>Sec@ShopUnion.com</p>
    </div>
</div>
<div className="col-5 d-flex flex-column align-items-center">
    <div className="d-flex">
        <img src={require("./imgs/product.png")} alt="Order" style={{width:"3rem"}}></img>
        <h3>Orders</h3>
    </div>
    <div className="d-flex flex-column">
        <p>Storage@ShopUnion.com</p>
        <p>Orders@ShopUnion.com</p>
        <p>Track@ShopUnion.com</p>
    </div>
</div>
<div className="col-5 d-flex flex-column align-items-center">
    <div className="d-flex">
        <img src={require("./imgs/wallet.png")} alt="wallet" style={{width:"3rem"}}></img>
        <h3>Payments</h3>
    </div>
    <div className="cool-3 d-flex flex-column">
        <p>Payment@ShopUnion.com</p>
        <p>Money@ShopUnion.com</p>
        <p>Bill@ShopUnion.com</p>
    </div>
</div>
<div className="col-5 d-flex flex-column align-items-center">
    <div className="d-flex">
        <img src={require("./imgs/idea.png")} alt="idea" style={{width:"3rem"}}></img>
        <h3>Features</h3>
    </div>
    <div className="cool-3 d-flex flex-column">
        <p>Features@ShopUnion.com</p>
        <p>WebSite@ShopUnion.com</p>
        <p>Web@ShopUnion.com</p>
    </div>
</div>
</div>
  );
}
