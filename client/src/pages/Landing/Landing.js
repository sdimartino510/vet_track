import React from "react";
import "./landing.css";
import Logo from "../../images/vetsx.jpg";
import Particles from "react-particles-js";
import {Link} from "react-router-dom";


const Landing = () => {
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
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
        <div className="containerlanding">
          <img src={Logo} className="logolanding" alt="logo" />
          {/* <h1 className="header">VetSx &nbsp;</h1> */}
          <h1 className="headerlanding">VetS<sub>X</sub></h1>
          {/* <!-- <div className="tagline">Care. Heal. Connect.</div> --> */}
          
          {/* <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button> */}

          {/* <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link active" href="/login">
                  Login
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </nav>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      {/* Button */}
      <div>
        <Link to="/login" className="btn btn-primary active rounded-0">LOGIN</Link>
      </div>

      {/* <!-- Subtitle and Brief Description --> */}
      <div className="wrapper">
        <p className="text-center" id="subtitle">
          CARE. HEAL. CONNECT.
        </p>
        <hr width="56%" color="#343a40" />
        <strong>
        <p className="text-center" id="description">
          Dynamic and scalable communications solution for veterinary clinics
          and their clients.
        </p>
        </strong>
      </div>


      {/* <button type="button" className="btn btn-primary active" href="/login">LOGIN</button> */}
      {/* <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" /> */}
          {/* </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link active" href="/login">
                  Login
                </a>
              </li>
            </ul>
          </div> */}


      </div>
    </div>
  );
};

export default Landing;
