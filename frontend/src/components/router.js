import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import Home from './home';
import BrandList from './brandlist';
import Products from './products';

function Router() {
  return (
    <BrowserRouter>
      <Navbar />  
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:category" element={<Products/>}/>
        </Routes>
      
    </BrowserRouter>
  );
}

export default Router;
