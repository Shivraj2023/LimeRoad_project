import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function Productdetails() {
  const { category, id } = useParams(); // Get category and product ID from the URL
  const [product, setProduct] = useState(null); // Store product details

  useEffect(() => {
    fetch("/assets/assets.json") // Fetch data from your JSON file
      .then((response) => response.json())
      .then((data) => {
        // Map each category to its products
        const categoryMap = {
          men: data.mens_products || [],
          women: data.womens_products || [],
          kids: data.kids_products || [],
          home: data.home_products || [],
        };

        // Check the category and filter the products array
        const selectedCategory = categoryMap[category]; // Get the products array for the selected category

        if (selectedCategory) {
          // Find the product that matches the id
          const foundProduct = selectedCategory.find(
            (product) => product.id === parseInt(id) // Make sure to compare the ids as numbers
          );
          setProduct(foundProduct); // Set the product state
        } else {
          console.error(`Category "${category}" not found`);
        }
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, [category, id]); // Fetch data when either category or id changes

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 style={{ backgroundColor: "blue" }}>Product ID: {id}</h1>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <img src={product.image} alt={product.title} />
      <p>Price: ${product.price}</p>
    </div>
  );
}

export default Productdetails;




