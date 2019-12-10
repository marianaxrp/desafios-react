import React, { Component } from "react";
import "./input.styles.css";

export default class ViaCep extends Component {
  render() {
    return (
      <div>
        <div className="main">
          <input
            className="form"
            type="text"
            maxLength="8"
            placeholder="00000000"
          />
        </div>
      </div>
    );
  }
}
