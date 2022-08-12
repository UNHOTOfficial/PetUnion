import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import axios from "axios";

export default function Footer() {
  const postnewsletterSubs = () => {
    const email = document.getElementById("newsletter-email").value;
    const data = JSON.stringify({
      email: email,
    });
    axios
      .post("http://localhost:3001/api/newsletter", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then(
        document
          .getElementById("subscribe-newsletter-message")
          .classList.remove("d-none")
      )
      .catch((error) => {
        console.log(error);
      });
  };

  const changeCopyrightYear = () => {
    const date = new Date();
    const year = date.getFullYear();
    return year;
  };
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="border-top footer w-100 bg-material border-top border-divider ps-5 pe-5">
      <footer className="pt-5 ps-3 pe-3">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h5>
              <strong>With PetUnion</strong>
            </h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link className="nav-link p-0 text-muted Fitem" to="/blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link className="nav-link p-0 text-muted Fitem" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link className="nav-link p-0 text-muted Fitem" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link className="nav-link p-0 text-muted Fitem" to="/jobs">
                  Job Offers
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  className="nav-link p-0 text-muted Fitem"
                  to="/cooperation"
                >
                  Cooperation
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>
              <strong>Customers</strong>
            </h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link className="nav-link p-0 text-muted Fitem" to="/refund">
                  Refund
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link className="nav-link p-0 text-muted Fitem" to="/guarantee">
                  Guarantee
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  className="nav-link p-0 text-muted Fitem"
                  to="/complication"
                >
                  Complication
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link
                  className="nav-link p-0 text-muted Fitem"
                  to="/privacy-Policy"
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link className="nav-link p-0 text-muted Fitem" to="/terms">
                  Terms Of Use
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>
              <strong>Help!</strong>
            </h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link className="nav-link p-0 text-muted Fitem" to="/FAQs">
                  FAQs
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link className="nav-link p-0 text-muted Fitem" to="/support">
                  Support
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link className="nav-link p-0 text-muted Fitem" to="/howto">
                  How To...
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link className="nav-link p-0 text-muted Fitem" to="/help">
                  Help Center
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link className="nav-link p-0 text-muted Fitem" to="/reportbug">
                  Report A Bug
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-5 offset-md-1 mb-3">
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-column">
                <form>
                  <h5>
                    <strong>Subscribe to our newsletter</strong>
                  </h5>
                  <p className="text-secondary">
                    Subscribe To Get Special Deals And Coupons.
                  </p>
                  <div className="mb-3 d-flex flex-column">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="form-control w-75 mb-2 bg-input"
                      id="newsletter-email"
                      aria-describedby="emailHelp"
                    ></input>
                    <span
                      id="subscribe-newsletter-message"
                      className="text-success d-none"
                    >
                      Subscribed Successfully.
                    </span>
                  </div>
                  <button
                    onClick={postnewsletterSubs}
                    className="btn btn-warning"
                    type="button"
                  >
                    Subscribe
                  </button>
                </form>
                <Link className="text-muted mt-2" to={"/apps"}>
                  <div className="d-flex justify-content-start align-items-center">
                    <i className="fa-brands fa-google-play"></i>
                    <i className="fa-brands fa-app-store"></i>
                    <p className="m-0 ms-1">Download Our Apps</p>
                  </div>
                </Link>
              </div>
              <p
                onClick={scrollTop}
                className="text-muted"
                style={{ cursor: "pointer" }}
              >
                <i className="fa-solid fa-arrow-up"></i>TOP
              </p>
            </div>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between p-2 fs-6 my-4 border-top pb-0">
          <p className="text-secondary">
            © {changeCopyrightYear()}, ShopUnion Inc. All rights reserved.
          </p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3 instagram">
              <a className="link-dark" href="#">
                <i className="bi bi-instagram Fitem"></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-dark" href="#">
                <i className="bi bi-linkedin Fitem"></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-dark telegram" href="#">
                <i className="bi bi-telegram Fitem"></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-dark twitter" href="#">
                <i className="bi bi-twitter Fitem"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
