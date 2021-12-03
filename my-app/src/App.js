import './App.css';
import React ,{ Component, useEffect } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }




  render() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/" element={<ItemListContainer />} /> 
          <Route path="/:status" element={<ItemListContainer />} />
        </Routes>
      </BrowserRouter>
  );
}
}

export default App;

