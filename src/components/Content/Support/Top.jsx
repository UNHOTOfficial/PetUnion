import React from "react";
import { Link } from "react-router-dom";
import LiveSupport from "./LiveSupport";
import SendEmail from "./SendEmail";

export default function Top() {
  return (
    <React.Fragment>
      <div className="col-9 d-flex flex-column">
        <div className="d-flex align-items-center text-dark">
          <img
            src={require("./imgs/24-hours-support.png")}
            alt="support"
            style={{ width: "5rem" }}
            ></img>
          <h1>Support</h1>
        </div>
        <p className="text-capitalize">
          please carefully read either <Link to={"/FAQs"}>Faqs</Link> or{" "}
          <Link to={"/Help"}>Help Center</Link>to solve your problem. if they
          didn't help, use this page to contact a live support assistant.
        </p>
      <LiveSupport/>
      <SendEmail/>
      </div>
            </React.Fragment>
  );
}
