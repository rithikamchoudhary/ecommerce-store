import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import "./button.css";
import { Link } from "react-router-dom";
import "./CartPage.css";

const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div
            className="cart-container"
            style={{
              display: "flex",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "20px",
            }}
          >
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="cart-card"
                style={{
                  textAlign: "center",
                  border: "1px solid #ccc",
                  padding: "10px",
                }}
              >
                <img
                  className="cart-image"
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "150px",
                    height: "130px",
                    marginBottom: "10px",
                  }}
                />
                <h4>{item.name}</h4>
                <p>Price: ₹{item.price}</p>
                <div style={{ marginTop: "10px", marginBottom: "10px" }}>
                  <Link to={`/product/${item.id}`}>View</Link>
                </div>
                <button
                  className="btn btn-danger"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <h3 style={{ marginTop: "20px" }}>Total: ₹{total}</h3>
        </>
      )}
    </div>
  );
};

export default CartPage;
