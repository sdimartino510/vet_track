import React, { Component } from "react";
import "./profile.css";

class Profile extends Component {
  state = {
    patientText: "",
    clientText: "",
    inputPetsName: "",
    inputSpecies: "",
    inputBreed: "",
    inputGender: "",
    inputAge: "",
    inputColor: "",
    spayedYesBox: false,
    spayedNoBox: false,
    microYesBox: false,
    microNoBox: false,
    medicalHistory: ""
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    fetch("/api/profile", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        patientText: this.state.patientText,
        clientText: this.state.clientText,
        inputPetsName: this.state.inputPetsName,
        inputSpecies: this.state.inputSpecies,
        inputBreed: this.state.inputBreed,
        inputGender: this.state.inputGender,
        inputAge: this.state.inputAge,
        inputColor: this.state.inputColor,
        spayedYesBox: this.state.spayedYesBox,
        spayedNoBox: this.state.spayedNoBox,
        microYesBox: this.state.microYesBox,
        microNoBox: this.state.microNoBox,
        medicalHistory: this.state.medicalHistory
      })
    }).then(response => {
      return response.json();
    });
  };
  render() {
    return (
      <div>
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
                id="spayedYesBox"
                name="spayedYesBox"
                className="form-check-input"
                type="checkbox"
                value={this.state.spayedYesBox}
                onChange={this.handleChange}
              />
              <label id="spayedYes" className="form-check-label" htmlFor="yes">
                Yes
              </label>
            </div>
            <div className="form-check col-md-1">
              <input
                id="spayedNoBox"
                name="spayedNoBox"
                className="form-check-input"
                type="checkbox"
                value={this.state.spayedNoBox}
                onChange={this.handleChange}
              />
              <label id="spayedNo" className="form-check-label" htmlFor="no">
                No
              </label>
            </div>
            <label id="microchipped" className="form-group col-md-2">
              Microchipped
            </label>
            <div className="form-check col-md-1">
              <input
                id="microYesBox"
                name="microYesBox"
                className="form-check-input"
                type="checkbox"
                value={this.state.microYesBox}
                onChange={this.handleChange}
              />
              <label id="microYes" className="form-check-label" htmlFor="yes">
                Yes
              </label>
            </div>
            <div className="form-check col-md-1">
              <input
                id="microNoBox"
                name="microNoBox"
                className="form-check-input"
                type="checkbox"
                value={this.state.microNoBox}
                onChange={this.handleChange}
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
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Profile;
