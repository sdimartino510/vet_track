import React, { Component } from "react";
// import { render } from "react-dom";

import Tabs from "../../components/Tabs";

class Form extends Component {
  state = {
    patientText: "",
    clientText: "",
    inputPetsName: "",
    inputSpecies: "",
    inputBreed: "",
    inputGender: "",
    inputAge: "",
    inputColor: "",
    spayed: false,
    micro: false,
    medicalHistory: "",
    inputFirstName: "",
    inputLastName: "",
    inputEmail: "",
    inputPhone: "",
    inputAddress: "",
    inputAddress2: "",
    inputCity: "",
    inputState: "State",
    inputZip: "",
    addInfo: "",
    inputPatientID: "",
    inputSxDateID: "",
    inputClientID: "",
    inputSxTime: "",
    inputSxStatus: "Pre-Op",
    addNotes: ""
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  handleCheckBox = e => {
    const { name } = e.target;
    this.setState({
      [name]: !this.state[name]
    });
  };
  handleSubmitProfile = e => {
    const {
      patientText,
      clientText,
      inputPetsName,
      inputSpecies,
      inputBreed,
      inputGender,
      inputAge,
      inputColor,
      spayed,
      micro,
      medicalHistory,
      inputFirstName,
      inputLastName,
      inputEmail,
      inputPhone,
      inputAddress,
      inputAddress2,
      inputCity,
      inputState,
      inputZip,
      addInfo
    } = this.state;
    e.preventDefault();
    fetch("/api/profile", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        patientText,
        clientText,
        inputPetsName,
        inputSpecies,
        inputBreed,
        inputGender,
        inputAge,
        inputColor,
        spayed,
        micro,
        medicalHistory,
        inputFirstName,
        inputLastName,
        inputEmail,
        inputPhone,
        inputAddress,
        inputAddress2,
        inputCity,
        inputState,
        inputZip,
        addInfo
      })
    }).then(response => {
      return response.json();
    });
  };
  handleSubmitStatus = e => {
    const {
      inputPatientID,
      inputSxDateID,
      inputClientID,
      inputSxTime,
      inputSxStatus,
      addNotes
    } = this.state;
    e.preventDefault();
    fetch("/api/profile", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        inputPatientID,
        inputSxDateID,
        inputClientID,
        inputSxTime,
        inputSxStatus,
        addNotes
      })
    }).then(response => {
      return response.json();
    });
  };
  render() {
    return (
      <div>
        <h1>Patient Status</h1>
        <Tabs>
          {/* First Tab */}
          <div label="Patient Profile">
            <div className="container-profile">
              <div className="page-header">
                <div>Profile Information</div>
              </div>
            </div>
            {/* <!-- Patient Image --> */}
            <div className="media">
              <img src="../images/shiba.jpeg" className="mr-4" alt="shibainu" />
              <div className="media-body">
                <br />
                <br />
                {/* <!-- Patient and Client ID Input --> */}
                <form>
                  <div className="form-group">
                    <label id="patientID" htmlFor="patientID">
                      Patient ID
                    </label>
                    <input
                      className="form-control input-sm col-md-4"
                      id="patientText"
                      name="patientText"
                      type="text"
                      value={this.state.patientText}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label id="clientID" htmlFor="clientID">
                      Client ID
                    </label>
                    <input
                      className="form-control input-sm col-md-4"
                      id="clientText"
                      name="clientText"
                      type="text"
                      value={this.state.clientText}
                      onChange={this.handleChange}
                    />
                  </div>
                </form>
              </div>
            </div>
            {/* </div> */}
            {/* <!-- Patient Information Header --> */}
            <div className="container-profile">
              <div className="patient-header">
                <div>Patient Information</div>
              </div>
            </div>
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
                    value={this.state.inputPetsName}
                    onChange={this.handleChange}
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
                    value={this.state.inputSpecies}
                    onChange={this.handleChange}
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
                    value={this.state.inputBreed}
                    onChange={this.handleChange}
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
                    value={this.state.inputGender}
                    onChange={this.handleChange}
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
                    value={this.state.inputAge}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group col-md-5">
                  <label id="color" htmlFor="inputColor">
                    Color / Markings
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputColor"
                    name="inputColor"
                    value={this.state.inputColor}
                    onChange={this.handleChange}
                  />
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
                    name="spayed"
                    className="form-check-input"
                    type="radio"
                    checked={this.state.spayed === true}
                    value={this.state.spayed}
                    onChange={this.handleCheckBox}
                  />
                  <label
                    id="spayedYes"
                    className="form-check-label"
                    htmlFor="yes"
                  >
                    Yes
                  </label>
                </div>
                <div className="form-check col-md-1">
                  <input
                    name="spayed"
                    className="form-check-input"
                    type="radio"
                    checked={this.state.spayed === false}
                    value={this.state.spayed}
                    onChange={this.handleCheckBox}
                  />
                  <label
                    id="spayedNo"
                    className="form-check-label"
                    htmlFor="no"
                  >
                    No
                  </label>
                </div>
                <label id="microchipped" className="form-group col-md-2">
                  Microchipped
                </label>
                <div className="form-check col-md-1">
                  <input
                    name="micro"
                    className="form-check-input"
                    type="radio"
                    checked={this.state.micro === true}
                    value={this.state.micro}
                    onChange={this.handleCheckBox}
                  />
                  <label
                    id="microYes"
                    className="form-check-label"
                    htmlFor="yes"
                  >
                    Yes
                  </label>
                </div>
                <div className="form-check col-md-1">
                  <input
                    name="micro"
                    className="form-check-input"
                    type="radio"
                    checked={this.state.micro === false}
                    value={this.state.micro}
                    onChange={this.handleCheckBox}
                  />
                  <label id="microNo" className="form-check-label" htmlFor="no">
                    No
                  </label>
                </div>
              </div>
            </form>
            <br />
            <form>
              <div className="form-group">
                <label htmlFor="medicalHistory">Medical History</label>
                <textarea
                  className="form-control"
                  id="medicalHistory"
                  name="medicalHistory"
                  rows="3"
                  value={this.state.medicalHistory}
                  onChange={this.handleChange}
                />
              </div>
              {/* Client Information */}
              <div className="container-client">
                <div className="client-header">
                  <div>Client Information</div>
                </div>
              </div>
              <br />
              <form>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputFirstName">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputFirstName"
                      name="inputFirstName"
                      placeholder="First Name"
                      value={this.state.inputFirstName}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputLastName">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputLastName"
                      name="inputLastName"
                      placeholder="Last Name"
                      value={this.state.inputLastName}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <form>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="inputEmail">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="inputEmail"
                        name="inputEmail"
                        placeholder="Email"
                        value={this.state.inputEmail}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="inputPhone">Phone Number</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputPhone"
                        name="inputPhone"
                        placeholder="Phone Number"
                        value={this.state.inputPhone}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputAddress">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress"
                      name="inputAddress"
                      placeholder="1234 Main St"
                      value={this.state.inputAddress}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputAddress2">Address 2</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputAddress2"
                      name="inputAddress2"
                      placeholder="Apartment, studio, or floor"
                      value={this.state.inputAddress2}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="inputCity">City</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputCity"
                        name="inputCity"
                        value={this.state.inputCity}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor="inputState">State</label>
                      <select
                        id="inputState"
                        name="inputState"
                        className="form-control state"
                        value={this.state.inputState}
                        onChange={this.handleChange}
                      >
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
                        <option value="Washington D.C.">Washington D.C.</option>
                        <option value="West Virginia">West Virginia</option>
                        <option value="Wisconsin">Wisconsin</option>
                        <option value="Wyoming">Wyoming</option>
                      </select>
                    </div>
                    <div className="form-group col-md-2">
                      <label htmlFor="inputZip">Zip</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputZip"
                        name="inputZip"
                        value={this.state.inputZip}
                        onChange={this.handleChange}
                      />
                    </div>
                  </div>
                </form>
              </form>
              <form>
                <div className="form-group">
                  <label htmlFor="additionalInformation">
                    Additional Information
                  </label>
                  <textarea
                    className="form-control"
                    id="addInfo"
                    name="addInfo"
                    rows="3"
                    value={this.state.addInfo}
                    onChange={this.handleChange}
                  />
                </div>
              </form>
              <button
                onClick={this.handleSubmitProfile}
                className="btn btn-primary"
              >
                Submit
              </button>
            </form>
          </div>
          {/* Second Tab */}
          <div label="Patient Vitals">
            <div class="item item2">Heart Rate</div>
            <div class="item item3">
              <pre>Normal Range</pre>60-140 bpm
            </div>

            <div class="item item4">Blood Pressure</div>
            <div class="item item5">
              <pre>Normal Range</pre>65-75 diastolic
            </div>

            <div class="item item6">
              Oxygen Saturation(SPO<sub>2</sub> )
            </div>
            <div class="item item7">
              <pre>Normal Range</pre>>95%
            </div>

            <div class="item item8">Respiration</div>
            <div class="item item9">
              <pre>Normal Range</pre>10-35 rpm
            </div>

            <div class="item item10">Temperature</div>
            <div class="item item11">
              <pre>Normal Range</pre>100-102.5°F
            </div>

            <div class="item item12">
              {" "}
              End-tidal CO<sub>2</sub>(EtCO<sub>2</sub> )
            </div>
            <div class="item item13">
              <pre>Normal Range</pre>35-45 mmHg
            </div>
          </div>
          {/* Third Tab */}
          <div label="Surgical Procedure Status">
            <div className="surgical-header">
              <div>Patient/Client ID</div>
            </div>
            <form>
              <div className="form-row">
                <div className="form-group col-md-4">
                  <label id="sxpatientID" htmlFor="inputPatientID">
                    Patient ID
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputPatientID"
                    name="inputPatientID"
                    value={this.state.inputPatientID}
                    onChange={this.handleChange}
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
                    value={this.state.inputSxDateID}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </form>
            <form>
              <div className="form-row">
                <div className="form-group col-md-4">
                  <label id="sxclientID" for="inputClientID">
                    Client ID
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputClientID"
                    name="inputClientID"
                    value={this.state.inputClientID}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group col-md-3">
                  <label id="sxTime" for="inputTime">
                    Time
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputSxTime"
                    name="inputSxTime"
                    value={this.state.inputSxTime}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </form>
            {/* <!-- Patient Surgical Status Header --> */}
            <div className="container-sx">
              <div className="surgical-header">
                <div>Patient Surgical Status</div>
              </div>
            </div>
            <br />
            <div className="form-group col-md-4">
              <label id="currentStatus" for="inputSxStatus">
                Current Status
              </label>
              <select
                id="inputSxStatus"
                name="inputSxStatus"
                className="form-control status"
                value={this.state.inputSxStatus}
                onChange={this.handleChange}
              >
                <option selected="Pre-Op">Pre-Op</option>
                <option value="Surgical Prep">Surgical Prep</option>
                <option value="Induction">Induction</option>
                <option value="Start of Surgery">Start of Surgery</option>
                <option value="2 Hours Left">2 Hours Left</option>
                <option value="1 Hour Left">1 Hour Left</option>
                <option value="15 Minutes Left">15 Minutes Left</option>
                <option value="Start of Recovery">Start of Recovery</option>
                <option value="Recovered">Recovered</option>
                <option value="Pick-up In 2 Hours">Pick-up In 2 Hours</option>
              </select>
            </div>
            <form>
              <div class="form-group">
                <label for="additionalNotes">Additional Notes</label>
                <textarea
                  class="form-control"
                  id="addNotes"
                  name="addNotes"
                  rows="3"
                  value={this.state.addNotes}
                  onChange={this.handleChange}
                />
              </div>
              <br />
            </form>

            <button onClick={this.handleSubmitStatus} class="btn btn-primary">
              Submit
            </button>
          </div>
        </Tabs>
      </div>
    );
  }
}

export default Form;
