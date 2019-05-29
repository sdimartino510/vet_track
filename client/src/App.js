import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login/Login";
import Form from "./pages/Form/Form";
import Landing from "./pages/Landing/Landing";
import "./App.css";

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
              component={() => <Form title="VetSx | Patient Status" />}
            />
          </Switch>
        </div>
    </Router>
  );
}

export default App;
