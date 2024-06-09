import React from 'react';
import { ReviewData } from 'lib/shopify';

interface ReviewSectionProps {
    reviews: ReviewData[];
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ reviews }) => {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold">Reviews</h2>
            {reviews.length > 0 ? (
                reviews.map((review) => (
                    <div key={review.id} className="p-4 border border-gray-200 rounded shadow-sm">
                        <p className="text-gray-700">{review.content}</p>
                        <p className="text-sm text-gray-500">- {review.author}</p>
                        <div className="text-yellow-500">
                            {Array.from({ length: 5 }, (_, index) => (
                                <span key={index}>{index < review.rating ? '★' : '☆'}</span>
                            ))}
                        </div>
                    </div>
                ))
            ) : (
                <p>No reviews yet. Be the first to write a review!</p>
            )}
        </div>
    );
};

export default ReviewSection;
