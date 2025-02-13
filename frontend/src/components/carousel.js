import React from 'react';
import './carousel.css'; 


function Carousel() {
  return (
    <div className="container mt-4">
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
        
        {/* Indicators */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="0" className="active bg-dark"></button>
          <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="1" className="bg-dark"></button>
          <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="2" className="bg-dark"></button>
          <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="3" className="bg-dark"></button>
          <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="4" className="bg-dark"></button>
          <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="5" className="bg-dark"></button>
          <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="6" className="bg-dark"></button>
          <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="7" className="bg-dark"></button>
        </div>

        {/* Carousel Items */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://n-img1.junaroad.com/assets/images/mobileNotif/img-1738312997291.jpg?crsl_pos=4" className="d-block mx-auto w-40 h-auto" alt="add"/>
          </div>
          <div className="carousel-item">
            <img src="https://n-img1.junaroad.com/assets/images/mobileNotif/img-1737467216669.jpg?crsl_pos=4" className="d-block mx-auto w-40 h-auto" alt="add"/>
          </div>
          <div className="carousel-item">
            <img src="https://n-img1.junaroad.com/assets/images/mobileNotif/img-1734691416778.jpg?crsl_pos=4" className="d-block mx-auto w-40 h-auto" alt="add"/>
          </div>
          <div className="carousel-item">
            <img src="https://n-img1.junaroad.com/assets/images/mobileNotif/img-1738313158166.jpg?crsl_pos=4" className="d-block mx-auto w-40 h-auto" alt="add"/>
          </div>
          <div className="carousel-item">
            <img src="https://n-img1.junaroad.com/assets/images/mobileNotif/img-1736445630290.jpg?crsl_pos=4" className="d-block mx-auto w-40 h-auto" alt="add"/>
          </div>
          <div className="carousel-item">
            <img src="https://n-img1.junaroad.com/assets/images/mobileNotif/img-1736445646414.jpg?crsl_pos=4" className="d-block mx-auto w-40 h-auto" alt="add"/>
          </div>
          <div className="carousel-item">
            <img src="https://n-img1.junaroad.com/assets/images/mobileNotif/img-1737375285117.jpg?crsl_pos=4" className="d-block mx-auto w-40 h-auto" alt="add"/>
          </div>
          <div className="carousel-item">
            <img src="https://n-img1.junaroad.com/assets/images/mobileNotif/img-1737375339231.jpg?crsl_pos=4" className="d-block mx-auto w-40 h-auto" alt="add"/>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
