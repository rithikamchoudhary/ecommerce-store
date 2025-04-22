import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../CartContext";

const currentUser = {
  username: "admin",
  role: "ADMIN",
};

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <nav style={{ padding: "10px", background: "#222", color: "#fff" }}>
      <Link to="/" style={{ margin: "0 10px", color: "#fff" }}>
        Home
      </Link>
      <Link to="/cart" style={{ margin: "0 10px", color: "#fff" }}>
        Cart ({cartItems.length})
      </Link>
      <Link to="/login" style={{ margin: "0 10px", color: "#fff" }}>
        Login
      </Link>
      <Link to="/register" style={{ margin: "0 10px", color: "#fff" }}>
        Register
      </Link>
      {currentUser.role === "ADMIN" && (
        <Link to="/add-product" style={{ margin: "0 10px", color: "#fff" }}>
          Add Product
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
