import React from 'react';
import { products } from '../data';
import { Link } from 'react-router-dom';
import './HomePage.css'; 
import { useContext } from 'react';
import { CartContext } from '../CartContext';

const HomePage = () => {
  const { addToCart } = useContext(CartContext);
  return (
    <div style={{ padding: "20px" }}>
      <h2>All Products</h2>
      <div className="products-container" style={{ 
        display: "grid", 
        gap: "20px", 
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" //makes the grid responsive
      }}>
        {products.map(product => (
          <div key={product.id} className="product-card" style={{ border: "1px solid #ddd", padding: "10px" }}>
            <img src={product.image} alt={product.name} width="150" className="product-image" />
            <h4>{product.name}</h4>
            <p>₹{product.price}</p>            
            <p>{product.description}</p>
            <button  className="btn" onClick={() => addToCart(product)}>Add to Cart</button>
            <div style={{ marginTop: "10px" }}>
              <Link to={`/product/${product.id}`}>View</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
