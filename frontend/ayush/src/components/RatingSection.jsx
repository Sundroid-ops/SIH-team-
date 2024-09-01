// src/components/RatingSection.jsx
import React from 'react';
import { FaStar } from 'react-icons/fa';

const RatingSection = ({ ratings }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
      <h2 className="text-2xl font-bold mb-4">Ratings from Farmers</h2>
      {ratings.length > 0 ? (
        ratings.map((rating, index) => (
          <div key={index} className="mb-4">
            <p><strong>Farmer:</strong> {rating.farmerName}</p>
            <p>
              <strong>Rating:</strong> 
              {Array(rating.stars).fill().map((_, i) => (
                <FaStar key={i} className="text-yellow-500 inline-block" />
              ))}
            </p>
            <p><strong>Feedback:</strong> {rating.feedback}</p>
          </div>
        ))
      ) : (
        <p>No ratings yet.</p>
      )}
    </div>
  );
};

export default RatingSection;
