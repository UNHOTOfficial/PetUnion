import React from "react";

export default function TableOfContent() {
  return (
    <div className="col-3">
      <ul className="list-group border rounded-2 bg-light mt-5">
        <strong className="ms-3 mt-3 mb-3">Content</strong>
        <li className="list-group-item border-0 text-link bg-light">General Rules</li>
        <li className="list-group-item border-0 text-link bg-light">User Or Customer</li>
        <li className="list-group-item border-0 text-link bg-light">Seller</li>
        <li className="list-group-item border-0 text-link bg-light">Gift Cards</li>
        <li className="list-group-item border-0 text-link bg-light">7-Day Refund</li>
        <li className="list-group-item border-0 text-link bg-light">Comments</li>
      </ul>
    </div>
  );
}
