import React from "react";
import { Link } from "react-router-dom";
import EditorPicks from "./EditorPicks";
import Featured from "./Featured";
import Latest from "./Latest";
import MostRead from "./MostRead";
import Post from "./Post";

export default function Blog(props) {

  const scrollEditorPicks = () => {
    const scrollHotDeals = document.getElementsByClassName("editor-picks-row")[0];
    scrollHotDeals.addEventListener("wheel", (event) => {
      event.preventDefault();

      scrollHotDeals.scrollBy({
        left: event.deltaY < 0 ? -100 : 100,
        behavior: "auto"
      });
    });
  };

  const dragEditorPicks = () => {
    const dragHotDeals = document.getElementsByClassName("editor-picks-row")[0];

    let isDown = false;
    let startX;
    let scrollLeft;

    dragHotDeals.addEventListener("mousedown", (e) => {
      isDown = true;
      startX = e.pageX - dragHotDeals.offsetLeft;
      scrollLeft = dragHotDeals.scrollLeft;
    });
    dragHotDeals.addEventListener("mouseleave", () => {
      isDown = false;
    });
    dragHotDeals.addEventListener("mouseup", () => {
      isDown = false;
    });
    dragHotDeals.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - dragHotDeals.offsetLeft;
      const walk = (x - startX) *3; //scroll-fast
      dragHotDeals.scrollLeft = scrollLeft - walk;
    });
  };

  const scrollArrowLeft = () => {
    const arrowLeft = document.querySelector(".editors-picks-left-arrow");
    const editorPicksRow = document.querySelector(".editor-picks-row");
    arrowLeft.addEventListener("click", (event) => {
      event.preventDefault();
      editorPicksRow.scrollBy({
        left: (event.deltaY = -325),
      });
    });
  };

  const scrollArrowRight = () => {
    const arrowRight = document.querySelector(".editors-picks-right-arrow");
    const HotDealsRow = document.querySelector(".editor-picks-row");
    arrowRight.addEventListener("click", (event) => {
      event.preventDefault();
      HotDealsRow.scrollBy({
        left: (event.deltaY = 325),
      });
    });
  };
  
  
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
      key: Math.random(),
    },
    {
      img: require("./imgs/red-footed-tortoise-chelonoidis-carbonarius.jpg"),
      paragraph:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      author: "John Doe",
      time: "July 28, 2022",
      key: Math.random(),
    },
    {
      img: require("./imgs/red-footed-tortoise-chelonoidis-carbonarius.jpg"),
      paragraph:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      author: "John Doe",
      time: "July 28, 2022",
      key: Math.random(),
    },
    {
      img: require("./imgs/red-footed-tortoise-chelonoidis-carbonarius.jpg"),
      paragraph:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      author: "John Doe",
      time: "July 28, 2022",
      key: Math.random(),
    },
    {
      img: require("./imgs/red-footed-tortoise-chelonoidis-carbonarius.jpg"),
      paragraph:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      author: "John Doe",
      time: "July 28, 2022",
      key: Math.random(),
    },
    {
      img: require("./imgs/red-footed-tortoise-chelonoidis-carbonarius.jpg"),
      paragraph:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      author: "John Doe",
      time: "July 28, 2022",
      key: Math.random(),
    },
    {
      img: require("./imgs/red-footed-tortoise-chelonoidis-carbonarius.jpg"),
      paragraph:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      author: "John Doe",
      time: "July 28, 2022",
      key: Math.random(),
    },
    {
      img: require("./imgs/red-footed-tortoise-chelonoidis-carbonarius.jpg"),
      paragraph:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      author: "John Doe",
      time: "July 28, 2022",
      key: Math.random(),
    },
    {
      img: require("./imgs/red-footed-tortoise-chelonoidis-carbonarius.jpg"),
      paragraph:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      author: "John Doe",
      time: "July 28, 2022",
      key: Math.random(),
    },
    {
      img: require("./imgs/red-footed-tortoise-chelonoidis-carbonarius.jpg"),
      paragraph:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      author: "John Doe",
      time: "July 28, 2022",
      key: Math.random(),
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
    <div className="px-3">
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

<div className="bg-light rounded-4 text-dark p-4">
<h3>Editors Picks</h3>
<div className="d-flex align-items-center justify-content-between">
<i onClick={scrollArrowLeft} className="bi bi-arrow-left-circle-fill fs-2 editors-picks-left-arrow" style={{cursor:"pointer"}}></i>
            <div onWheel={scrollEditorPicks}
            onMouseDown={dragEditorPicks} className="d-flex overflow-hidden editor-picks-row" style={{width:"85rem", scrollBehavior:"smooth"}}> 
              {editorPicks.map((editorPick) => (
                <React.Fragment key={editorPick.key}>
                <EditorPicks
                img={editorPick.img}
                paragraph={editorPick.paragraph}
                author={editorPick.author}
                time={editorPick.time}
                />
                </React.Fragment>
                ))}
                </div>
                <i onClick={scrollArrowRight} className="bi bi-arrow-right-circle-fill fs-2 ms-3 editors-picks-right-arrow" style={{cursor:"pointer"}}></i>
            </div>
                </div>


      <div className="d-flex flex-wrap row bg-light my-2">
        <h5 className="p-3 text-dark">Posts</h5>
        <div className="row">
          {posts.map((post) => (
        <div key={post.heading} className=" col-3">
            <Post
            img={post.img}
            heading={post.heading}
            paragraph={post.paragraph}
            author={post.author}
            time={post.time}
            />
        </div>
            ))}
            </div>
      </div>
    </div>
  );
}