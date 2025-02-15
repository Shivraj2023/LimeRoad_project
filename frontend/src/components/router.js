import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import Home from './home';
import BrandList from './brandlist';
import Products from './products';
import Productdetails from './productdetails';


function Router() {
  return (
    
    <BrowserRouter>
      <Navbar />  
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:category" element={<Products/>}/>
          <Route path="/:category/:id" element={<Productdetails />} ></Route>
        </Routes>
      
    </BrowserRouter>
    
  );
}

export default Router;
