// Products.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductPage from './reuableproducts';
import './products.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    fetch("/assets/assets.json")
      .then(response => response.json())
      .then(data => {
        const categoryMap = {
          men: data.mens_products || [],
          women: data.womens_products || [],
          kids: data.kids_products || [],
          home: data.home_products || [],
        };
        setProducts(categoryMap[category] || []);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, [category]);

  return (
    <div className="products-container">
      {products.length > 0 ? (
        <ProductPage products={products} />
      ) : (
        <p className="no-products">No products available for this category.</p>
      )}
    </div>
  );
};

export default Products;
