import './App.css';
import React ,{ Component } from 'react';
import Navbar from './Components/Navbar/Navbar';



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
    </div>
  );
}
}

export default App;

