import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./form.css";

class Form extends Component {
  componentDidMount() {
    document.title = this.props.title;
  }

  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-4">Hi</h1>
      </div>
    );
  }
}

export default Form;
