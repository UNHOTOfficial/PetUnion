import React from "react";

export default function AboutContent() {
  return (
    <div className="d-flex flex-column mt-3 mb-3">
      <div className="d-flex justify-content-center">
        <div className="w-100">
          <div className="bg-light p-4">
            <div className="d-flex justify-content-around">
              <div className="d-flex flex-column justify-content-evenly">
                <h1 className="text-capitalize text-dark">
                  one of the biggest online shops.
                </h1>
                <h5 className="text-captalize text-dark">
                  get to know us more...!
                </h5>
                <button className="btn btn-warning rounded-5 w-25">
                  Go On!
                </button>
              </div>

              <img
                className="about-icon"
                style={{ width: "15rem", height: "15rem" }}
                alt="Company"
                src={require("./imgs/company.png")}
              ></img>
            </div>
          </div>
          <div className="d-flex flex-column align-items-center bg-light mt-3 flex-wrap">
            <div className="text-capitalize text-dark">
              <h2>our statics</h2>
            </div>
            <div className="d-flex w-100 justify-content-evenly">
              <div className="d-flex p-4 justify-content-between text-dark">
                <div className="d-flex flex-column align-items-center">
                  <img
                    className="about-statics-icon"
                    style={{ width: "5rem", height: "5rem" }}
                    src={require("./imgs/product.png")}
                    alt="Product"
                  ></img>
                  <strong>1.250.000 Products Sold</strong>
                  <p className="text-capitalize">
                    from our establishment to now,
                    <br /> we successfully sold 1.250.000 products.
                  </p>
                </div>
              </div>
              <div className="d-flex p-4 justify-content-between text-dark">
                <div className="d-flex flex-column align-items-center">
                  <img
                    className="about-statics-icon"
                    style={{ width: "5rem", height: "5rem" }}
                    src={require("./imgs/blogger.png")}
                    alt="Usesr"
                  ></img>
                  <strong>20.000.000 Visits</strong>
                  <p className="text-capitalize">
                    we have been visited by users,
                    <br />
                    20.000.000 times.
                  </p>
                </div>
              </div>
              <div className="d-flex p-4 justify-content-between text-dark">
                <div className="d-flex flex-column align-items-center">
                  <img
                    className="about-statics-icon"
                    style={{ width: "5rem", height: "5rem" }}
                    src={require("./imgs/global-shipping.png")}
                    alt="Shipping"
                  ></img>
                  <strong>1750 Shipped Locations</strong>
                  <p className="text-capitalize">
                    we have been successfully shipped,
                    <br />
                    our products to 1750 different locations.
                  </p>
                </div>
              </div>
              <div className="d-flex p-4 justify-content-between text-dark">
                <div className="d-flex flex-column align-items-center">
                  <img
                    className="about-statics-icon"
                    style={{ width: "5rem", height: "5rem" }}
                    src={require("./imgs/rating.png")}
                    alt="Happy"
                  ></img>
                  <strong>500.000 Positive Feedbacks</strong>
                  <p className="text-capitalize">
                    we received 500.000 positive
                    <br />
                    feedbacks from our customers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex flex-column align-items-center bg-light mt-3">
            <h2 className="text-dark mb-5 mt-3">Hear Our Story</h2>
            <div className="bg-light d-flex justify-content-around mb-5">
              <img
                className="about-story-img"
                style={{ width: "15rem" }}
                src={require("./imgs/boots.png")}
                alt="Heart"
              ></img>
              <div className="d-flex flex-column w-50 justify-content-evenly">
                <h2 className="text-dark text-capitalize">
                  we first started in the USA!
                </h2>
                <p className="text-dark text-capitalize fs-5">
                  our story begins in the united states of america. a creative
                  developer and his compute for sure started coding ShopUnion on
                  2022. two weeks later, home page was made. that looked cool,
                  he continued making other pages and part as time was going on.
                </p>
              </div>
            </div>

            <div className="bg-light d-flex justify-content-around mt-5">
              <div className="d-flex flex-column w-50  justify-content-evenly">
                <h2 className="text-dark text-capitalize">
                  where did the first order sent?
                </h2>
                <p className="text-dark text-capitalize fs-5">
                  the very fist order was sent to the new york! someone bought
                  some food for his dog. the order was sent in 2020.
                </p>
              </div>
              <img
                className="about-story-img"
                style={{ width: "15rem" }}
                src={require("./imgs/fast-delivery.png")}
                alt="Heart"
              ></img>
            </div>

            <div className="bg-light d-flex justify-content-around mb-5 mt-5">
              <img
                className="about-story-img"
                style={{ width: "15rem" }}
                src={require("./imgs/teamwork.png")}
                alt="Heart"
              ></img>
              <div className="d-flex flex-column w-50  justify-content-evenly">
                <h2 className="text-dark text-capitalize">Team!</h2>
                <p className="text-dark text-capitalize fs-5">
                  two is a team right? so we can call oet union a team
                  developing business when that creative developer first invited
                  his friend to the business. he worked as social media
                  administrator.
                </p>
              </div>
            </div>

            <div className="bg-light d-flex justify-content-around mt-5">
              <div className="d-flex flex-column w-50   justify-content-evenly">
                <h2 className="text-dark text-capitalize">first office!</h2>
                <p className="text-dark text-capitalize fs-5">
                  our first office was established short after we reached the
                  1000th order. it was somewhere near central park. at that time
                  its rent was so hard for us to pay.
                </p>
              </div>
              <img
                className="about-story-img"
                style={{ width: "15rem" }}
                src={require("./imgs/office-desk.png")}
                alt="Office"
              ></img>
            </div>

            <div className="bg-light d-flex justify-content-around mb-5 mt-5">
              <img
                className="about-story-img"
                style={{ width: "15rem" }}
                src={require("./imgs/canada (1).png")}
                alt="Heart"
              ></img>
              <div className="d-flex flex-column w-50  justify-content-evenly">
                <h2 className="text-dark text-capitalize">
                  exporting ShopUnion!
                </h2>
                <p className="text-dark text-capitalize fs-5">
                  right after we reached our 30000th order, we exported pet
                  union. how? im here to say! we established a branch at
                  toronto, canada. might ask why canada? actually we got two
                  neighbors. canada and mexico.
                </p>
              </div>
            </div>

            <div className="bg-light d-flex justify-content-around mt-5">
              <div className="d-flex flex-column w-50  justify-content-evenly">
                <h2 className="text-dark text-capitalize">20th location!</h2>
                <p className="text-dark text-capitalize fs-5">
                  moving too fast we established our 20th location 2 weeks ago.
                  we really needed a vacation to a somewhere hot, like us. we
                  moved to melbourne, australia. it's not over yet. soon we come
                  to your country too!
                </p>
              </div>
              <img
                className="about-story-img"
                style={{ width: "15rem" }}
                src={require("./imgs/lunar-tour.png")}
                alt="Office"
              ></img>
            </div>
          </div>

          <div className="d-flex flex-column align-items-center bg-light mt-3 flex-wrap">
            <div className="text-capitalize text-dark">
              <h2 className="mt-3">our achievements</h2>
            </div>
            <div className="d-flex w-100 justify-content-evenly">
              <div className="d-flex p-4 justify-content-between text-dark">
                <div className="d-flex flex-column align-items-center">
                  <img
                    className="about-statics-icon"
                    style={{ width: "5rem", height: "5rem" }}
                    src={require("./imgs/trophy.png")}
                    alt="trophy1"
                  ></img>
                  <strong>Fast-Developing Company</strong>
                </div>
              </div>
              <div className="d-flex p-4 justify-content-between text-dark">
                <div className="d-flex flex-column align-items-center">
                  <img
                    className="about-statics-icon"
                    style={{ width: "5rem", height: "5rem" }}
                    src={require("./imgs/trophy (1).png")}
                    alt="trophy2"
                  ></img>
                  <strong>Best Customer-Care Service</strong>
                </div>
              </div>
              <div className="d-flex p-4 justify-content-between text-dark">
                <div className="d-flex flex-column align-items-center">
                  <img
                    className="about-statics-icon"
                    style={{ width: "5rem", height: "5rem" }}
                    src={require("./imgs/one.png")}
                    alt="one"
                  ></img>
                  <strong>Bese Ui/Ux Site</strong>
                </div>
              </div>
              <div className="d-flex p-4 justify-content-between text-dark">
                <div className="d-flex flex-column align-items-center">
                  <img
                    className="about-statics-icon"
                    style={{ width: "5rem", height: "5rem" }}
                    src={require("./imgs/oscar.png")}
                    alt="oscar"
                  ></img>
                  <strong>Maybe One Day...</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
