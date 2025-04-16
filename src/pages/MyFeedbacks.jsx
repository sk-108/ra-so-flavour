// src/pages/MyFeedbacks.jsx
import React from "react";
import { useSelector } from "react-redux";

const MyFeedbacks = () => {
  const feedbackData = useSelector((state) => state.feedback.feedbackData);

  const feedbackEntries = Object.entries(feedbackData);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">My Feedbacks</h2>

      {feedbackEntries.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-400">You haven't given feedback yet.</p>
      ) : (
        <div className="space-y-4">
          {feedbackEntries.map(([id, { rating, comment }]) => (
            <div
              key={id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Dish ID: {id}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">⭐ Rating: {rating}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">💬 {comment}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyFeedbacks;
