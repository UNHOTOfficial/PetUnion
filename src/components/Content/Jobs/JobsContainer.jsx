import React from "react";
import { Link } from "react-router-dom";
import Jobs from "./Jobs";
import "./Jobs.scss";
export default function JobsContainer() {
  const jobs = [
    {
      title: "Front End Developer",
      details:
        "full time front-end developer to work at New York. having a related degree is an advantage.",
      tags: ["New", "Front-End", "Developer"],
      time: "1 Hour Ago",
      location: 'New York',
      icon: require("./imgs/science.png"),
      id: '56842351'
    },
    {
      title: "Senior Graphic Designer",
      details:
        "full time Graphic Designer to work at Los Vegas. having a related degree is an advantage.",
      tags: ["New", "Graphic", "Designer"],
      time: "35 Minutes Ago",
      location: 'Los Vegas',
icon: require("./imgs/adobe-photoshop.png"),
id: '56842352'
    },
    {
      title: "Senior Back End Developer",
      details:
        "full time back-end developer to work at Toronto. having a related degree is an advantage.",
      tags: ["Back-End", "Developer"],
      time: "5 Hour Ago",
      location: 'Toronto',
      icon: require("./imgs/java-script.png"),
      id: '56842353'
    },
    {
      title: "Logistics Specialist",
      details:
        "full time Logistics Specialist to work at mumbai. having a related degree is an advantage.",
      tags: ["Logistics", "Storage"],
      time: "3 Hour Ago",
      location: 'Mumbai',
      icon: require("./imgs/warehouse.png"),
      id: '56842354'
    },    {
      title: "Senior Server Administrator",
      details:
        "full time Server Administrator to work at New York. having a related degree is an advantage.",
      tags: ["New", "Server", "Admin"],
      time: "45 Minutes Ago",
      location: 'New York',
      icon: require("./imgs/server.png"),
      id: '56842355'
    },    {
      title: "Cyber Security Specialist",
      details:
        "full time front-end developer to work at Melbourne. having a related degree is an advantage.",
      tags: ["New", "Security", "Admin"],
      time: "20 Minutes Ago",
      location: 'Melbourne',
      icon: require("./imgs/hacker.png"),
      id: '56842356'
    },
  ];

  return (
    <div>
      <div className="container mb-3 mt-3">
        <div className="jobs-container-left d-flex rounded-5 p-2 justify-content-between bg-light">
          <div className="d-flex flex-column p-4 justify-content-between">
            <h2 className="text-capitalize">
              find your dream job in our business.
            </h2>
            <p className="text-capitalize text-dark jobs-container-left-p">
              with the help of out company, success is not far.
              <br /> peek the page for your desired job.
            </p>
            <button className="btn btn-warning rounded-5 w-25">
              Let's Go!
            </button>
          </div>
          <div className="jobs-container-right rounded-4 m-1 p-4 d-flex flex-column bg-warning bg-opacity-50">
            <h4 className="text-capitalize m-2">
              you can choose from a wide range from programming to logistics!
            </h4>
            <div className="d-flex justify-content-around align-items-center">
              <p className="text-capitalize jobs-container-right-p text-dark">
                browse available jobs from below menu
                <br /> and apply for the one suits best for you!
              </p>
              <img
                className="jobs-container-right-icon" style={{"width":"10rem","height":"auto"}}
                alt="Icon"
                src={require("./imgs/perspective_matte.png")}
              ></img>
            </div>
          </div>
        </div>
        <div className="mt-3 d-flex justify-content-between">
          <div className="d-flex flex-column w-75">
            <div className=" jobs-menu-filter">
              <div className="rounded-5 p-4 jobs-menu bg-light">
                <h5 className="text-dark">Jobs</h5>
                <div className="d-flex w-50 justify-content-around jobs-menu-items">
                  <Link to={"/"} className="text-dark text-capitalize">
                    All Jobs
                  </Link>
                  <Link to={"/"} className="text-dark text-capitalize">
                    Featured
                  </Link>
                  <Link to={"/"} className="text-dark text-capitalize">
                    Contests
                  </Link>
                  <Link to={"/"} className="text-dark text-capitalize">
                    Remote
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <input
                className="form-control text-white rounded-5 jobs-search"
                placeholder="Search"
              ></input>
            </div>

            <div className="d-flex flex-wrap mt-3 jobs-cards-container">
              {jobs.map((job) => (
                <React.Fragment key={job.id}>
                <Jobs
                  title={job.title}
                  details={job.details}
                  time={job.time}
                  tags={job.tags}
                  icon={job.icon}
                  location={job.location}
                  id={job.id}
                  />
                  </React.Fragment>
              ))}
            </div>

            <div className="jobs-pagination rounded-5 mt-2 d-flex justify-content-center bg-light">
              <div className="w-75">
                <div className="d-flex justify-content-center text-dark w-100 justify-content-evenly jobs-pagination-items">
                  <p className="jobs-pagination-item m-0 pt-2 pb-2 text-dark">
                    <i className="bi bi-arrow-left-short"></i> Previous
                  </p>
                  <p className="jobs-pagination-item m-0 pt-2 pb-2 text-dark">
                    1
                  </p>
                  <p className="jobs-pagination-item m-0 pt-2 pb-2 text-dark">
                    2
                  </p>
                  <p className="jobs-pagination-item m-0 pt-2 pb-2 text-dark">
                    3
                  </p>
                  <p className="jobs-pagination-item m-0 pt-2 pb-2 text-dark">
                    4
                  </p>
                  <p className="jobs-pagination-item m-0 pt-2 pb-2 text-warning">
                    Next<i className="bi bi-arrow-right-short"></i>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-4 p-2 d-flex flex-column justify-content-between bg-light" style={{"width":"23%","height":"20rem"}}>
            <h5 className="text-warning">
              <i className="bi bi-funnel-fill"></i> Filters
            </h5>
            <div className=" dropdown jobs-right-filter-dropdown-category">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown button
              </button>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li>
                  <a className="dropdown-item active" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider"></hr>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </li>
              </ul>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
            <div className=" dropdown jobs-right-filter-dropdown-location">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown button
              </button>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li>
                  <a className="dropdown-item active" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider"></hr>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </li>
              </ul>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
            <div className=" jobs-right-filter-checkboxes">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                ></input>
                <label
                  className="form-check-label text-dark"
                  htmlFor="flexCheckDefault"
                >
                  Default checkbox
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                ></input>
                <label
                  className="form-check-label  text-dark"
                  htmlFor="flexCheckDefault"
                >
                  Default checkbox
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                ></input>
                <label
                  className="form-check-label  text-dark"
                  htmlFor="flexCheckDefault"
                >
                  Default checkbox
                </label>
              </div>
            </div>
            <button className="mt-2 text-center btn btn-warning rounded-5 w-100">
              Apply Filter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
