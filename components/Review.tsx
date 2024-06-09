import React, { useState } from 'react';

interface ReviewProps {
  productId: string;
  currentUserId: string;
  onNewReview: (newReview: { content: string; author: string; id: string; rating: number }) => void;
}

const Review: React.FC<ReviewProps> = ({ productId, currentUserId, onNewReview }) => {
  const [content, setContent] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newReview = {
      content,
      author: 'Current User', // Replace with actual user name
      id: Math.random().toString(36).substring(2, 15), // Replace with actual ID generation logic
      rating,
    };
    onNewReview(newReview);
    setContent('');
    setRating(0);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your review here"
        className="w-full p-2 border border-gray-300 rounded"
        rows={4}
      />
      <div>
        <label>Rating:</label>
        <select value={rating} onChange={(e) => setRating(Number(e.target.value))} className="ml-2 p-2 border border-gray-300 rounded">
          <option value={0}>Select Rating</option>
          {[1, 2, 3, 4, 5].map((rate) => (
            <option key={rate} value={rate}>
              {rate} Star{rate > 1 ? 's' : ''}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Submit Review
      </button>
    </form>
  );
};

export default Review;
