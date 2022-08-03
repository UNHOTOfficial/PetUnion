import React from "react";
import Cards from "./Cards";
import Filter from "./Filter";
import Menu from "./Menu";
import TopCard from "./TopCard";
import Pagination from "./Pagination";
import SearachBar from "./SearchBar";
import { Link } from "react-router-dom";


export default function CooperationContainer() {
  const cards = [
    {
      img: require("./imgs/cards/mobile-phone.png"),
      title: "phone supplier",
      paragraph:
        "phone specialist company to supply phone to toronto. related resume is needed. an auction takes place and the winner would be the supplier.",
      time: "1 hours ago",
      location: "toronto, canada",
      tags: ["New", "Electronics", "Phone"],
    },
    {
      img: require("./imgs/cards/tool-box.png"),
      title: "Audio Parts Supplier",
      paragraph:
        "Audio Parts Supplier to supply Audio Parts to South Korea. related resume is needed. an auction takes place and the winner would be the supplier.",
      time: "1.5 hours ago",
      location: "Seoul, South Korea",
      tags: ["New", "Tools", "Audio Parts"],
    },
    {
      img: require("./imgs/cards/shirt.png"),
      title: "Clothes supplier",
      paragraph:
        "Clothes supplier to supply clothes to brazil. related resume is needed. an auction takes place and the winner would be the supplier.",
      time: "5 hours ago",
      location: "Rio de Janeiro, Brazil",
      tags: ["Fashion", "Clothes"],
    },
    {
      img: require("./imgs/cards/shopping-bag.png"),
      title: "grocery supplier",
      paragraph:
        "diary company to supply diary products to romania. related resume is needed. an auction takes place and the winner would be the supplier.",
      time: "1 hours ago",
      location: "Bucharest, Romania",
      tags: ["New", "Grocery", "Diary"],
    },
    {
      img: require("./imgs/cards/skincare.png"),
      title: "Skin-Care supplier",
      paragraph:
        "Skin-Care products company to supply cosmetics to italy. related resume is needed. an auction takes place and the winner would be the supplier.",
      time: "3 hours ago",
      location: "Pisa, Italy",
      tags: ["Health", "Cosmetics"],
    },
    {
      img: require("./imgs/cards/kitchen.png"),
      title: "furniture supplier",
      paragraph:
        "furniture company to supply sofas to cyprus. related resume is needed. an auction takes place and the winner would be the supplier.",
      time: "45 minutes ago",
      location: "Nicosia, cyrus",
      tags: ["New", "Home", "Furniture"],
    },
  ];

  return (
    <div>
      <TopCard />
      <div className="container d-flex justify-content-evenly my-3">
        <div className=" d-flex flex-column justify-content-flex-start w-75 me-1">
          <Menu />
          <SearachBar/>
          <div className="rounded-5 row justify-content-evenly mt-3 me-2">
            {cards.map((card) => (
              <React.Fragment key={card.title}>

              <Cards
                img={card.img}
                title={card.title}
                paragraph={card.paragraph}
                time={card.time}
                location={card.location}
                tags={card.tags}
                />
                </React.Fragment>
            ))}
          </div>
        <Pagination/>
        </div>
        <Filter />
      </div>
    </div>
  );
}
