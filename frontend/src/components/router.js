 import React from 'react';
import Navbar from './navbar';
 import { BrowserRouter, Route, Routes } from 'react-router-dom';
 import Banner from './banner';
 import Home from './home';
 
 
 function Router() {
   return (
     <div>
        <BrowserRouter>
     <Home/>
    <Routes>
      <Route></Route>
    </Routes>
  </BrowserRouter>
   
       
     </div>
   )
 }
 
 export default Router;
 