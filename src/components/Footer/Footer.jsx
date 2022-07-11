import React from "react";
import "./Footer.scss";

export default function Footer() {
  const changeCopyrightYear = () => {
    const date = new Date();
    const year = date.getFullYear();
    return year;
  };

  return (
    <div className="container border-top">
      <footer className="py-5">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h5>With PetUnion</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted Fitem">
                  Blog
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted Fitem">
                  About
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted Fitem">
                  Contact
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted Fitem">
                  Job Offers
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted Fitem">
                  Cooperation
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>Customers</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted Fitem">
                  Refund
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted Fitem">
                  Guarantee
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted Fitem">
                  Complication
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted Fitem">
                  Privacy Policy
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted Fitem">
                  Usage Conditions
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>Help!</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted Fitem">
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted Fitem">
                  Support
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted Fitem">
                  How To...
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted Fitem">
                  Help Center
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted Fitem">
                  Report A Bug
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                ></input>
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
              <a className="link-dark" href="#"></a>
            </li>
            <li className="ms-3">
              <a className="link-dark" href="#"></a>
            </li>
            <li className="ms-3">
              <a className="link-dark" href="#"></a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
