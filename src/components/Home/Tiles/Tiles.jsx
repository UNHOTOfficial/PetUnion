import React from "react";
import {Link} from "react-router-dom"

export default function Tiles() {
  const tiles = [
    {
      heading: "new phones",
      imgs: [require("./imgs/iphone.jpg"), require("./imgs/iphone-2.jpg"),require("./imgs/s-22.jpg"),require("./imgs/s-22-ultra.jpg")],
    key: Math.random() * 100,
    },
    {
        heading: "men fashion",
        imgs: [require("./imgs/suit.jpg"), require("./imgs/suit-2.jpg"),require("./imgs/watch.jpg"),require("./imgs/perfume.jpg")],
        key: Math.random() * 100,
      },
      {
        heading: "best novels",
        imgs: [require("./imgs/book-1.jpg"), require("./imgs/book-2.jpg"),require("./imgs/book-3.jpg"),require("./imgs/book-4.jpg")],
      key: Math.random() * 100,
      },
      {
        heading: "home collection",
        imgs: [require("./imgs/fur1.webp"), require("./imgs/fur2.webp"),require("./imgs/fur3.webp"),require("./imgs/fur4.webp")],
      key: Math.random() * 100,
      },
  ];
  return (
    <div className="container">
      <div className="row justify-content-evenly">
        {tiles.map((tile) => (
          <div key={tile.key} className="col-3 bg-light rounded-2 text-dark rounded-5 p-4 border" style={{width:"20rem"}}>
            <h3 className="text-capitalize">{tile.heading}</h3>
            <div className="row p-2 rounded-5" style={{backgroundColor:"#fff" ,height:"24rem"}}>
              {tile.imgs.map((img) => (
                <img key={img} style={{maxHeight:"11.6rem", objectFit:"contain"}}
                  className="col-6 p-1"
                  src={img}
                  alt={img.replace(/^.*[\\\/]/, "")}
                ></img>
              ))}
            </div>
              <Link to={"/"}>See More...</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
