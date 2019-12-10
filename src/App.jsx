import React, { Component } from "react";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import "../src/styles.css";

class App extends Component {
  state = {
    cep: null
  };

  componentDidMount() {
    const url = "http://apps.widenet.com.br/busca-cep/api/cep.json";

    fetch(url)
      .then(response => {
        console.log(response);
        const data = response.json();
        console.log(data);
        return data;
      })
      .then(data => {
        console.log(data);
        this.setState({ cep: data });
      });
  }

  render() {
    return (
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
      </div>
    );
  }
}

export default App;
