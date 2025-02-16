import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Card, Button, Spinner, Table } from "react-bootstrap";
import {Rating} from "@mui/material";
import "./productdetails.css";

function Productdetails() {
  const { category, id } = useParams();
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);

  useEffect(() => {
    fetch("/assets/assets.json")
      .then((response) => response.json())
      .then((data) => {
        const categoryMap = {
          men: data.mens_products || [],
          women: data.womens_products || [],
          kids: data.kids_products || [],
          home: data.home_products || [],
        };

        const selectedCategory = categoryMap[category];

        if (selectedCategory) {
          const foundProduct = selectedCategory.find((p) => p.id === parseInt(id));
          setProduct(foundProduct);

          if (foundProduct) {
            const filteredProducts = selectedCategory.filter(
              (p) => p.category === foundProduct.category && p.id !== foundProduct.id
            );
            setSimilarProducts(filteredProducts);
          }
        } else {
          console.error(`Category "${category}" not found`);
        }
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, [category, id]);

  if (!product) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" variant="primary" /> Loading...
      </Container>
    );
  }

  return (
    <Container className="pt-5 mt-4"> {/* Added extra padding at the top */}
    <Row>
      {/* Left Column - Main Product Image */}
      <Col md={7}>
      <div className="d-flex justify-content-center align-items-center" style={{ height: "600px" }}> 
        <img 
          src={product.image} 
          className="img-fluid rounded" 
          alt={product.title} 
          style={{ maxHeight: "550px", objectFit: "contain" }} 
        />
      </div>
  
        {/* Tabs - SIMILAR, COLOUR, BRAND */}
        <div className="d-flex border-bottom mt-4">
          <div className="flex-fill text-center py-2 border-bottom border-success fw-bold">Similar Products</div>
          {/* <div className="flex-fill text-center py-2 text-muted">COLOUR</div>
          <div className="flex-fill text-center py-2 text-muted">BRAND</div> */}
        </div>
  
        {/* Similar Products - Larger Images with Spacing */}
        <Row className="mt-4 pb-4">
  {similarProducts.length > 0 ? (
    similarProducts.map((item) => (
      <Col key={item.id} md={6} className="mb-3">
        <div 
          className="border rounded p-3 shadow-sm bg-white mb-1 text-center" 
        >
          {/* Product Image */}
          <Link to={`/products/${category}/${item.id}`}>
            <img 
              src={item.image} 
              className="img-fluid rounded" 
              alt={item.title} 
              style={{ maxWidth: "90%", height: "auto" }} 
            />
          </Link>

          {/* Product Name - Smaller Font */}
          <p className="mt-2 mb-1 text-muted" style={{ fontSize: "0.9rem", fontWeight: "700" }}>
            {item.title}
          </p>

          {/* Flex Container for Price, Discount & Icons */}
          <div className="d-flex align-items-center justify-content-between mt-2 ps-3 pe-3">
            {/* Price & Discount - Smaller Font */}
            <p className="m-0 fw-bold" style={{ fontSize: "0.9rem" }}>
              ₹{item.price} &nbsp;
              <span className="text-success">{item.offer_percent}% off</span>
            </p>

            {/* Icons - Smaller Font */}
            <div className="d-flex gap-3">
              <span className="heart-icon">
                <i className="fa-regular fa-heart" style={{ fontSize: "0.9rem" }}></i>
              </span>
              <span className="whatsapp-icon">
                <i className="fa-brands fa-whatsapp" style={{ fontSize: "0.9rem" }}></i>
              </span>
            </div>
          </div>

        </div>
      </Col>
    ))
  ) : (
    <p className="text-center">No similar products found.</p>
  )}
</Row>




      </Col>
  
      {/* Right Column - Product Details */}
      <Col md={5}>
  {/* Product Title & Brand */}
  <h2 className="fw-bold">{product.title}</h2>
  <p className="text-muted">Brand: {product.brand_name || "Unknown"}</p>

  {/* Ratings & Stars */}
 {/* Ratings & Stars */}
 <div className="d-flex align-items-center mt-2">
  <span className="fw-bold fs-5">{product.rating?.rate || "5.0"}</span>
  <Rating 
    value={product.rating?.rate || 5} 
    name="partail-rating"
    precision={0.1} 
    readOnly 
    className="ms-2" 
  />
  <span className="text-muted ms-2">({product.rating?.count || 0} reviews)</span>
</div>


  {/* Share & WhatsApp Icons */}
  <div className="d-flex align-items-center gap-3 mt-2">
    <i className="fa-solid fa-share-nodes fs-5 text-dark"></i>
    <i className="fa-brands fa-whatsapp fs-5 text-success"></i>
  </div>

  {/* Select Size */}
  <h6 className="mt-3">SELECT SIZE</h6>
  <div className="d-flex gap-2">
    {["S", "M", "L", "XL", "2XL"].map((size) => (
      <Button key={size} variant="outline-dark">{size}</Button>
    ))}
  </div>

  {/* Price Details */}
  <div className="mt-3">
    <p className="mb-0 text-muted">
      <s> M.R.P: ₹{product.originalPrice || (product.price * 2).toFixed(2)}</s>
    </p>
    <p className="fw-bold fs-4 text-danger">
      Price: ₹{product.price} <span className="fs-6">({product.offer_percent}% OFF)</span>
    </p>
  </div>

  {/* Add to Cart Button */}
  <Button variant="success" className="w-100 mt-3">ADD TO CART</Button>

  {/* Size Chart Link (Click to Scroll) */}
  <h5 className="mt-4">
    <a href="#size-chart" className="text-dark text-decoration-none fw-bold">SIZE CHART</a>
  </h5>

  {/* Size Chart Section (With ID for Scroll) */}
  <div id="size-chart">
    <Table bordered>
      <thead className="table-light">
        <tr>
          <th>Size</th>
          <th>S</th>
          <th>M</th>
          <th>L</th>
          <th>XL</th>
          <th>2XL</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Bust (inches)</td>
          <td>32</td>
          <td>34</td>
          <td>36</td>
          <td>38</td>
          <td>40</td>
        </tr>
      </tbody>
    </Table>
  </div>
</Col>

    </Row>
  </Container>
  
  
  );
}

export default Productdetails;
