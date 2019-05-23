import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./form.css";

class Form extends Component {
  componentDidMount() {
    document.title = this.props.title;
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
          <div className="container">
            <h1 className="header">VetSx &nbsp;</h1>
            <div className="tagline">Care. Heal. Connect.</div>
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
                <li className="nav-item active">
                  <a className="nav-link" id="patientStat" href="#">
                    Patient Status
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    | About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    | Consumer |
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container mt-3">
          <h2>Patient Status</h2>
          <br />
        </div>
      </div>
    );
  }
}

export default Form;
