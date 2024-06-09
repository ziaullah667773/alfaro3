"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface CartItem {
  id: string;
  title: string;
  price: number;
  size?: string;
  color?: string;
  quantity: number;
  imageUrl: string;
}

interface CartContextProps {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  cartItemCount: () => number;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Load cart from localStorage on initial render
  useEffect(() => {
    const loadCartFromStorage = () => {
      try {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
          const parsedCart = JSON.parse(storedCart);
          if (Array.isArray(parsedCart)) {
            setCart(parsedCart);
            console.log("Loaded cart from localStorage:", parsedCart);
          } else {
            console.warn("Invalid cart data in localStorage:", parsedCart);
          }
        } else {
          console.log("No cart data in localStorage");
        }
      } catch (error) {
        console.error("Failed to parse cart from localStorage:", error);
      }
    };

    loadCartFromStorage();
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(cart));
      console.log("Saved cart to localStorage:", cart);
    } catch (error) {
      console.error("Failed to save cart to localStorage:", error);
    }
  }, [cart]);

  const addToCart = (item: CartItem) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id && cartItem.size === item.size && cartItem.color === item.color);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id && cartItem.size === item.size && cartItem.color === item.color
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      }
      return [...prevCart, item];
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    setCart(prevCart =>
      prevCart.map(cartItem =>
        cartItem.id === id ? { ...cartItem, quantity } : cartItem
      )
    );
  };

  const removeFromCart = (id: string) => {
    setCart(prevCart => prevCart.filter(cartItem => cartItem.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartItemCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart, clearCart, cartItemCount }}>
      {children}
    </CartContext.Provider>
  );
};
