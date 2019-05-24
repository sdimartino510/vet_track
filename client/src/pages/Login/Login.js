import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./login.css";

class Login extends Component {
  state = {
    username: "",
    password: "",
    login: false
  };

  componentDidMount() {
    document.title = "VetSx | Staff Login";
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    fetch("/api/login", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (data.result === "success") {
          this.setState({
            login: true
          });
        }
      });
  };

  render() {
    if (this.state.login) {
      return <Redirect to="/form" />;
    } else {
      return (
        <div>
          <div id="navbar">
            <span />
          </div>
          <div id="wrapper">
            <div id="particle-js" />
            {/* <!-- <button id="particle-button">Start</button> --> */}
          </div>

          <div className="card mb-3 rounded-0" style={{ maxWidth: "60%" }}>
            <div className="row no-gutters">
              <div className="col-md-5">
                <img src="" className="card-img" alt="" />
              </div>

              <div className="col-md-7">
                <div className="card-body">
                  <h5 className="card-title">VetSx</h5>
                  <h3 className="card-subtitle">Care. Heal. Connect.</h3>
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="username" />
                      <input
                        type="username"
                        className="form-control form-control-sm"
                        id="username"
                        aria-describedby="usernamehelp"
                        placeholder="Username"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                      />
                      <i
                        className="fa fa-user fa-md fa-fw"
                        aria-hidden="true"
                      />
                      <small
                        id="usernameHelp"
                        className="form-text text-muted"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password" />
                      <input
                        type="password"
                        className="form-control form-control-sm"
                        id="password"
                        placeholder="Password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                      />
                      <i
                        className="fa fa-lock fa-md form-control-feedback"
                        aria-hidden="true"
                      />
                      <p className="card-text">
                        <small className="text-muted">Forgot Password?</small>
                      </p>
                    </div>
                    <br></br>
                    <button type="submit" className="btn btn-primary">
                      Verify Identity
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* <footer>
            <div className="footer row text-dark">
              <div className="col-md-4 text-center">
                <a href="./about.html" target="_blank">
                  About the Creators
                </a>
              </div>
              <div className="footer-center-text text-center col-md-4">
                VetSx | Client Communication Simplified
              </div>
              <div className="col-md-4 text-right">&copy; 2019</div>
            </div>
          </footer> */}
        </div>
      );
    }
  }
}

export default Login;
