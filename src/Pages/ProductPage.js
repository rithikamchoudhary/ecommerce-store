import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data';
import { useContext } from 'react';
import { CartContext } from '../CartContext';

const ProductPage = () => {
  const { id } = useParams(); // get ID from the URL
  const { addToCart } = useContext(CartContext);

  const product = products.find(p => p.id === parseInt(id)); // get product by ID

  if (!product) return <h2>Product not found</h2>;

  return (
    <div style={{ padding: "20px" }}>
      <img src={product.image} alt={product.name} width="300" />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <h4>₹{product.price}</h4>
      <button className="btn" onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductPage;
