
// src/components/BrandList.js
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const BrandList = ({ products }) => {
  const [searchParams] = useSearchParams();
  const [brandImages, setBrandImages] = useState([]);
  const category = searchParams.get('occasion');

  useEffect(() => {
    if (category) {
      const filteredBrands = products
        .filter((item) => item.category === category)
        .map((item) => item.brand_image);

      // Remove duplicate brand images
      const uniqueBrands = [...new Set(filteredBrands)];
      setBrandImages(uniqueBrands);
    }
  }, [category, products]);

  if (!brandImages.length) {
    return <p>No brands available for this category.</p>;
  }

  return (
    <div className="brand-list">
      {brandImages.map((img, index) => (
        <div key={index} className="brand-card">
          <img src={img} alt={`Brand ${index}`} className="brand-image" />
        </div>
      ))}
    </div>
  );
};

export default BrandList;
