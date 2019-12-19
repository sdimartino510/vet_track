import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login/Login";
import Landing from "./pages/Landing/Landing";
import Profile from "./components/Profile";
import Consumer from "./pages/Consumer/Consumer";
import Form from "./pages/Form/Form2";
// import("./pages/Form/tabStyles.css");
// import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <Landing title="VetSx | Client Communications Solution" />
            )}
          />
          <Route
            exact
            path="/login"
            component={() => <Login title="VetSx | Staff Login" />}
          />
          <Route
            exact
            path="/form"
            component={() => <Form title="VetSx | Patient Status Entry" />}
          />
          <Route
            exact
            path="/profile"
            component={() => <Profile title="VetSx | Patient Profile" />}
          />
          <Route
            exact
            path="/consumer"
            component={() => (
              <Consumer title="VetSx | Patient Surgical Status" />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
