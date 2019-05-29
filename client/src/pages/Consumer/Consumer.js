import React, { Component } from "react";
import "./consumer.css";
import Logo from "../../images/vetsx.jpg";
import Shiba from "../../images/shiba.jpeg";

class Consumer extends Component {
  state = {
    inputSxPatientID: "",
    inputSxDateID: "",
    inputSxStatus: "",
    addInfo: "",
    inputPetsName: "",
    inputSpecies: "",
    inputBreed: "",
    inputGender: "",
    inputAge: ""
  };

  componentDidMount() {
    document.title = "VetSx | Patient Surgical Status";
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    fetch("/api/consumer", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    }).then(response => {
      return response.json();
    });
  };
  render() {
    return (
      <div>
        {/* <!-- Navbar --> */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
          <div className="container">
          <img src={Logo} className="logoform" alt="logo" height="80" />
            <h1 className="header">etS<sub>X</sub></h1>
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
                  <button className="btn btn-info">
                    <a
                      className="nav-link"
                      id="patientStat"
                      href="mailto:imadogdoctor@werevets.com"
                    >
                      Questions about this procedure?
                    </a>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* <!-- Page Content --> */}
        <br />
        {/* <!--  Surgical Procedure Status --> */}
        <div className="container-consumer">
          <div className="container-profile">
            <div className="page-header">
              <div>Patient Surgical Status</div>
            </div>
          </div>

          <div className="media">
            <img
              src={Shiba}
              className="mr-4"
              alt="shibainu"
            />
            <div className="media-body">
              {/* <!--  Surgical Procedure Status --> */}
              <form>
                <div className="form-row">
                  <div className="form-group col-md-4">
                    <label id="sxPatientID" htmlFor="inputPatientID">
                      Patient ID
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputSxPatientID"
                      name="inputSxPatientID"
                    />
                  </div>
                  <div className="form-group col-md-3">
                    <label id="sxDate" htmlFor="inputDate">
                      Date
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputSxDateID"
                      name="inputSxDateID"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* <!-- Patient Surgical Status Header --> */}
          <div className="container-sx">
            <div className="surgical-header">
              <div>Current Status</div>
            </div>
          </div>
          <br />
          <div className="form-group col-md-4">
            <label id="currentStatus" htmlFor="inputSxStatus">
              Current Status
            </label>
            <input
              id="inputSxStatus"
              name="inputSxStatus"
              className="form-control status"
              type="text"
            />
          </div>

          <form>
            <div className="form-group col-md-12" id="testForm">
              <label id="labelAddInfo" htmlFor="additionalInformation">Additional Comments</label>
              <textarea
                className="form-control"
                id="addInfo"
                name="addInfo"
                rows="3"
              />
            </div>
            <br />
          </form>

          {/* <!-- Patient Information Header --> */}
          <div className="container-profile">
            <div className="patient-header">
              <div>Patient Information</div>
            </div>
          </div>
          <br />
          {/* <!-- Patient Information Inputs --> */}
          <form>
            <div className="form-row">
              <div className="form-group col-md-4">
                <label id="petsName" htmlFor="inputPetsName">
                  Pets Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputPetsName"
                  name="inputPetsName"
                />
              </div>
              <div className="form-group col-md-3">
                <label id="species" htmlFor="inputSpecies">
                  Species
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputSpecies"
                  name="inputSpecies"
                />
              </div>
              <div className="form-group col-md-3">
                <label id="breed" htmlFor="inputBreed">
                  Breed
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputBreed"
                  name="inputBreed"
                />
              </div>
            </div>
          </form>

          <form>
            <div className="form-row">
              <div className="form-group col-md-3">
                <label id="gender" htmlFor="inputGender">
                  Gender
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputGender"
                  name="inputGender"
                />
              </div>
              <div className="form-group col-md-2">
                <label id="age" htmlFor="inputAge">
                  Age
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAge"
                  name="inputAge"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Consumer;
