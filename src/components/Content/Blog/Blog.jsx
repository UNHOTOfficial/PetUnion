import React from "react";
import { Link } from "react-router-dom";
import EditorPicks from "./EditorPicks";
import Featured from "./Featured";
import Latest from "./Latest";
import MostRead from "./MostRead";
import Post from "./Post";

export default function Blog(props) {

  const hideHeaderFooter = ()=>{
    document.querySelector('.header').classList.add('d-none')
    document.querySelector('.footer').classList.add('d-none')
  }
  
  const featureds = [
    {
      img: require("./imgs/healthy-fresh-pet-food-ingredients-dark-surface.jpg"),
      time: "July 28, 2022",
      heading: "complete guide to buy food for your pet",
      paragraph:
        "confused with various pet foods? we are here to help you choose the best one that suits your pet.",
    },
  ];
  const latests = [
    {
      img: require("./imgs/red-footed-tortoise-chelonoidis-carbonarius.jpg"),
      heading: "how to care for your red-eared slider",
      paragraph: "Complete Guide how To Take Care Of Your Turtle.",
    },
    {
      img: require("./imgs/red-footed-tortoise-chelonoidis-carbonarius.jpg"),
      heading: "how to care for your red-eared slider",
      paragraph: "Complete Guide how To Take Care Of Your Turtle.",
    },
    {
      img: require("./imgs/red-footed-tortoise-chelonoidis-carbonarius.jpg"),
      heading: "how to care for your red-eared slider",
      paragraph: "Complete Guide how To Take Care Of Your Turtle.",
    },
  ];
  const mostReads = [
    {
      img: require("./imgs/closeup-shot-colorful-parrot-with-big-green-leaves.jpg"),
      heading: "take care of your parrot",
      paragraph: "an article written by specialist in parrots.",
    },
    {
      img: require("./imgs/closeup-shot-colorful-parrot-with-big-green-leaves.jpg"),
      heading: "take care of your parrot",
      paragraph: "an article written by specialist in parrots.",
    },
  ];
  const editorPicks = [
    {
      img: require("./imgs/red-footed-tortoise-chelonoidis-carbonarius.jpg"),
      paragraph:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      author: "John Doe",
      time: "July 28, 2022",
    },
    {
      img: require("./imgs/red-footed-tortoise-chelonoidis-carbonarius.jpg"),
      paragraph:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      author: "John Doe",
      time: "July 28, 2022",
    },
    {
      img: require("./imgs/red-footed-tortoise-chelonoidis-carbonarius.jpg"),
      paragraph:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      author: "John Doe",
      time: "July 28, 2022",
    },
    {
      img: require("./imgs/red-footed-tortoise-chelonoidis-carbonarius.jpg"),
      paragraph:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      author: "John Doe",
      time: "July 28, 2022",
    },
    {
      img: require("./imgs/red-footed-tortoise-chelonoidis-carbonarius.jpg"),
      paragraph:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      author: "John Doe",
      time: "July 28, 2022",
    },
    {
      img: require("./imgs/red-footed-tortoise-chelonoidis-carbonarius.jpg"),
      paragraph:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      author: "John Doe",
      time: "July 28, 2022",
    },
    {
      img: require("./imgs/red-footed-tortoise-chelonoidis-carbonarius.jpg"),
      paragraph:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      author: "John Doe",
      time: "July 28, 2022",
    },
    {
      img: require("./imgs/red-footed-tortoise-chelonoidis-carbonarius.jpg"),
      paragraph:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      author: "John Doe",
      time: "July 28, 2022",
    },
    {
      img: require("./imgs/red-footed-tortoise-chelonoidis-carbonarius.jpg"),
      paragraph:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      author: "John Doe",
      time: "July 28, 2022",
    },
    {
      img: require("./imgs/red-footed-tortoise-chelonoidis-carbonarius.jpg"),
      paragraph:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      author: "John Doe",
      time: "July 28, 2022",
    },
  ];
  const posts = [
    {
      img: require("./imgs/red-footed-tortoise-chelonoidis-carbonarius.jpg"),
      heading: "Turtle Care",
      paragraph:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      author: "John Doe",
      time: "July 28, 2022",
    },    {
      img: require("./imgs/red-footed-tortoise-chelonoidis-carbonarius.jpg"),
      heading: "Turtle Care",
      paragraph:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      author: "John Doe",
      time: "July 28, 2022",
    },    {
      img: require("./imgs/red-footed-tortoise-chelonoidis-carbonarius.jpg"),
      heading: "Turtle Care",
      paragraph:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      author: "John Doe",
      time: "July 28, 2022",
    },    {
      img: require("./imgs/red-footed-tortoise-chelonoidis-carbonarius.jpg"),
      heading: "Turtle Care",
      paragraph:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      author: "John Doe",
      time: "July 28, 2022",
    },    {
      img: require("./imgs/red-footed-tortoise-chelonoidis-carbonarius.jpg"),
      heading: "Turtle Care",
      paragraph:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      author: "John Doe",
      time: "July 28, 2022",
    },    {
      img: require("./imgs/red-footed-tortoise-chelonoidis-carbonarius.jpg"),
      heading: "Turtle Care",
      paragraph:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      author: "John Doe",
      time: "July 28, 2022",
    },    {
      img: require("./imgs/red-footed-tortoise-chelonoidis-carbonarius.jpg"),
      heading: "Turtle Care",
      paragraph:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      author: "John Doe",
      time: "July 28, 2022",
    },    {
      img: require("./imgs/red-footed-tortoise-chelonoidis-carbonarius.jpg"),
      heading: "Turtle Care",
      paragraph:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      author: "John Doe",
      time: "July 28, 2022",
    },    {
      img: require("./imgs/red-footed-tortoise-chelonoidis-carbonarius.jpg"),
      heading: "Turtle Care",
      paragraph:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      author: "John Doe",
      time: "July 28, 2022",
    },
  ];

  return (
    <div onLoad={hideHeaderFooter} className="px-3">
      <div className="container row justify-content-evenly mt-4 mx-auto">
        <div className="col-4 border-end">
          <Link to={"/"} className="text-dark">
            <div className="d-flex align-items-center mb-3 justify-content-flex-start">
              <h4>Featured</h4>
              <i className="bi bi-caret-right-fill ms-2 pb-1"></i>
            </div>
          </Link>

          {featureds.map((featured) => (
            <Featured
              img={featured.img}
              heading={featured.heading}
              paragraph={featured.paragraph}
              time={featured.time}
            />
          ))}
        </div>

        <div className="col-4 border-end">
          <Link to={"/"} className="text-dark">
            <div className="d-flex">
              <h4>Latest</h4>
              <i className="bi bi-caret-right-fill ms-2 pb-1"></i>
            </div>
          </Link>

          {latests.map((latest) => (
            <Latest
              img={latest.img}
              heading={latest.heading}
              paragraph={latest.paragraph}
            />
          ))}
        </div>
        <div className="col-4">
          <Link to={"/"} className="text-dark">
            <div className="d-flex">
              <h4>Most Read</h4>
              <i className="bi bi-caret-right-fill ms-2 pb-1"></i>
            </div>
          </Link>

          {mostReads.map((mostRead) => (
            <MostRead
              img={mostRead.img}
              heading={mostRead.heading}
              paragraph={mostRead.paragraph}
            />
          ))}
        </div>
      </div>

      <div className="d-flex flex-nowrap overflow-hidden">
        <div className="bg-light my-3 py-3">
          <h5 className="p-3 text-dark">Editors Picks</h5>
          <div className="d-flex align-items-center">
            <i
              className="bi bi-arrow-left-circle-fill fs-2 ms-2"
              style={{ cursor: "pointer" }}
            ></i>
            <div className="d-flex">
              {editorPicks.map((editorPick) => (
                <EditorPicks
                  img={editorPick.img}
                  paragraph={editorPick.paragraph}
                  author={editorPick.author}
                  time={editorPick.time}
                />
              ))}
            </div>
            <i
              className="bi bi-arrow-right-circle-fill fs-2 ms-4 me-2"
              style={{ cursor: "pointer" }}
            ></i>
          </div>
        </div>
      </div>

      <div className="d-flex flex-wrap row bg-light my-2">
        <h5 className="p-3 text-dark">Posts</h5>
        <div className=" col-3">
          {posts.map((post) => (
            <Post
              img={post.img}
              heading={post.heading}
              paragraph={post.paragraph}
              author={post.author}
              time={post.time}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
