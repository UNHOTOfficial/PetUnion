import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function SignUp() {
  const postSignUpData = () => {
    const data = JSON.stringify({
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      country: document.getElementById("country").value,
      birthday: document.getElementById("birthday").value,
      phone: document.getElementById("phone").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    });

    axios
      .post("http://localhost:3001/api/users", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        const alert = document.querySelector(".signup-alert");
        alert.textContent = "Signed Up Successfully.";
      })
      .catch((error) => {
        const alert = document.querySelector(".signup-alert");
        alert.textContent = error.response.data;
      });
  };

  return (
    <div
      className="container-sm p-3 d-flex flex-column align-items-center needs-validation"
      noValidate
      style={{ maxWidth: "32rem" }}
    >
      <h1 className="fs-4 fw-bold">Create A Shopunion Account</h1>
      <p className="text-capitalize text-center">
        create a new shopunion account to begin your fascinating journey. have
        an account already? <Link to={"/forget-account"}>Find It Here.</Link>
      </p>
      <div className="row">
        <div className="col-sm-6">
          <label for="firstName" className="form-label">
            First name
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            placeholder=""
            required=""
          ></input>
          <div className="invalid-feedback">Valid first name is required.</div>
        </div>
        <div className="col-sm-6">
          <label for="lastName" className="form-label">
            Last name
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            placeholder=""
            required=""
          ></input>
          <div className="invalid-feedback">Valid last name is required.</div>
        </div>
        <div className="col-md-12 my-3">
          <label for="country" className="form-label">
            Country
          </label>
          <select className="form-select" id="country" required="">
            <option>Choose...</option>
            <option>United States</option>
          </select>
          <div className="invalid-feedback">Please select a valid country.</div>
        </div>
        <div className="col-sm-12">
          <label for="birthday" className="form-label">
            Birthday
          </label>
          <input
            type="date"
            className="form-control"
            id="birthday"
            placeholder=""
            required=""
          ></input>
          <div className="invalid-feedback">Valid first name is required.</div>
        </div>
        <hr className="my-4"></hr>
        <div className="col-12 mb-3">
          <label for="username" className="form-label">
            Email
          </label>
          <div className="input-group has-validation">
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Email"
              required=""
            ></input>
            <div className="invalid-feedback">Your email is required.</div>
          </div>
        </div>
        <div className="col-sm-6">
          <label for="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            required=""
          ></input>
          <div className="invalid-feedback">Password is required.</div>
        </div>
        <div className="col-sm-6">
          <label for="lastName" className="form-label">
            Password Confirmation
          </label>
          <input
            type="password"
            className="form-control"
            id="password-confirmation"
            placeholder="Password Confirmation"
            required=""
          ></input>
          <div className="invalid-feedback">Passwords Don't Match.</div>
        </div>
        <hr className="my-4"></hr>
        <div className="col-md-12">
          <label for="country" className="form-label">
            Country Code
          </label>
          <select className="form-select" id="country" required="">
            <option>Choose...</option>
            <option>+1</option>
          </select>
          <div className="invalid-feedback">Please select a valid country.</div>
        </div>
        <div className="col-sm-12 my-3">
          <label for="phone" className="form-label">
            Phone
          </label>
          <input
            type="text"
            className="form-control"
            id="phone"
            placeholder=""
            required=""
          ></input>
          <div className="invalid-feedback">Valid first name is required.</div>
        </div>
        <small className="text-muted text-center">
          Be sure to enter a phone number you can always access. It will be used
          to verify your identity any time you sign in on a new device or web
          browser. Messaging or data rates may apply.
        </small>
        <div className="d-flex mt-3 justify-content-around">
          <span>Verify With:</span>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              checked
            ></input>
            <label className="form-check-label" for="flexRadioDefault1">
              Email
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            ></input>
            <label className="form-check-label" for="flexRadioDefault2">
              Text Message
            </label>
          </div>
        </div>
        <hr className="my-4"></hr>
        <p>CAPTCHA SECTION</p>
        <hr className="my-4"></hr>
        <div className="col-sm-12">
          <small>
            By Creating An Account, You Accept{" "}
            <Link to={"/privacy-policy"}>Privacy Policy</Link> And{" "}
            <Link to={"/terms"}>Terms Of Use</Link>.
          </small>
        </div>
        <button
          onClick={postSignUpData}
          className="btn btn-warning col-sm-6 mx-auto mt-3"
        >
          Continue
        </button>
      </div>
      <div
        className="signup-alert alert text-capitalize mt-3 d-none"
        role="alert"
      ></div>
    </div>
  );
}