import React, { Component } from 'react';
import Botao from './componentes/Botao'




class App extends Component {
constructor(props) {
  super(props);
  this.state = {contador: 0};

}

Subtair = () => {

this.setState({contador: this.state.contador -1})
  
}

Somar = () => {

  this.setState({contador: this.state.contador +1})
  
}



  render () {
    return (
    <div >
      <Botao onClick={this.Subtair}> - </Botao>
      <p>{this.state.contador}</p>
      <Botao onClick={this.Somar}> + </Botao>
    </div>
    );
  
}
}

export default App;
