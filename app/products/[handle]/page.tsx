"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { ProductNode, ReviewData } from 'lib/shopify';
import fetchProductByHandle from 'lib/fetchProductByHandle';
import ImageGallery from 'components/ImageGallery';
import Info from 'components/Info';
import ReviewSection from 'components/ReviewSection';
import Review from 'components/Review';
import { useCart } from 'app/context/CartContext';

const ProductDetailPage = () => {
  const params = useParams();
  const handle = Array.isArray(params.handle) ? params.handle[0] : params.handle;

  const { addToCart } = useCart();
  const [showAddedMessage, setShowAddedMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const [product, setProduct] = useState<ProductNode | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [reviews, setReviews] = useState<ReviewData[]>([]);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  useEffect(() => {
    if (handle) {
      fetchProductByHandle(handle)
        .then(data => {
          setProduct(data);
          const storedReviews = localStorage.getItem(`reviews-${data.id}`);
          if (storedReviews) {
            setReviews(JSON.parse(storedReviews));
          } else {
            setReviews(data.reviews || []);
          }
          setLoading(false);
        })
        .catch(err => {
          setError('Failed to fetch product details: ' + err.message);
          setLoading(false);
        });
    }
  }, [handle]);

  const handleNewReview = (newReview: ReviewData) => {
    const updatedReviews = [...reviews, newReview];
    setReviews(updatedReviews);
    if (product) {
      localStorage.setItem(`reviews-${product.id}`, JSON.stringify(updatedReviews));
    }
  };

  const handleAddToCart = () => {
    if (product && selectedSize && selectedColor) {
      const imageUrl = product.images?.edges[0]?.node.transformedSrc || ''; // Assuming the first image as the default image
      addToCart({
        id: product.id,
        title: product.title,
        price: parseFloat(product.priceRange.minVariantPrice.amount),
        size: selectedSize,
        color: selectedColor,
        quantity: 1,
        imageUrl,
      });
      setShowAddedMessage(true);
      setShowErrorMessage(false);
      setTimeout(() => {
        setShowAddedMessage(false);
      }, 3000);
      console.log("Item added to cart:", product.title, selectedSize, selectedColor); // Debug log
    } else {
      setShowErrorMessage(true);
      console.log("Product, size, or color not selected"); // Debug log
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>No product found!</p>;

  const imageUrls = product.images?.edges.map(edge => edge.node.transformedSrc) || [];

  const sizes = product.variants?.edges
    .map(variant => variant.node.selectedOptions.find(option => option.name === 'Size')?.value)
    .filter((value, index, self): value is string => value !== undefined && self.indexOf(value) === index);

  const colors = product.variants?.edges
    .map(variant => variant.node.selectedOptions.find(option => option.name === 'Color')?.value)
    .filter((value, index, self): value is string => value !== undefined && self.indexOf(value) === index);

  const averageRating = reviews.length ? reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length : 0;

  return (
    <div className="max-w-7xl mx-auto px-5 py-5">
      <div className="font-semibold text-2xl mb-2">
        <a href="/" className="text-blue-500 hover:underline">Home</a>
      </div>
      <hr />
      {product && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 mt-10">
          <ImageGallery imageUrls={imageUrls} />
          <div className="flex flex-col justify-between">
            <Info 
              title={product.title} 
              price={product.priceRange.minVariantPrice.amount} 
              description={product.descriptionHtml} 
              rating={averageRating} 
              numberComments={reviews.length}
              sizes={sizes}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
              colors={colors}
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
            />
            <button 
              className="bg-blue-500 text-white py-2 px-4 mt-4 rounded hover:bg-blue-600"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
            {showAddedMessage && <p className="text-green-500 mt-2">Item added to cart!</p>}
            {showErrorMessage && <p className="text-red-500 mt-2">Please select size and color!</p>}
          </div>
        </div>
      )}
      <div className="mt-20 mb-20">
        <ReviewSection reviews={reviews} />
        <Review productId={product.id} currentUserId="current-user-id" onNewReview={handleNewReview} />
      </div>
    </div>
  );
};

export default ProductDetailPage;
