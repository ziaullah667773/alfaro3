// pages/ProductDetailPage.js
import React from 'react';

const ProductDetailPage = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-4">Product Title</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
       
        {/* Add more images */}
      </div>
      <p className="text-2xl font-semibold my-4">$XX.XX</p>
      <div className="my-4">
        <label htmlFor="color" className="block text-xl font-semibold mb-2">Color:</label>
        <select id="color" className="py-2 px-4 border border-gray-300 rounded-md">
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          {/* Add more options */}
        </select>
      </div>
      <p className="text-lg my-4">Product Description</p>
      <div className="my-4">
        <h2 className="text-xl font-semibold mb-2">Customer Reviews</h2>
        <div className="space-y-4">
          <div className="border border-gray-300 p-4 rounded-lg">
            <p className="text-lg">5 stars - Great product!</p>
            <p className="text-gray-600">By John Doe</p>
          </div>
          {/* Add more reviews */}
        </div>
        <form className="mt-4">
          <textarea className="w-full p-4 border border-gray-300 rounded-lg"  rows={4}  placeholder="Write your review"></textarea>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-2">Submit Review</button>
        </form>
      </div>
      <div className="my-4">
        <h2 className="text-xl font-semibold mb-2">Related Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="border border-gray-300 p-4 rounded-lg">
            
            <p className="text-lg">Related Product Title</p>
          </div>
          {/* Add more related products */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
