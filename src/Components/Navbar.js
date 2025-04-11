import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{ padding: "10px", background: "#222", color: "#fff" }}>
          <Link to="/" style={{ margin: "0 10px", color: "#fff" }}>Home</Link>
          <Link to="/cart" style={{ margin: "0 10px", color: "#fff" }}>Cart</Link>
          <Link to="/login" style={{ margin: "0 10px", color: "#fff" }}>Login</Link>
        </nav>
      );
};

export default Navbar; 
