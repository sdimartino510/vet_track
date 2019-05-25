import React, { Component } from "react";

class Profile extends Component {
  state = {
    patientText: "",
    clientText: "",
    inputPetsName: "",
    inputSpecies: "",
    inputBreed: "",
    inputGender: "",
    inputAge: "",
    inputColor: ""
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
                <label id="patientID" for="patientID">
                  Patient ID
                </label>
                <input
                  className="form-control input-sm col-md-4"
                  id="patientText"
                  name="patientText"
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
                  name="clientText"
                  type="text"
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
              <label id="petsName" for="inputPetsName">
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
              <label id="species" for="inputSpecies">
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
              <label id="breed" for="inputBreed">
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
              <label id="gender" for="inputGender">
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
              <label id="age" for="inputAge">
                Age
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAge"
                name="inputAge"
              />
            </div>
            <div className="form-group col-md-5">
              <label id="color" for="inputColor">
                Color / Markings
              </label>
              <input
                type="text"
                className="form-control"
                id="inputColor"
                name="inputColor"
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
      </div>
    );
  }
}

export default Profile;
