import React from 'react'
import Navbar from './navbar'
import Banner from './banner'
import Carousel from './carousel';
import BrandList from './brandlist';

function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Carousel></Carousel>
      
    </div>
  )
}

export default Home;
