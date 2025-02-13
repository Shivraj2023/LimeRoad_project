// BrandList.js
import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import BrandCard from './brandcard';
import './brandlist.css';


const BrandList = () => {
  const { mainCategory } = useParams();
  const [searchParams] = useSearchParams();
  const category = searchParams.get('occasion');
  const [brandImages, setBrandImages] = useState([]);

  useEffect(() => {
    fetch("/assets/assets.json")
      .then((response) => response.json())
      .then((data) => {
        let products = [];
        
        
        if (category?.toLowerCase() === 'myfeed') {
          const allCategories = [
            ...(data.mens_products || []),
            ...(data.womens_products || []),
            ...(data.kids_products || []),
            ...(data.home_products || [])
          ];
          products = allCategories;
        } else {
          const categoryKey = `${mainCategory}s_products`;
          products = data[categoryKey] || [];
        }
          
        const filteredBrands = products
          .filter((item) => 
            category?.toLowerCase() === 'myfeed' || 
            item.category?.toLowerCase() === category?.toLowerCase()
          )
          .map((item) => ({
            brandImage: item.brand_image,
            brandName: item.brand_name || 'Brand',
          }));
  
      
        const uniqueBrands = [
          ...new Set(filteredBrands.map(item => JSON.stringify(item)))
        ].map(JSON.parse);
  
        setBrandImages(uniqueBrands);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, [mainCategory, category]);
  

  if (!brandImages.length) {
    return <p className="text-center mt-4">No brands available for this category.</p>;
  }

  return (
    <div className="container my-4">
    <div className="row g-4">
      {brandImages.filter((brand) => brand.brandImage && brand.brandName).length > 0 ? (
        brandImages
          .filter((brand) => brand.brandImage && brand.brandName)
          .map((brand, index) => (
            <div 
              key={index} 
              className="col-12 col-sm-6 col-md-4 col-lg-3 item-container"
            >
              <BrandCard 
                image={brand.brandImage} 
                brandName={brand.brandName} 
              />
            </div>
          ))
      ) : (
        <div className="col-12 text-center">
          <p className="no-brands-card">
            No brands found for the selected categories.
          </p>
        </div>
      )}
    </div>
  </div>
  
  );
};

export default BrandList;
