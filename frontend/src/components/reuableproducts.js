// Formatted and Enhanced ProductPage Component with WhatsApp and Heart Icons
import React, { useState } from 'react';
import './reusable.css';

const ProductPage = ({ products = [] }) => {
  const [filters, setFilters] = useState({ price: '', discount: '' });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredProducts = products.filter((p) =>
    (!filters.price || p.price <= parseInt(filters.price)) &&
    (!filters.discount || p.discount >= parseInt(filters.discount))
  );

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar Filters */}
        <div className="col-md-3 p-3 border-end">
          <h5>Filters</h5>
          <form>
            <select className="form-select mb-3" name="price" onChange={handleFilterChange}>
              <option value="">Select</option>
              <option value="500">Under ₹500</option>
              <option value="1000">Under ₹1000</option>
              <option value="2000">Under ₹2000</option>
            </select>
            <select className="form-select mb-3" name="discount" onChange={handleFilterChange}>
              <option value="">Select</option>
              <option value="10">10% or more</option>
              <option value="20">20% or more</option>
              <option value="50">50% or more</option>
            </select>
          </form>
        </div>

        {/* Product Display */}
        <div className="col-md-9 p-3">
          <h5>Products</h5>
          <div className="row">
            {filteredProducts.length ? (
              filteredProducts.map((product) => (
                <div key={product.id} className="col-md-4 mb-4">
                  <div className="card">
                    <img src={product.image} className="card-img-top" alt={product.name} />
                    <div className="card-body">
                      <p className="card-text">
                        ₹{product.price} &nbsp;
                    {product.offer_percent}% off </p>
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
                </div>
              ))
            ) : (
              <p>No products found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
