import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import Home from './home';

import Products from './products';
import Productdetails from './productdetails';
import { Outlet } from 'react-router-dom';


const Layout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);


function Router() {
  return (
    
    <BrowserRouter>
       
      
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/:category/:subcategory" element={<Products/>}/>
          <Route path="/:category" element={<Products/>}/>
          <Route path="/products/:category/:id" element={<Productdetails />} />
          </Route>
        </Routes>
      
    </BrowserRouter>
    
  );
}

export default Router;
