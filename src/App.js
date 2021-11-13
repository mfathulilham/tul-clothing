import React from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/shop' element={<ShopPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
