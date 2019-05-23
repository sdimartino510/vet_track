import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./form.css";

class Form extends Component {
  state = {};
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
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="date-tab"
                data-toggle="tab"
                role="tab"
                href="#date"
                aria-controls="date"
                aria-selected="true"
              >
                Date & Time
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="basic-tab"
                data-toggle="tab"
                role="tab"
                href="#basic"
                aria-controls="basic"
                aria-selected="false"
              >
                Profile
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="doc-tab"
                data-toggle="tab"
                role="tab"
                href="#doc"
                aria-controls="doc"
                aria-selected="false"
              >
                Providers
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="vitals-tab"
                data-toggle="tab"
                role="tab"
                href="#vitals"
                aria-controls="vitals"
                aria-selected="false"
              >
                Vitals
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="surg-tab"
                data-toggle="tab"
                role="tab"
                href="#surg"
                aria-controls="surgery"
                aria-selected="false"
              >
                Surgical Status
              </a>
            </li>
          </ul>
          {/* <!-- Tab Panes --> */}
          {/* <!-- DATE & TIME --> */}
          <div
            className="tab-pane fade show active"
            id="date"
            role="tabpanel"
            aria-labelledby="date-tab"
          >
            Date & Time
          </div>
          {/* <!-- PROFILE --> */}
          <div
            className="tab-pane fade"
            id="basic"
            role="tabpanel"
            aria-labelledby="basic-tab"
          >
            {/* <!-- Patient Information Header --> */}
            <div className="container-profile">
              <div className="page-header">
                <div>Profile Information</div>
              </div>
            </div>
            {/* <!-- Patient Image --> */}
            <div className="media">
              <img
                src="../client/public/assets/images/shiba.jpeg"
                className="mr-4"
                alt="shibainu"
              />
              <div className="media-body">
                <br />
                <br />
                {/* <!-- Patient and Client ID Input --> */}
                <form>
                  <div className="form-group">
                    <label id="patientID" for="patientID">
                      Patient ID
                    </label>
                    <input
                      className="form-control input-sm col-md-4"
                      id="patientText"
                      type="text"
                    />
                  </div>
                  <div className="form-group">
                    <label id="clientID" for="clientID">
                      Client ID
                    </label>
                    <input
                      className="form-control input-sm col-md-4"
                      id="clientText"
                      type="text"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* <!-- Patient Information Header --> */}
          <div className="container-profile">
            <div className="patient-header">
              <div>Patient Information</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
