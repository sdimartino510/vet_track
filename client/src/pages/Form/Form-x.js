import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
import Logo from "../../images/vetsx.jpg";
import Shiba from "../../images/shiba.jpeg";

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
            <img src={Logo} className="logoform" alt="logo" />
            <h1 className="header">
              etS<sub>X</sub>
            </h1>
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
                    Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    | Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Consumer">
                    | Consumer |
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <br />
        <div className="container mt-3">
          <h2>Profile</h2>
          <br />
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            {/* <li className="nav-item">
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
            </li> */}
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
                Patient
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
          {/* <div
            className="tab-pane fade show active"
            id="date"
            role="tabpanel"
            aria-labelledby="date-tab"
          >
            Date & Time
          </div> */}
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
              <img src={Shiba} className="mr-4" alt="shibainu" />
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
          <form>
            <div className="form-row">
              <div className="form-group col-md-4">
                <label id="petsName" for="inputPetsName">
                  Pets Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputPetsName"
                />
              </div>
              <div className="form-group col-md-3">
                <label id="species" for="inputSpecies">
                  Species
                </label>
                <input type="text" className="form-control" id="inputSpecies" />
              </div>
              <div className="form-group col-md-3">
                <label id="breed" for="inputBreed">
                  Breed
                </label>
                <input type="text" className="form-control" id="inputBreed" />
              </div>
            </div>
          </form>
          <form>
            <div className="form-row">
              <div className="form-group col-md-3">
                <label id="gender" for="inputGender">
                  Gender
                </label>
                <input type="text" className="form-control" id="inputGender" />
              </div>
              <div className="form-group col-md-2">
                <label id="age" for="inputAge">
                  Age
                </label>
                <input type="text" className="form-control" id="inputAge" />
              </div>
              <div className="form-group col-md-5">
                <label id="color" for="inputColor">
                  Color / Markings
                </label>
                <input type="text" className="form-control" id="inputColor" />
              </div>
            </div>
          </form>
          <br />

          <form>
            <div className="form-row">
              <label id="spayed" className="form-group col-md-2">
                Spayed / Neutered
              </label>
              <div className="form-check col-md-1">
                <input
                  id="spayedYesBox"
                  className="form-check-input"
                  type="checkbox"
                />
                <label id="spayedYes" className="form-check-label" for="yes">
                  Yes
                </label>
              </div>
              <div className="form-check col-md-1">
                <input
                  id="spayedNoBox"
                  className="form-check-input"
                  type="checkbox"
                />
                <label id="spayedNo" className="form-check-label" for="no">
                  No
                </label>
              </div>
              <label id="microchipped" className="form-group col-md-2">
                Microchipped
              </label>
              <div className="form-check col-md-1">
                <input
                  id="microYesBox"
                  className="form-check-input"
                  type="checkbox"
                />
                <label id="microYes" className="form-check-label" for="yes">
                  Yes
                </label>
              </div>
              <div className="form-check col-md-1">
                <input
                  id="microNoBox"
                  className="form-check-input"
                  type="checkbox"
                />
                <label id="microNo" className="form-check-label" for="no">
                  No
                </label>
              </div>
            </div>
          </form>
          <br />
          <form>
            <div className="form-group">
              <label for="exampleFormControlTextarea1">Medical History</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              />
            </div>
          </form>
          {/* <!-- Client Information Header --> */}
          <div className="container-client">
            <div className="client-header">
              <div>Client Information</div>
            </div>
          </div>
          <br />
          <form>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="inputFirstName">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputFirstName"
                  placeholder="First Name "
                />
              </div>
              <div className="form-group col-md-6">
                <label for="inputLastName">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputLastName"
                  placeholder="Last Name"
                />
              </div>
            </div>
          </form>
          <form>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="inputEmail">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  placeholder="Email"
                />
              </div>
              <div className="form-group col-md-6">
                <label for="inputPassword4">Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputPassword"
                  placeholder="Phone Number"
                />
              </div>
            </div>
            <div className="form-group">
              <label for="inputAddress">Address</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
              />
            </div>
            <div className="form-group">
              <label for="inputAddress2">Address 2</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress2"
                placeholder="Apartment, studio, or floor"
              />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="inputCity">City</label>
                <input type="text" className="form-control" id="inputCity" />
              </div>
              <div className="form-group col-md-4">
                <label for="inputState">State</label>
                <select id="inputState" className="form-control state">
                  <option selected>State</option>
                  <option value="Alabama">Alabama</option>
                  <option value="Alaska">Alaska</option>
                  <option value="Arizona">Arizona</option>
                  <option value="Arkansas">Arkansas</option>
                  <option value="California">California</option>
                  <option value="Colorado">Colorado</option>
                  <option value="Connecticut">Connecticut</option>
                  <option value="Delaware">Delaware</option>
                  <option value="Florida">Florida</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Hawaii">Hawaii</option>
                  <option value="Idaho">Idaho</option>
                  <option value="Illinois">Illinois</option>
                  <option value="Indiana">Indiana</option>
                  <option value="Iowa">Iowa</option>
                  <option value="Kansas">Kansas</option>
                  <option value="Kentucky">Kentucky</option>
                  <option value="Louisiana">Louisiana</option>
                  <option value="Maine">Maine</option>
                  <option value="Maryland">Maryland</option>
                  <option value="Massachusetts">Massachusetts</option>
                  <option value="Michigan">Michigan</option>
                  <option value="Minnesota">Minnesota</option>
                  <option value="Mississippi">Mississippi</option>
                  <option value="Missouri">Missouri</option>
                  <option value="Montana">Montana</option>
                  <option value="Nebraska">Nebraska</option>
                  <option value="Nevada">Nevada</option>
                  <option value="New Hampshire">New Hampshire</option>
                  <option value="New Jersey">New Jersey</option>
                  <option value="New Mexico">New Mexico</option>
                  <option value="New York">New York</option>
                  <option value="North Carolina">North Carolina</option>
                  <option value="North Dakota">North Dakota</option>
                  <option value="Ohio">Ohio</option>
                  <option value="Oklahoma">Oklahoma</option>
                  <option value="Oregon">Oregon</option>
                  <option value="Pennsylvania">Pennsylvania</option>
                  <option value="Rhode Island">Rhode Island</option>
                  <option value="South Carolina">South Carolina</option>
                  <option value="South Dakota">South Dakota</option>
                  <option value="Tennessee">Tennessee</option>
                  <option value="Texas">Texas</option>
                  <option value="Utah">Utah</option>
                  <option value="Vermont">Vermont</option>
                  <option value="Virginia">Virginia</option>
                  <option value="Washington">Washington</option>
                  <option value="West Virginia">West Virginia</option>
                  <option value="Wisconsin">Wisconsin</option>
                  <option value="Wyoming">Wyoming</option>
                </select>
              </div>
              <div className="form-group col-md-2">
                <label for="inputZip">Zip</label>
                <input type="text" className="form-control" id="inputZip" />
              </div>
            </div>
          </form>
          <form>
            <div className="form-group">
              <label for="additionalInformation">Additional Information</label>
              <textarea className="form-control" id="addInfo" rows="3" />
            </div>
          </form>

          <div className="container-client">
            <div className="footer-header">
              <div className="copyright text-light">
                COPYRIGHT &#169;2019 VetSx
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="doc"
            role="tabpanel"
            aria-labelledby="doc-tab"
          >
            {/* <!-- PROVIDERS Tab --> */}
            <div class="container-providers">
              <div class="page-header-providers">
                <div>Providers</div>
              </div>
            </div>
            <br />
            <div class="card-deck">
              <div class="card">
                <img
                  class="card-img-top"
                  src="../../../assets/images/vet2.jpg"
                  style={{ height: 280 }}
                  alt="Card cap"
                />
                <div class="card-body">
                  <h5 class="card-title">Patricia Fellows, D.V.M.</h5>
                  <p class="card-text" />
                  <p class="card-text">
                    <small class="text-muted" />
                  </p>
                </div>
              </div>
              <div class="card">
                <img
                  class="card-img-top"
                  src="../../../assets/images/femaletech.jpg"
                  style={{ height: 280 }}
                  alt="Card cap"
                />
                <div class="card-body">
                  <h5 class="card-title">Kelly Lowry, R.V.T.</h5>
                  <p class="card-text" />
                  <p class="card-text">
                    <small class="text-muted" />
                  </p>
                </div>
              </div>
              <div class="card">
                <img
                  class="card-img-top"
                  src="../../../assets/images/maletech2.jpg"
                  style={{ height: 280 }}
                  alt="Card cap"
                />
                <div class="card-body">
                  <h5 class="card-title">John Martin, R.V.T.</h5>
                  <p class="card-text" />
                  <p class="card-text">
                    <small class="text-muted" />
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- </div> --> */}
        </div>
      </div>
    );
  }
}

export default Form;
