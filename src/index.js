import React from "react";
import ReactDOM from "react-dom";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import "../src/styles.css";

ReactDOM.render(
  <div className="main">
    <div className="container">
      <span>CEP:</span>
      <Input />
      <span className="cepButton">Não sei meu CEP</span>
    </div>
    <Button />
  </div>,
  document.getElementById("root")
);
