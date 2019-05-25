import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login/Login";
import Form from "./pages/Form/Form";
import "./App.css";
import Particles from 'react-particles-js';


function App() {
  return (
    <Router>
      {/* Particles */}
<div
style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%"
      }}>
      <Particles 
    params={{
      // particles: {
      //   number: {
      //     value: 150,
      //     density: {
      //       enable: true,
      //       value_area: 1803.4120608655228
      //     }
      //   },
      //   color: {
      //     value: ["#343a40", "#00ffff", "#6aeb5e"],
      //   },
      //   shape: {
      //     type: "circle",
      //     stroke: {
      //       width: 0,
      //       color: "aqua", 
      //     },
      //     circle: {
      //       circle: {
      //       nb_sides: 0
      //     },
      //     image: {
      //       src: "img/github.svg",
      //       width: 100,
      //       height: 100
      //     }
      //   },
      //   opacity: {
      //     value: 0.4008530152163807,
      //     random: false,
      //     anim: {
      //       enable: false,
      //       speed: 1,
      //       opacity_min: 0.1,
      //       sync: false
      //     }
      //   },
      //   size: {
      //     value: 25,
      //     random: true,
      //     anim: {
      //       enable: true,
      //       speed: 40,
      //       size_min: 0.1,
      //       sync: false
      //     }
      //   },
      //   line_linked: {
      //     enable: true,
      //     distance: 0,
      //     color: "#ffffff",
      //     opacity: 0.3687847739990702,
      //     width: 0.6413648243462091
      //   },
      //   move: {
      //     enable: true,
      //     speed: 6,
      //     direction: "none",
      //     random: false,
      //     straight: false,
      //     out_mode: "out",
      //     bounce: false,
      //     attract: {
      //       enable: false,
      //       rotateX: 600,
      //       rotateY: 1200
      //     }
      //   }
      // },
      // interactivity: {
      //   detect_on: "window",
      //   events: {
      //     onhover: {
      //       enable: true,
      //       mode: "repulse"
      //     },
      //     onclick: {
      //       enable: false,
      //       mode: "bubble"
      //     },
      //     resize: true
      //   },
      //   modes: {
      //     grab: {
      //       distance: 400,
      //       line_linked: {
      //         opacity: 1
      //       }
      //     },
      //     bubble: {
      //       distance: 400,
      //       size: 0,
      //       duration: 2,
      //       opacity: 8,
      //       speed: 3
      //     },
      //     repulse: {
      //       distance: 100,
      //       duration: 0.4
      //     },
      //     push: {
      //       particles_nb: 4
      //     },
      //     remove: {
      //       particles_nb: 2
      //     }
      //   }
      // },
      // retina_detect: true
      particles: {
        number: {
          value: 250,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: ["#343a40", "#00ffff", "#6aeb5e"],
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#ff0000'
          },
          polygon: {
            nb_sides: 5
          },
          image: {
            src: '',
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
          color: '#fff',
          opacity: 1,
          width: 1
        },
        move: {
          enable: true,
          speed: 1,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
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
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'grab'
          },
          onclick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          grab:{
            distance: 100,
            line_linked:{
              opacity: 1
            }
          },
          bubble:{
            distance: 200,
            size: 80,
            duration: 0.4
          },
          repulse:{
            distance: 200,
            duration: 0.4
          },
          push:{
            particles_nb: 4
          },
          remove:{
            particles_nb: 2
          }
        },
        mouse:{}
      },
      retina_detect: true,
    }}
/> 
      <div
     style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route
            exact
            path="/admin"
            component={() => {
              document.title = "You're logged in, Serg";
              return <h1>Logged in!</h1>;
            }}
          />
          <Route
            exact
            path="/form"
            component={() => <Form title="VetSx | Patient Status" />}
          />
        </Switch>
      </div>
      </div>
    </Router>
  );
}

export default App;