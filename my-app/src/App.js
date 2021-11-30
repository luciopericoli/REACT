import './App.css';
import React ,{ Component } from 'react';
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';





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
      <ItemListContainer />
      
    </div>
  );
}
}

export default App;

