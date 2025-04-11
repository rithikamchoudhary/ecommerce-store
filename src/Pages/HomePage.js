import React from 'react';
import { products } from '../data';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>All Products</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        {products.map(product => (
          <div key={product.id} style={{ border: "1px solid #ddd", padding: "10px" }}>
            <img src={product.image} alt={product.name} width="150" />
            <h4>{product.name}</h4>
            <p>₹{product.price}</p>
            <Link to={`/product/${product.id}`}>View</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
