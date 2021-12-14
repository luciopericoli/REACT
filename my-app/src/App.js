import './App.css';
import React  from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import AlivePage from './Components/AlivePage';
import DeadPage from './Components/DeadPage';
import UnknownPage from './Components/UnknownPage';
import DetailPage from './Components/DetailPage';


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
          </Routes>
        </BrowserRouter>
      </div>
    );
  } 

export default App;


