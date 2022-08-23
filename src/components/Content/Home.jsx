import React from "react";
import HotDeals from "../Home/HotDeals/HotDeals";
import ProductContainer from "../Products/ProductContainer";
import "../dark.scss";
import Tiles from "../Tiles";
import TopSellers from "../Home/TopSellers/TopSellers";
import New from "../Home/New/New";
import TopSlider from "../Home/TopSlider/TopSlider";
export default function Home() {
  const tilesRow1 = [
    {
      heading: "new phones",
      imgs: [
        require("../Home/Tiles/imgs/iphone.jpg"),
        require("../Home/Tiles/imgs/iphone-2.jpg"),
        require("../Home/Tiles/imgs/s-22.jpg"),
        require("../Home/Tiles/imgs/s-22-ultra.jpg"),
      ],
      key: Math.random() * 100,
    },
    {
      heading: "men fashion",
      imgs: [
        require("../Home/Tiles/imgs/suit.jpg"),
        require("../Home/Tiles/imgs/suit-2.jpg"),
        require("../Home/Tiles/imgs/watch.jpg"),
        require("../Home/Tiles/imgs/perfume.jpg"),
      ],
      key: Math.random() * 100,
    },
    {
      heading: "best novels",
      imgs: [
        require("../Home/Tiles/imgs/book-1.jpg"),
        require("../Home/Tiles/imgs/book-2.jpg"),
        require("../Home/Tiles/imgs/book-3.jpg"),
        require("../Home/Tiles/imgs/book-4.jpg"),
      ],
      key: "",
    },
    {
      heading: "home collection",
      imgs: [
        require("../Home/Tiles/imgs/fur1.webp"),
        require("../Home/Tiles/imgs/fur2.webp"),
        require("../Home/Tiles/imgs/fur3.webp"),
        require("../Home/Tiles/imgs/fur4.webp"),
      ],
      key: Math.random() * 100,
    },
  ];
  const tilesRow2 = [
    {
      heading: "best gaming",
      imgs: [
        require("../Home/Tiles/imgs/asus-rog.jpg"),
        require("../Home/Tiles/imgs/razer.jpg"),
        require("../Home/Tiles/imgs/logitech.jpg"),
        require("../Home/Tiles/imgs/skytech.jpg"),
      ],
      key: Math.random() * 100,
    },
    {
      heading: "pet supplies",
      imgs: [
        require("../Home/Tiles/imgs/glad.jpg"),
        require("../Home/Tiles/imgs/seresto.jpg"),
        require("../Home/Tiles/imgs/cushion.jpg"),
        require("../Home/Tiles/imgs/petsafe.jpg"),
      ],
      key: Math.random() * 100,
    },
    {
      heading: "women's fashion",
      imgs: [
        require("../Home/Tiles/imgs/jeans.jpg"),
        require("../Home/Tiles/imgs/gucci.jpg"),
        require("../Home/Tiles/imgs/timex.jpg"),
        require("../Home/Tiles/imgs/nike.jpg"),
      ],
      key: Math.random() * 100,
    },
    {
      heading: "sport and travel",
      imgs: [
        require("../Home/Tiles/imgs/aquafit.jpg"),
        require("../Home/Tiles/imgs/armitron.jpg"),
        require("../Home/Tiles/imgs/underarmour.jpg"),
        require("../Home/Tiles/imgs/kinghouse.jpg"),
      ],
      key: Math.random() * 100,
    },
  ];
  return (
    <div className="content-Home bg-background">
      <TopSlider />
      <HotDeals />
      <div className="row container mx-auto justify-content-between p-0">
        {tilesRow1.map((tile) => (
          <React.Fragment key={tile.key}>
            <Tiles heading={tile.heading} imgs={tile.imgs} key={tile.key} />
          </React.Fragment>
        ))}
      </div>
      <TopSellers />
      <div className="row container mx-auto justify-content-between p-0 mt-3">
        {tilesRow2.map((tile) => (
          <React.Fragment key={tile.key}>
            <Tiles heading={tile.heading} imgs={tile.imgs} key={tile.key} />
          </React.Fragment>
        ))}
      </div>
      <New />
    </div>
  );
}
