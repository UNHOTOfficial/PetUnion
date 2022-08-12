import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div
      className="container-sm p-3 d-flex flex-column align-items-center"
      style={{ maxWidth: "32rem" }}
    >
      <h1 className="fs-4 fw-bold">Create A Shopunion Account</h1>
      <p className="text-capitalize text-center">
        create a new shopunion account to begin your fascinating journey. have
        an account already? <Link to={"/forget-account"}>Find It Here.</Link>
      </p>
      <div className="row">
        <div class="col-sm-6">
          <label for="firstName" class="form-label">
            First name
          </label>
          <input
            type="text"
            class="form-control"
            id="firstName"
            placeholder=""
            value=""
            required=""
          ></input>
          <div class="invalid-feedback">Valid first name is required.</div>
        </div>
        <div class="col-sm-6">
          <label for="lastName" class="form-label">
            Last name
          </label>
          <input
            type="text"
            class="form-control"
            id="lastName"
            placeholder=""
            value=""
            required=""
          ></input>
          <div class="invalid-feedback">Valid last name is required.</div>
        </div>
        <div class="col-md-12 my-3">
          <label for="country" class="form-label">
            Country
          </label>
          <select class="form-select" id="country" required="">
            <option value="">Choose...</option>
            <option>United States</option>
          </select>
          <div class="invalid-feedback">Please select a valid country.</div>
        </div>
        <div class="col-sm-12">
          <label for="birthday" class="form-label">
            Birthday
          </label>
          <input
            type="date"
            class="form-control"
            id="Birthday"
            placeholder=""
            value=""
            required=""
          ></input>
          <div class="invalid-feedback">Valid first name is required.</div>
        </div>
        <hr className="my-4"></hr>
        <div class="col-12 mb-3">
          <label for="username" class="form-label">
            Email
          </label>
          <div class="input-group has-validation">
            <input
              type="text"
              class="form-control"
              id="email"
              placeholder="Email"
              required=""
            ></input>
            <div class="invalid-feedback">Your email is required.</div>
          </div>
        </div>
        <div class="col-sm-6">
          <label for="password" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="Password"
            value=""
            required=""
          ></input>
          <div class="invalid-feedback">Password is required.</div>
        </div>
        <div class="col-sm-6">
          <label for="lastName" class="form-label">
            Password Confirmation
          </label>
          <input
            type="password"
            class="form-control"
            id="password-confirmation"
            placeholder="Password Confirmation"
            value=""
            required=""
          ></input>
          <div class="invalid-feedback">Passwords Don't Match.</div>
        </div>
        <hr className="my-4"></hr>
        <div class="col-md-12">
          <label for="country" class="form-label">
            Country Code
          </label>
          <select class="form-select" id="country" required="">
            <option value="">Choose...</option>
            <option>United States</option>
          </select>
          <div class="invalid-feedback">Please select a valid country.</div>
        </div>
        <div class="col-sm-12 my-3">
          <label for="phone" class="form-label">
            Phone
          </label>
          <input
            type="text"
            class="form-control"
            id="phone"
            placeholder=""
            value=""
            required=""
          ></input>
          <div class="invalid-feedback">Valid first name is required.</div>
        </div>
        <small className="text-muted text-center">
          Be sure to enter a phone number you can always access. It will be used
          to verify your identity any time you sign in on a new device or web
          browser. Messaging or data rates may apply.
        </small>
        <div className="d-flex mt-3 justify-content-around">
          <span>Verify With:</span>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              checked
            ></input>
            <label class="form-check-label" for="flexRadioDefault1">
              Email
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            ></input>
            <label class="form-check-label" for="flexRadioDefault2">
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
        <button className="btn btn-warning col-sm-6 mx-auto mt-3">
          Continue
        </button>
      </div>
    </div>
  );
}
