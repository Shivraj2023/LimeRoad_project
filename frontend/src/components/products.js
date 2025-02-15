import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductPage from "./reuableproducts";
import "./products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams(); 

  useEffect(() => {
    fetch("/assets/assets.json") // Ensure the path is correct
      .then((response) => {
        if (!response.ok) throw new Error("Failed to load product data.");
        return response.json();
      })
      .then((data) => {
        const categoryMap = {
          men: data.mens_products || [],
          women: data.womens_products || [],
          kids: data.kids_products || [],
          home: data.home_products || [],
        };

        const normalizedCategory = category?.toLowerCase(); // Normalize input
        const selectedProducts = categoryMap[normalizedCategory] || categoryMap["men"]; // Default to "men" if invalid

        if (!categoryMap[normalizedCategory]) {
          console.warn(`Category "${category}" not found. Defaulting to "men".`);
        }

        setProducts(selectedProducts);
      })
      .catch((error) => console.error("Error fetching products:", error));
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
