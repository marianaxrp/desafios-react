import React, { Component } from "react";
import "./input.styles.css";

export default class Input extends Component {
  render() {
    return (
      <div>
        <div className="main">
          <input className="form" type="text" placeholder="Digite o CEP" />
        </div>
      </div>
    );
  }
}
