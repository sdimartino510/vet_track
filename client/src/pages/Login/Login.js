import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./login.css";
import Logo from "../../images/vetsx.jpg";
import Particles from "react-particles-js";


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
        <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
      >
        <Particles
          params={{
            particles: {
              number: {
                value: 250,
                density: {
                  enable: true,
                  value_area: 800
                }
              },
              color: {
                value: ["#343a40", "#00ffff", "#6aeb5e"]
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#ff0000"
                },
                polygon: {
                  nb_sides: 5
                },
                image: {
                  src: "",
                  width: 100,
                  height: 100
                }
              },
              opacity: {
                value: 1,
                random: false,
                anim: {
                  enable: false,
                  speed: 2,
                  opacity_min: 0,
                  sync: false
                }
              },
              size: {
                value: 3,
                random: false,
                anim: {
                  enable: false,
                  speed: 20,
                  size_min: 0,
                  sync: false
                }
              },
              line_linked: {
                enable: true,
                distance: 100,
                color: "#fff",
                opacity: 1,
                width: 1
              },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 3000,
                  rotateY: 3000
                }
              },
              array: []
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: true,
                  mode: "grab"
                },
                onclick: {
                  enable: true,
                  mode: "push"
                },
                resize: true
              },
              modes: {
                grab: {
                  distance: 100,
                  line_linked: {
                    opacity: 1
                  }
                },
                bubble: {
                  distance: 200,
                  size: 80,
                  duration: 0.4
                },
                repulse: {
                  distance: 200,
                  duration: 0.4
                },
                push: {
                  particles_nb: 4
                },
                remove: {
                  particles_nb: 2
                }
              },
              mouse: {}
            },
            retina_detect: true
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
        >
          <div id="navbar">
            <span />
          </div>
          <div id="wrapper">
            <div id="particle-js" />
          </div>

          <div className="card login-card mb-3 rounded-0" style={{ maxWidth: "60%" }}>
            <div className="row no-gutters">
              <div className="col-md-5 logo-wrapper">
                <img src={Logo} className="logo" alt="logo" />
              </div>

              <div className="col-md-7">
                <div className="card-body login-body">
                  <h5 className="card-title">VetS<sub>X</sub></h5>
                  <h3 className="card-subtitle">Care. Heal. Connect.</h3>
                  <form className="username-form" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="username" />
                      <input
                        type="username"
                        className="form-control form-control-sm rounded-0"
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
                        className="form-control form-control-sm rounded-0"
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
                    <button type="submit" className="btn btn-primary rounded-0">
                      Verify Identity
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
    }
  }
}

export default Login;
