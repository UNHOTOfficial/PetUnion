import React from "react";
import SideMenu from "../../SideMenu";
import Categories from "./Categories";
import OfferProducts from "./OfferProducts";
import TopScrollMenu from "../../ScrollMenu";

export default function Offers() {

  return (
    <div>
      <TopScrollMenu title="Today's Offers"/>
      <Categories/>
      <div className="row justify-content-between container-fluid">
        <SideMenu/>
      <OfferProducts/>
      </div>
    </div>
  );
}
