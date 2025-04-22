import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddProductPage = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8080/api/products", product);
      toast.success("Item added to Home page.", {
        position: "top-right",
      });
      //   alert("Product added successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error adding product:", error);
      toast.warn("Item failed to add to Home page. Try again.", {
        position: "top-right",
      });
      alert("Failed to add product");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Product Name"
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <input
          name="price"
          placeholder="Price"
          type="number"
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <input
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProductPage;
