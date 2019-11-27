import React from "react";
import ReactDOM from "react-dom";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import "../src/styles.css";

ReactDOM.render(
  <div className="main">
    <div>
      <h1 className="title">Busca de CEP</h1>
      <div className="container">
        <span>CEP:</span>
        <Input />
        <span className="cepButton">Não sei meu CEP</span>
      </div>
      <Button />
      <span className="nextStep">Próximo Passo: Forma de pagamento</span>
    </div>
  </div>,
  document.getElementById("root")
);
