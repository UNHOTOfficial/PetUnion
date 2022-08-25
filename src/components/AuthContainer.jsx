import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AuthContainer(props) {
  const navigate = useNavigate();
  const handleSignout = () => {
    localStorage.removeItem("AuthKey");
    navigate("/");
    window.location.reload();
  };
  const handleProfile = () => {
    navigate("/profile");
  };
  if (props.isLoggedIn) {
    return (
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="bi bi-person p-1 m-0 fs-5"></i>
          <span>{props.name}</span>
        </button>
        <ul class="dropdown-menu">
          <li>
            <button onClick={handleProfile} class="dropdown-item" type="button">
              Profile
            </button>
          </li>
          <li>
            <button class="dropdown-item" type="button">
              Another action
            </button>
          </li>
          <li>
            <button onClick={handleSignout} class="dropdown-item" type="button">
              Sign Out
            </button>
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="d-flex account-container">
        <Link to={"/signin"} className="btn btn-outline-dark me-2">
          Sign In
        </Link>
        <Link to={"/signup"} className="btn btn-warning me-2">
          Get Started
        </Link>
      </div>
    );
  }
}
