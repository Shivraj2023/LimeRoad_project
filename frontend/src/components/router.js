import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import Home from './home';
import BrandList from './brandlist';

function Router() {
  return (
    <BrowserRouter>
      <Navbar />  
      <Routes>
        <Route path="/" element={<Home />}>  
        <Route path="/:mainCategory" element={<BrandList />} />
        </Route> 
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
