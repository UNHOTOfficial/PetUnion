import React from "react";
import AddProduct from "./AddProduct";
import SideMenu from "./SideMenu";

export default function Admin() {
 

  return (
    <div className="container-fluid mx-auto row">
      <SideMenu/>
      <AddProduct />
    </div>
  );
}
