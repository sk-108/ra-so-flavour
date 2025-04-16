// src/components/RatingCard.jsx
import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const RatingCard = ({ dishId, dishName }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    const ratingData = {
      dishId,
      dishName,
      rating,
      feedback,
      date: new Date().toISOString(),
    };
    console.log("Submitted rating:", ratingData);
    setSubmitted(true);
    // Optional: send to Firebase or store in localStorage
  };

  if (submitted) {
    return (
      <div className="p-4 bg-green-50 text-green-700 rounded-xl shadow-md">
        Thanks for rating! 🌟
      </div>
    );
  }

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md space-y-3 w-full max-w-md">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
        Rate {dishName}
      </h3>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <AiFillStar
            key={star}
            size={24}
            className={`cursor-pointer ${
              (hover || rating) >= star ? "text-yellow-400" : "text-gray-300"
            }`}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(null)}
          />
        ))}
      </div>
      <textarea
        className="w-full p-2 rounded-md border border-gray-300 dark:bg-gray-700 dark:text-white"
        placeholder="Leave a comment (optional)"
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        rows={3}
      />
      <button
        className="bg-[#FC8019] text-white px-4 py-2 rounded-full hover:bg-orange-600 transition"
        onClick={handleSubmit}
        disabled={rating === 0}
      >
        Submit
      </button>
    </div>
  );
};

export default RatingCard;
