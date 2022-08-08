import React from "react";
import Categories from "./Categories";
import OfferProducts from "./OfferProducts";
import TopScrollMenu from "./TopScrollMenu";

export default function Offers() {

  return (
    <div>
      <h3 className="p-4">Today's Offers</h3>
      <TopScrollMenu/>
      <Categories/>
      <OfferProducts/>
    </div>
  );
}
