import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
import Logo from "../../images/vetsx.jpg";
import Shiba from "../../images/shiba.jpeg";


class Form extends Component {
  state = {
    name: "",
    petsName: "",
    species: "",
    gender: "",
    breed: "",
    age: "",
    colorMarkings: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    address2: "",
    city: "",
    state: "",
    isSpayedNeutered: "",
    isMicrochipped: "",
    medicalHistory: "",
    data: ""



  };
  

  handlePatientSubmit = (event) => {
    event.preventDefault();
    alert("submit Data");

   let { petsName, species, gender, breed, age, colorMarkings, isSpayedNeutered, isMicrochipped, medicalHistory } = this.state;
   
    fetch("/api/patientinfo", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(
        {
          petsName,
          species,
          gender,
          breed, 
          age, 
          colorMarkings, 
          isSpayedNeutered,
          isMicrochipped,
          medicalHistory
        }
      )
    });

    this.setState({  petsName: "",
    species: "",
    gender: "",
    breed: "",
    age: 0,
    colorMarkings: "",
    isSpayedNeutered: "",
    isMicrochipped: "",
    medicalHistory: ""
  })

  }

  saveData = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    });
  }


 convertMS = (ms) => {
    var d, h, m, s;
    s = Math.floor(ms / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    h += d * 24;
    return `${h}:${m}:${s}`;
  }

  getHours = (ms) => {
    var d, h, m, s;
    s = Math.floor(ms / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    h += d * 24;
    return h;
  }


  handleClientSubmit = (event) => {
    alert("submit Data");
    event.preventDefault();
   let { firstName, lastName, email, phoneNumber, address, address2, city, state, zip } = this.state;
   
    fetch("/api/clientinfo", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(
        {
          firstName,
          lastName,
          email,
          phoneNumber,
          address,
          address2,
          city,
          state,
          zip
        }
      )
    });


      this.setState({  petsName: "",
      species: "",
      gender: "",
      breed: "",
      age: 0,
      colorMarkings: "",

    })

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
                  <p>{JSON.stringify(this.state)}</p>
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
          <div>
                <p>{JSON.stringify(this.state)}</p>
          </div>
          <form onSubmit={this.handlePatientSubmit}>
            <div className="form-row">
              
              <div className="form-group col-md-4">
                <label id="petsName" for="inputPetsName">
                  Pets Name
                 
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="inputPetsName"
                    name="petsName"
                    value={this.state.petsName} 
                    onChange={this.saveData}
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
                  name="species"
                  value={this.state.species} 
                  onChange={this.saveData}
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
                  name="breed"
                  value={this.state.breed} 
                  onChange={this.saveData}
                  />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-3">
                <label id="gender" for="inputGender">
                  Gender
                </label>
                <select className="form-control" name="gender" value={this.state.gender}  onChange={this.saveData}>
                    <option value=""></option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
              </div>
              <div className="form-group col-md-2">
                <label id="age" for="inputAge">
                  Age
                </label>
                <input 
                  type="number" 
                  className="form-control"  
                  name="age" 
                  id="inputAge"
                  value={this.state.age} 
                  onChange={this.saveData}
                  />
              </div>
              <div className="form-group col-md-5">
                <label id="color" for="inputColor">
                  Color / Markings
                </label>
                <input type="text"
                  className="form-control"
                  id="inputColor"
                  name="colorMarkings"
                  value={this.state.colorMarkings} 
                  onChange={this.saveData}
                  />
              </div>
            </div>
          
          <br />

         
            <div className="form-row">
              <label id="spayed" className="form-group col-md-2">
                Spayed / Neutered
              </label>

              <select className="form-control" name="isSpayedNeutered" value={this.state.isSpayedNeutered}  onChange={this.saveData}>
                    <option value=""></option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
              </select>
            </div>
            <div className="form-row">
              <label  id="spayed" className="form-group col-md-2">
                Microchipped
              </label>
              <select className="form-control" name="isMicrochipped" value={this.state.isMicrochipped}  onChange={this.saveData}>
                    <option value=""></option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
              </select>
            </div>
            <label for="exampleFormControlTextarea1">Medical History</label>
              <textarea
                className="form-control"
                rows="3"
                name="medicalHistory"
                value={this.state.medicalHistory}  onChange={this.saveData}
              />
            <button type="submit">Submit</button>
          </form>
          <br />
          {/* <!-- Client Information Header --> */}
          <div className="container-client">
            <div className="client-header">
              <div>Client Information</div>
            </div>
          </div>
          <br />
          <form >
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="inputFirstName">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputFirstName"
                  placeholder="First Name"
                  name="firstName" 
                  value={this.state.firstName} 
                  onChange={this.saveData}
                />
              </div>
              <div className="form-group col-md-6">
                <label for="inputLastName">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputLastName"
                  placeholder="Last Name"
                  name="lastName" 
                  value={this.state.lastName} 
                  onChange={this.saveData}
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
                  name="email" 
                  value={this.state.email} 
                  onChange={this.saveData}
                />
              </div>
              <div className="form-group col-md-6">
                <label for="inputPassword4">Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputPassword"
                  placeholder="Phone Number"
                  name="phoneNumber" 
                  value={this.state.phoneNumber} 
                  onChange={this.saveData}
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
                name="address" 
                value={this.state.address} 
                onChange={this.saveData}
              />
            </div>
            <div className="form-group">
              <label for="inputAddress2">Address 2</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress2"
                placeholder="Apartment, studio, or floor"
                name="address2" 
                value={this.state.address2} 
                onChange={this.saveData}
              />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="inputCity">City</label>
                <input 
                type="text" 
                className="form-control" 
                id="inputCity"
                name="city" 
                value={this.state.city} 
                onChange={this.saveData}
                />
              </div>
              <div className="form-group col-md-4">
                <label for="inputState">State</label>
                <select id="inputState" className="form-control state" name="state" value={this.state.state} 
                onChange={this.saveData}>
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
                <input type="text" className="form-control" id="inputZip"  name="zip" value={this.state.zip} 
                onChange={this.saveData}/>
              </div>
            </div>
          </form>
            <button type="submit">Submit</button>
          
            <div className="form-group">
              <label for="additionalInformation">Additional Information</label>
              <textarea className="form-control" id="addInfo" rows="3" />
            </div>
        
            <form onSubmit={(event) => {
              event.preventDefault();
              console.log(this.state.name)
              fetch("/api/status/" + this.state.name)
              .then((response) => {
                console.log(response);
                return response.json();
              })
              .then((myJson) => {
                this.setState({data: myJson});
                console.log(myJson);
              })
              // .then((myJson) => {
              //   console.log(JSON.stringify(myJson));
              // });
            }}>
              <label>Enter name pet to see status</label>
              <input type="text" name="name"  value={this.state.name} 
                onChange={this.saveData}/>
              <button type="submit">Check</button>
            </form>
            <div>
            <h2>Pet Status Table</h2>

            <table>
              <tr>
                <th>Name</th>
                <th>Species</th>
                <th>Gender</th>
                <th>Time</th>
                <th>Status</th>
                <th>Pickup</th>
              </tr>
              <tr>
                <td>{this.state.data.length == 0 ? "" : this.state.data["petsName"]}</td>
                <td>{this.state.data.length == 0 ? "" : this.state.data["species"]}</td>
                <td>{this.state.data.length == 0 ? "" : this.state.data["gender"]}</td>
                <td>{this.state.data.length == 0 ? "" : new Date(this.state.data["time"]).getMonth() + "/" + new Date(this.state.data["time"]).getDate() + "/" + new Date(this.state.data["time"]).getFullYear() }</td>
                <td>{this.state.data.length == 0 ? "" :  this.convertMS(new Date() - new Date(this.state.data["time"]))}</td>
                <td>{this.state.data.length == 0 ? "" :  this.getHours(new Date() - new Date(this.state.data["time"])) > 3 ? "pickup pet": "not ready for pickup"}</td>
              </tr>
              
            </table>

              <p>{JSON.stringify({ data: this.state.data})}</p>
            </div>
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
         
        </div>
      </div>
    );
  }
}

export default Form;
