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
                <Link className="nav-link p-0 text-muted Fitem" to='/Blog'>Blog</Link>
              </li>
              <li className="nav-item mb-2">
              <Link className="nav-link p-0 text-muted Fitem" to='/About'>About</Link>

              </li>
              <li className="nav-item mb-2">
              <Link className="nav-link p-0 text-muted Fitem" to='/Contact'>Contact</Link>

              </li>
              <li className="nav-item mb-2">
              <Link className="nav-link p-0 text-muted Fitem" to='/Jobs'>Job Offers</Link>

              </li>
              <li className="nav-item mb-2">
              <Link className="nav-link p-0 text-muted Fitem" to='/Cooperation'>Cooperation</Link>

              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>Customers</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
              <Link className="nav-link p-0 text-muted Fitem" to='/Refund'>Refund</Link>
              </li>
              <li className="nav-item mb-2">
              <Link className="nav-link p-0 text-muted Fitem" to='/Grantee'>Grantee</Link>

              </li>
              <li className="nav-item mb-2">
              <Link className="nav-link p-0 text-muted Fitem" to='/Complication'>Complication</Link>

              </li>
              <li className="nav-item mb-2">
                <Link className="nav-link p-0 text-muted Fitem" to='/Privacy-Policy'>Privacy Policy</Link>

              </li>
              <li className="nav-item mb-2">
              <Link className="nav-link p-0 text-muted Fitem" to='/Usage-Conditions'>Usage Conditions</Link>

              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-3">
            <h5>Help!</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
              <Link className="nav-link p-0 text-muted Fitem" to='/FAQs'>FAQs</Link>

              </li>
              <li className="nav-item mb-2">
              <Link className="nav-link p-0 text-muted Fitem" to='/Support'>Support</Link>

              </li>
              <li className="nav-item mb-2">
              <Link className="nav-link p-0 text-muted Fitem" to='/How-To'>How To...</Link>

              </li>
              <li className="nav-item mb-2">
              <Link className="nav-link p-0 text-muted Fitem" to='/Help-Center'>Help Center</Link>

              </li>
              <li className="nav-item mb-2">
              <Link className="nav-link p-0 text-muted Fitem" to='/Report-A-Bug'>Report A Bug</Link>

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
              <a className="link-dark" href="#"><i class="bi bi-instagram Fitem"></i></a>
            </li>
            <li className="ms-3">
              <a className="link-dark" href="#"><i class="bi bi-linkedin Fitem"></i></a>
            </li>
            <li className="ms-3">
              <a className="link-dark" href="#"><i class="bi bi-telegram Fitem"></i></a>
            </li>
            <li className="ms-3">
              <a className="link-dark" href="#"><i class="bi bi-twitter Fitem"></i></a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
