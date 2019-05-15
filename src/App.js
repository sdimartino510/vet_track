import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login/Login";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

// Particles.js - This may not be utilized, but
// I am working on it to see if I can get it running //

// import Particles from 'react-particles-js';

// class App extends Component{

//     render(){
//         return (
//             <Particles />
//         );
//     };

// }

export default App;
