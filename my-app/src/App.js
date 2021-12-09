import './App.css';
import React ,{ Component, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useSearchParams,
  useParams
} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';


function App() {
  
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/" element={<ItemListContainer />} /> 
        <Route path="status/:status" element={<ItemListContainer />} />
        <Route path="personaje/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
  );

}

export default App;


