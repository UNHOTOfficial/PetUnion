import React from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import DashboradContent from "./DashboradContent";

export default function Profile() {
  const navigate = useNavigate();
  const email = localStorage.getItem("Email");
  const [userData, setUserData] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("AuthKey") === null) {
      navigate("/signin");
    }
    axios
      .get(`http://localhost:3001/api/users/${email}`)
      .then((res) => {
        setUserData(res.data);
        setIsLoaded(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleSignout = () => {
    localStorage.removeItem("AuthKey");
    navigate("/");
    window.location.reload();
  };
  const handleActiveList = () => {
    const listItem = document.activeElement.classList.add("active");
  };
  if (isLoaded === true) {
    return (
      <div className="container row mx-auto">
        <div className="col-3 border rounded-3 p-0">
          <div className="d-flex justify-content-between align-items-center border-bottom border-2 p-3">
            <div className="d-flex">
              <img
                className="me-2"
                src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png"
                alt="User"
                style={{ width: "3rem", height: "3rem" }}
              />
              <div className="d-flex flex-column">
                <span>{userData.firstName + " " + userData.lastName}</span>
                <small className="text-muted">{userData.email}</small>
              </div>
            </div>
            <Link to={"/profile/info"} role="button">
              <i class="bi bi-pencil-square fs-5"></i>
            </Link>
          </div>
          <div class="list-group list-group-flush">
            <Link
              onClick={handleActiveList}
              to={"/profile/orders"}
              className="list-group-item list-group-item-action user-select-none py-3"
              role="button"
            >
              <i class="bi bi-bag"></i> Orders
            </Link>
            <Link
              onClick={handleActiveList}
              to={"/profile/favorites"}
              className="list-group-item list-group-item-action user-select-none py-3"
              role="button"
            >
              <i class="bi bi-heart"></i> Favorites
            </Link>
            <Link
              onClick={handleActiveList}
              to={"/profile/comments"}
              className="list-group-item list-group-item-action user-select-none py-3"
              role="button"
            >
              <i class="bi bi-chat-right-text"></i> Comments
            </Link>
            <Link
              onClick={handleActiveList}
              to={"/profile/addresses"}
              className="list-group-item list-group-item-action user-select-none py-3"
              role="button"
            >
              <i class="bi bi-pin"></i> Addresses
            </Link>
            <Link
              onClick={handleActiveList}
              to={"/profile/messages"}
              className="list-group-item list-group-item-action user-select-none py-3"
              role="button"
            >
              <i class="bi bi-chat"></i> Messages
            </Link>
            <Link
              onClick={handleActiveList}
              to={"/profile/info"}
              className="list-group-item list-group-item-action user-select-none py-3"
              role="button"
            >
              <i class="bi bi-person"></i> Account Info
            </Link>
            <li
              onClick={handleSignout}
              className="list-group-item list-group-item-action user-select-none py-3"
              role="button"
            >
              <i class="bi bi-box-arrow-left"></i> Sign Out
            </li>
          </div>
        </div>
        <DashboradContent />
      </div>
    );
  } else {
    <div>Loading...</div>;
  }
}
