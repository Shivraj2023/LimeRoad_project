// BrandCard.js
import React from 'react';
import './brandcard.css'

function BrandCard({ image, brandName }) {
  return (
    <div className="card brand-card">
        <h3 className='custom'>{brandName} ALERT..!</h3>
      <img src={image} alt={brandName} className="card-img-top" />
      <div className="card-body">
  {/* Brand Logo */}
  <img 
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRmLtGCnpFfkNXI-18f7i0xu3nezn6m8VGBA&s" 
    alt={`${brandName} logo`} 
    className="brand-logo"
  />

  {/* Brand Info (Name + Followers) */}
  <div className="brand-info">
    <h6 className="brand-name">By {brandName}</h6>
    <p className="followers">
      {Math.floor(Math.random() * 9000) + 1000} Followers
    </p>
  </div>

  {/* Action Icons */}
  <div className="icons">
    <span className="heart-icon">
      <i className="fa-regular fa-heart"></i>
    </span>
    <span className="whatsapp-icon">
      <i className="fa-brands fa-whatsapp"></i>
    </span>
  </div>
</div>
</div>

  );
}

export default BrandCard;
