import React from "react";
import "./landing.css";

const Landing = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
        <div className="container">
          <h1 className="header">VetSx &nbsp;</h1>
          {/* <!-- <div className="tagline">Care. Heal. Connect.</div> --> */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link active" href="/login">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <!-- Subtitle and Brief Description --> */}
      <div className="wrapper">
        <p className="text-center" id="subtitle">
          Care. Heal. Connect.
        </p>
        <hr width="55%" color="#343a40" />
        <p className="text-center" id="description">
          Dynamic and scalable communications solution for veterinary clinics
          and their clients.
        </p>
      </div>
    </div>
  );
};

export default Landing;
