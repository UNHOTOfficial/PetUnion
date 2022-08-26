import React from "react";
import { Link } from "react-router-dom";

export default function DashboradContent(props) {
  const switchHandler = () => {
    switch (props.content) {
      case "overview":
        return (
          <div className="border rounded-3 p-3 d-flex flex-column">
            <span className="fw-bold">Orders</span>
            "Order Products"
          </div>
        );
      case "orders":
        return (
          <div className="border rounded-3 p-3 d-flex flex-column">
            <span className="fw-bold">Orders</span>
            "Empty"
          </div>
        );

      case "favorites":
        return (
          <div className="border rounded-3 p-3 d-flex flex-column">
            <span className="fw-bold">Favorites</span>
            "Empty"
          </div>
        );
      case "comments":
        return (
          <div className="border rounded-3 p-3 d-flex flex-column">
            <span className="fw-bold">Comments</span>
            "Empty"
          </div>
        );
      case "addresses":
        return (
          <div className="border rounded-3 p-3 d-flex flex-column">
            <span className="fw-bold">Addresses</span>
            "Empty"
          </div>
        );
      case "messages":
        return (
          <div className="border rounded-3 p-3 d-flex flex-column">
            <span className="fw-bold">Messages</span>
            "Empty"
          </div>
        );
      case "info":
        return (
          <div>
            <div className="border rounded-3 p-3 d-flex flex-column">
              <span className="fw-bold">Account Info</span>
              <div className="row mt-2">
                <div className="col-6 d-flex align-items-center justify-content-between border-bottom border-end pb-2">
                  <div className="d-flex flex-column">
                    <span className="text-muted text-capitalize">
                      First Name
                    </span>
                    <span>{props.firstName}</span>
                  </div>
                  <i
                    class="bi bi-pencil-square fs-5 text-primary"
                    role={"button"}
                  ></i>
                </div>
                <div className="col-6 d-flex align-items-center justify-content-between border-bottom">
                  <div className="d-flex flex-column">
                    <span className="text-muted text-capitalize">
                      Last Name
                    </span>
                    <span>{props.lastName}</span>
                  </div>
                  <i
                    class="bi bi-pencil-square fs-5 text-primary"
                    role={"button"}
                  ></i>
                </div>
                <div className="col-6 d-flex align-items-center justify-content-between border-bottom border-end py-2">
                  <div className="d-flex flex-column">
                    <span className="text-muted text-capitalize">email</span>
                    {props.isEmailVerified === false ? (
                      <div className="d-flex">
                        <span className="me-2">{props.email}</span>
                        <div className="text-danger">
                          <i class="bi bi-x-lg"></i>
                          <small>
                            Unverified{" "}
                            <Link className="ms-2" to={"/profile/info/verify"}>
                              Verify Now
                            </Link>
                          </small>
                        </div>
                      </div>
                    ) : (
                      <div className="d-flex">
                        <span className="me-2">{props.email}</span>
                        <div className="text-success">
                          <i class="bi bi-check-lg m-0"></i>
                          <small>Verified</small>
                        </div>
                      </div>
                    )}
                  </div>
                  <i
                    class="bi bi-pencil-square fs-5 text-primary"
                    role={"button"}
                  ></i>
                </div>
                <div className="col-6 d-flex align-items-center justify-content-between border-bottom">
                  <div className="d-flex flex-column">
                    <span className="text-muted text-capitalize">password</span>
                    <span>{props.password}</span>
                  </div>
                  <i
                    class="bi bi-pencil-square fs-5 text-primary"
                    role={"button"}
                  ></i>
                </div>
                <div className="col-6 d-flex align-items-center justify-content-between border-bottom border-end py-2">
                  <div className="d-flex flex-column">
                    <span className="text-muted text-capitalize">phone</span>
                    {props.isPhoneVerified === false ? (
                      <div className="d-flex">
                        <span className="me-2">{props.phone}</span>
                        <div className="text-danger">
                          <i class="bi bi-x-lg"></i>
                          <small>
                            Unverified{" "}
                            <Link className="ms-2" to={"/profile/info/verify"}>
                              Verify Now
                            </Link>
                          </small>
                        </div>
                      </div>
                    ) : (
                      <div className="d-flex">
                        <span className="me-2">{props.phone}</span>
                        <div className="text-success">
                          <i class="bi bi-check-lg m-0"></i>
                          <small>Verified</small>
                        </div>
                      </div>
                    )}
                  </div>
                  <i
                    class="bi bi-pencil-square fs-5 text-primary"
                    role={"button"}
                  ></i>
                </div>
                <div className="col-6 d-flex align-items-center justify-content-between border-bottom">
                  <div className="d-flex flex-column">
                    <span className="text-muted text-capitalize">birthday</span>
                    <span>{props.birthday}</span>
                  </div>
                  <i
                    class="bi bi-pencil-square fs-5 text-primary"
                    role={"button"}
                  ></i>
                </div>
                <div className="col-6 d-flex align-items-center justify-content-between border-end pt-2">
                  <div className="d-flex flex-column">
                    <span className="text-muted text-capitalize">country</span>
                    <span>{props.country}</span>
                  </div>
                  <i
                    class="bi bi-pencil-square fs-5 text-primary"
                    role={"button"}
                  ></i>
                </div>
              </div>
            </div>
            <div className="border rounded-3 p-3 d-flex flex-column mt-3">
              <span className="fw-bold">Delete Account</span>
              <p className="text-capitalize mt-2 text-muted">
                you can delete your account here. be conscious, this action is
                irreversible!
              </p>
              <div className="d-flex align-items-center mx-auto justify-content-evenly">
                <button className="btn btn-danger">Delete Account</button>
                <small className="text-capitalize text-muted w-50">
                  by clicking the left button, your account will be deleted!
                </small>
              </div>
            </div>
          </div>
        );
      default:
        break;
    }
  };

  return <div className="col-9">{switchHandler()}</div>;
}
