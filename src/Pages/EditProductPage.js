import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const EditProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    axios.get(`http://localhost:8080/api/products`).then((res) => {
      const found = res.data.find((p) => p.id === parseInt(id));
      if (found) setProduct(found);
    });
  }, [id]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/api/products/${id}`, product);
      toast.success("Product updated successfully!", {
        position: "top-right",
      });
      navigate("/");
    } catch (err) {
      toast.error("Update failed", {
        position: "top-right",
      });
      console.error(err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={product.name}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <input
          name="price"
          value={product.price}
          type="number"
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <input
          name="image"
          value={product.image}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditProductPage;
