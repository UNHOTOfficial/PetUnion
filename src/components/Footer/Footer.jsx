import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

export default function Footer() {
  const changeCopyrightYear = () => {
    const date = new Date();
    const year = date.getFullYear();
    return year;
  };

  return (
    <div className="container border-top">
      <footer className="pt-5">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h5>With PetUnion</h5>
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
            <h5>Customers</h5>
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
            <h5>Help!</h5>
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
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div className="mb-3">
                <div>
    <input type="email" placeholder="Email Address" className="form-control w-50 mb-2" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
  </div>
                <button className="btn btn-primary" type="button">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>© {changeCopyrightYear()} Company, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
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
              <a className="link-dark" href="#">
                <i className="bi bi-telegram Fitem"></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-dark" href="#">
                <i className="bi bi-twitter Fitem"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
