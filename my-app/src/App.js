import './App.css';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import AlivePage from './Pages/AlivePage';
import DeadPage from './Pages/DeadPage';
import UnknownPage from './Pages/UnknownPage';
import DetailPage from './Pages/DetailPage';
import Cart from './Pages/Cart';
import CartContext from './Context/CartContext';

function App () {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="personaje/:id" element={<DetailPage />} />
            <Route path="status/Alive" element={<AlivePage />} />
            <Route path="status/Dead" element={<DeadPage />} />
            <Route path="status/Unknown" element={<UnknownPage />} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  } 

export default App;


