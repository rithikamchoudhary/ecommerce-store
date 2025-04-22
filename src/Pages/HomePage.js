import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./HomePage.css";
import { useContext } from "react";
import { CartContext } from "../CartContext";
import { toast } from "react-toastify";

const HomePage = () => {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  const currentUser = {
    username: "admin",
    role: "ADMIN",
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (!confirm) return;

    try {
      await axios.delete(`http://localhost:8080/api/products/${id}`);
      toast.success("Product deleted successfully!", {
        position: "top-right",
      });

      // Refresh the list (or refetch data)
      setProducts(products.filter((p) => p.id !== id));
    } catch (error) {
      console.error("Delete error:", error);
      toast.error("Failed to delete product", {
        position: "top-right",
      });
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>All Products</h2>
      <div
        className="products-container"
        style={{
          display: "grid",
          gap: "20px",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", //makes the grid responsive
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card"
            style={{ border: "1px solid #ddd", padding: "10px" }}
          >
            <img
              src={product.image}
              alt={product.name}
              width="150"
              className="product-image"
            />
            <h4>{product.name}</h4>
            <p>₹{product.price}</p>
            <p>{product.description}</p>
            <button className="btn" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
            <div style={{ marginTop: "10px", marginBottom: "10px" }}>
              <Link to={`/product/${product.id}`}>View</Link>
            </div>
            {currentUser.role === "ADMIN" && (
              <>
                <Link to={`/edit-product/${product.id}`}>
                  <button style={{ marginRight: "10px" }}>Edit</button>
                </Link>
                <button onClick={() => handleDelete(product.id)}>Delete</button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
