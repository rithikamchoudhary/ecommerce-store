import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

// Step 1: Create a context object
export const CartContext = createContext();

// Step 2: Create a Provider component
// This component will wrap around the parts of your app that need access to the cart context
// and provide the cart state and functions to update it.
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  //remove from cart option
  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCart);
    toast.success("Item removed from cart!", {
      position: "top-right"
    });
  };

  const addToCart = (product) => {
    const exists = cartItems.find(item => item.id === product.id);
    if (exists) {
        toast.warn("Item already in cart!", {
            position: "top-right"
          });
    } else {
      setCartItems([...cartItems, product]);
      toast.success("Item added to cart!", {
        position: "top-right"
      });
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
