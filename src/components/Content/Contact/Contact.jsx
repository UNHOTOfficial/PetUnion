import React from "react";
import "./Contact.scss";

export default function Contact() {
  const offices = [
    {
      title: "United States",
      src: require("./Imgs/Flags/usa.png"),
      address: [
        "235 S Main St, Las Vegas, NV 89101, USA",
        "834 Fifth Avenue, New York, NY 10065, USA",
      ],
    },
    {
      title: "Canada",
      src: require("./Imgs/Flags//canada.png"),
      address: ["659 Lake Shore Blvd W, Toronto, ON M5V 1A7, Canada"],
    },
    {
      title: "Brazil",
      src: "https://cdn-icons-png.flaticon.com/128/688/688444.png",
      address: [
        "Praça Quinze de Novembro, 23 - Centro, Rio de Janeiro - RJ, 20010-010, Brazil",
        "R. Formosa, 367 - Centro Histórico de São Paulo, São Paulo - SP, 01049-911, Brazil",
      ],
    },
    {
      title: "South Africa",
      src: require("./Imgs/Flags/south-africa.png"),
      address: ["2 Milton Rd, Sea Point, Cape Town, 8060, South Africa"],
    },
    {
      title: "France",
      src: "https://cdn-icons-png.flaticon.com/128/3187/3187465.png",
      address: [
        `'Lugar a visitar, 350 Rue de l'Université, 75007 Paris, France'`,
      ],
    },
    {
      title: "Italy",
      src: require("./Imgs/Flags/italy.png"),
      address: ["Via Santa Maria, 98-114, 56126 Pisa PI, Italy"],
    },
    {
      title: "United Kingdom",
      src: require("./Imgs/Flags/united-kingdom.png"),
      address: ["Thames RIB Experience, Victoria Embankment, London WC2N 6PA"],
    },
    {
      title: "Ireland",
      src: "https://cdn-icons-png.flaticon.com/128/4145/4145394.png",
      address: ["210 Clontarf Rd, Clontarf, Dublin 3, D03 A6R9, Ireland"],
    },
    {
      title: "Germany",
      src: require("./Imgs/Flags/germany.png"),
      address: ["Gneisenaustraße, 10961 Berlin, Germany"],
    },
    {
      title: "Netherlands",
      src: require("./Imgs/Flags/netherlands.png"),
      address: [
        "Waag Apartments, Korte Koningsstraat 33, 1011 EZ Amsterdam, Netherlands",
      ],
    },
    {
      title: "Cyprus",
      src: require("./Imgs/Flags/cyprus.png"),
      address: ["Spyrou Protopapa, Nicosia, Cyprus"],
    },
    {
      title: "Turkey",
      src: require("./Imgs/Flags/turkey.png"),
      address: ["1314. Sk. 7-5, Gençlik, 07100 Muratpaşa/Antalya, Turkey"],
    },
    {
      title: "Sweden",
      src: require("./Imgs/Flags/sweden.png"),
      address: ["Hantverkargatan 3F, 112 21 Stockholm, Sweden"],
    },
    {
      title: "Norway",
      src: require("./Imgs/Flags/norway.png"),
      address: ["Fjord City, Langkaia 1, 0150 Oslo, Norway"],
    },
    {
      title: "Russia",
      src: require("./Imgs/Flags/russia.png"),
      address: [
        "INTERCOM- Недвижимость - агентство недвижимости, контакты, Moscow, Russia, 119019",
      ],
    },
    {
      title: "Romania",
      src: require("./Imgs/Flags/romania.png"),
      address: ["Bloc Z2, Bulevardul Tineretului 5, București, Romania"],
    },
    {
      title: "United Arab Emirates",
      src: require("./Imgs/Flags/united-arab-emirates.png"),
      address: ["Yabo, Downtown - Dubai - United Arab Emirates"],
    },
    {
      title: "India",
      src: require("./Imgs/Flags/india.png"),
      address: [
        "Bharat Petroleum Refinery, Mahul, Trombay, Mumbai, Maharashtra 400071, India",
      ],
    },
    {
      title: "South Korea",
      src: "https://cdn-icons-png.flaticon.com/128/6510/6510704.png",
      address: ["129-4 Bogwang-dong, Yongsan-gu, Seoul, South Korea"],
    },
    {
      title: "Australia",
      src: "https://cdn-icons-png.flaticon.com/128/297/297092.png",
      address: ["Port Melbourne, Victoria 3207, Australia"],
    },
  ];

  return (
    <div className="">
      <div className="d-flex align-items-center mt-2 mb-3">
        <div className="col-md-7 col-lg-8 border m-3 mb-0 p-4 rounded">
          <div className="d-flex justify-content-between flex-column mb-2">
            <div className="d-flex justify-content-between">
              <h4 className="mb-3">Contact Form</h4>
              <p className="text-capitalize text-secondary mb-1">
                have an account?
                <a className="ms-2 Contact-Form-Signin-Link" href="#NaN">
                  Sign In
                </a>
              </p>
            </div>
          </div>
          <form className="needs-validation" action="">
            <div className="row g-3">
              <div className="col-sm-6">
                <label for="firstName" className="form-label">
                  First name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder=""
                  value=""
                  required="true"
                ></input>
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
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
                  value=""
                  required="true"
                ></input>
                <div className="invalid-feedback">Valid last name is required.</div>
              </div>

              <div className="col-12">
                <label for="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="you@example.com"
                  required="true"
                ></input>
                <div className="invalid-feedback">
                  Please enter a valid email address so we can reach you.
                </div>
              </div>

              <div className="col-12">
                <label for="email" className="form-label">
                  Message
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="text"
                  placeholder="Your Message"
                ></textarea>
                <div className="invalid-feedback">
                  Please enter a valid email address so we can reach you.
                </div>
              </div>

              <hr className="mt-4 mb-2"></hr>
              <div className="d-flex justify-content-evenly">
                <button className="w-25 btn btn-warning btn-lg" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="d-flex flex-column align-items-center">
          <h4 className="mb-3">Need To Contact?</h4>
          <div className="text-center">
            <img
              className="w-75"
              src={require("./Imgs/Speech to text-pana.png")}
              alt=""
            />
          </div>
          <p className="text-capitalize m-3 text-center">
            you can either get in tough by filling out the left form, or compose
            us an email. we are also available on social medias. you need an
            appointment to come to physical offices!
          </p>
        </div>
      </div>

      <a href="#Locations-Container">
        <div className="d-flex justify-content-center">
          <p className="me-2 fs-5 mt-1">Physical Locations</p>
          <i className="bi bi-arrow-down-circle fs-3"></i>
        </div>
      </a>

      <div className="d-flex align-items-start" id="Locations-Container">
        <div className="col-md-7 col-lg-8 border m-3 rounded">
          {offices.map((office) => (
            <div className="border-top border-bottom p-3">
              <div className="d-flex flex-row align-items-center">
                <img className="flag" src={office.src} alt={office.title} />
                <h6 className="mb-0 ms-2">{office.title}</h6>
              </div>
              <div>
                {office.address.map((address) => (
                  <div className="d-flex mt-1">
                    <img className="pin" src={require("./Imgs/pin.png")}></img>
                    <h6 className="mb-0 ">{address}</h6>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex flex-column align-items-center mt-4">
          <h4 className="mb-3 text-center">Need To Come In Person?</h4>
          <img
            className="w-100"
            src={require("./Imgs/Navigation-amico.png")}
            alt=""
          />
          <p className="text-capitalize text-center m-2">
            here are our physical location. for inquiries or special operations
            you can come in person. do not forget to take an appointment before
            you come!
          </p>
          <button className="btn btn-warning text-capitalize mt-4">
            make an appointment
          </button>
          <a className="mt-2" href="#map">
            <div className="d-flex justify-content-center">
              <p className="me-2 fs-5 mt-1">Map</p>
              <i className="bi bi-arrow-down-circle fs-3"></i>
            </div>
          </a>
        </div>
      </div>

      <a href="#map">
        <div className="d-flex justify-content-center">
          <p className="me-2 fs-5 mt-1">Map</p>
          <i className="bi bi-arrow-down-circle fs-3"></i>
        </div>
      </a>

      <div className="d-flex mt-2" id="map">
        <iframe
          className="col-md-7 col-lg-8 m-3 rounded"
          title="OfficesMap"
          src="https://www.google.com/maps/d/embed?mid=1IO3q-aF1ln9y4Xe8GTvkNjbTmftV9L0&hl=en&ehbc=2E312F"
          width="1000"
          height="650"
        ></iframe>

        <div className="d-flex flex-column align-items-center mt-4">
          <h4 className="mb-3">Find Our Locations On Map!</h4>
          <div className="text-center">
            <img
              className="w-100"
              src={require("./Imgs/Navigation-pana.png")}
              alt=""
            />
          </div>
          <p className="text-capitalize m-3 text-center">
            here you can find our locations on the map. locations shown with a "
            <img src="https://mt.googleapis.com/vt/icon/name=icons/onion/SHARED-mymaps-container-bg_4x.png,icons/onion/SHARED-mymaps-container_4x.png,icons/onion/1592-heart_4x.png&highlight=ff000000,F9A825&scale=1.0"></img>
            ".
          </p>
        </div>
      </div>
    </div>
  );
}
