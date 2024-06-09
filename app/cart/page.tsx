/* eslint-disable react/no-unescaped-entities */
"use client";

import React from 'react';
import { useCart } from 'app/context/CartContext';
import Link from 'next/link';
import Image from 'next/image';

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();

  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity > 0) {
      updateQuantity(id, quantity);
    }
  };

  const handleRemoveItem = (id: string) => {
    removeFromCart(id);
  };

  const handleClearCart = () => {
    clearCart();
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="max-w-7xl mx-auto px-5 py-10">
      <h1 className="text-4xl font-bold mb-4">My Cart</h1>
      <p className="mb-8 text-gray-600">Adding an item to your bag doesn't hold it, so get what you love before it's gone.</p>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-grow">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-6">Product Description</h2>
              <div className="hidden lg:grid grid-cols-5 gap-4 font-semibold mb-4">
                <div className="col-span-2">Product</div>
                <div className="text-center">Unit Price</div>
                <div className="text-center">QTY</div>
                <div className="text-center">Total Price</div>
              </div>
              {cart.map((item) => (
                <div key={item.id} className="flex flex-col lg:grid lg:grid-cols-5 gap-4 border-b py-4 items-center">
                  <div className="flex items-center gap-4 col-span-2">
                    <Image src={item.imageUrl} alt={item.title} width={80} height={80} className="rounded" />
                    <div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      {item.size && <p>Size: {item.size}</p>}
                      {item.color && <p>Color: {item.color}</p>}
                    </div>
                  </div>
                  <div className="text-center">{`RM ${item.price.toFixed(2)}`}</div>
                  <div className="flex lg:justify-center gap-4 items-center">
                    <div className="flex items-center border rounded">
                      <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)} className="px-2">-</button>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                        className="w-12 text-center border-l border-r"
                      />
                      <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)} className="px-2">+</button>
                    </div>
                  </div>
                  <div className="text-center">{`RM ${(item.price * item.quantity).toFixed(2)}`}</div>
                  <button onClick={() => handleRemoveItem(item.id)} className="text-red-500 hover:underline lg:self-center">Remove</button>
                </div>
              ))}
            </div>
            <button onClick={handleClearCart} className="bg-red-500 text-white py-2 px-4 mt-4 rounded hover:bg-red-600">
              Clear Cart
            </button>
          </div>
          <div className="w-full lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Subtotal: RM {total.toFixed(2)}</h2>
              <p className="mb-4 text-gray-600">You can choose your shipping option later in the checkout.</p>
              <Link href="/checkout" legacyBehavior>
                <a className="block w-full bg-black text-white text-center py-3 rounded mb-2 hover:bg-gray-800">Login to Checkout</a>
              </Link>
              <Link href="/guest-checkout" legacyBehavior>
                <a className="block w-full border border-black text-center py-3 rounded hover:bg-gray-200">Guest Checkout</a>
              </Link>
              <div className="mt-4 flex justify-center">
                <Image src="/visa.png" alt="Visa" width={50} height={30} />
                <Image src="/mastercard.png" alt="MasterCard" width={50} height={30} />
                <Image src="/fpx.png" alt="FPX" width={50} height={30} />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Customer Service</h2>
              <p>Need Help? Email us at <a href="mailto:alfaroexclusive@gmail.com" className="text-blue-500 hover:underline">alfaroexclusive@gmail.com</a> if you need further assistance.</p>
              <p>Call: +60167469310</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
