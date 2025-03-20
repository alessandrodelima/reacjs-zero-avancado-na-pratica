import React, { Component } from "react";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nome: 'Matheus',
      contador: 0
    };
    this.aumentar = this.aumentar.bind(this);
    this.diminuir = this.diminuir.bind(this);
  }

  aumentar = () => {   
    
    console.log("Aumentou!")
    let state = this.state;
    state.contador += 1;
    state.nome = "Jose";
    this.setState(state);
   
  }

  diminuir = () => {
    console.log("Diminuiu!")
    let state = this.state;
    this.state.contador -= 1; 
    if(this.state.contador === 0) {
      return;
    }
      state.contador = 0;
    state.nome = "Hermenegildo";
    this.setState(state);
  }

  render() {
    return (
      <div>
        <h1>Contador</h1>
        {this.state.nome}
        <h3>
          <button onClick={this.diminuir}> - </button>
            {this.state.contador}
          <button onClick={this.aumentar}> + </button>
          </h3>  
      </div>
    )
  }
}

export default App;