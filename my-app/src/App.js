import './App.css';
import React ,{ Component } from 'react';
import Navbar from './Components/Navbar/Navbar';
import ItemCount from './Components/ItemCount/ItemCount';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greetings:'Bienvenido'
    };
  }



  render() {

  return (
    <div className="App">
      <Navbar greetings={this.state.greetings}/>
      <ItemCount />
    </div>
  );
}
}

export default App;

