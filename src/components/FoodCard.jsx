

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";
import { toggleFavorite } from "../redux/slices/FavoriteSlice";
import { addFeedback } from "../redux/slices/FeedbackSlice";
import { toast } from "react-hot-toast";
import { AiFillStar } from "react-icons/ai";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const FoodCard = ({ id, name, price, desc, rating, img, handleToast }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);
  const isFav = favorites.some((item) => item.id === id);

  const [userRating, setUserRating] = useState(0);
  const [comment, setComment] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart({ id, name, price, img }));
    handleToast(name);
  };

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite({ id, name, price, rating, img }));
    toast.success(isFav ? "Removed from favorites" : "Added to favorites");
  };

  const handleFeedbackSubmit = () => {
    if (userRating === 0) {
      toast.error("Please select a rating");
      return;
    }
    dispatch(addFeedback({ id, rating: userRating, comment }));
    toast.success("Thanks for your feedback!");
    setComment("");
    setUserRating(0);
    setShowFeedback(false);
  };

  return (
    <div className="relative w-[280px] bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.03] overflow-hidden">
      <img src={img} alt={name} className="w-full h-[180px] object-cover" />

      {/* Heart Icon */}
      <button
        onClick={handleToggleFavorite}
        className="absolute top-3 right-3 p-2 rounded-full bg-white/90 dark:bg-gray-700 text-red-500 shadow-sm"
        title={isFav ? "Remove from favorites" : "Add to favorites"}
      >
        {isFav ? <FaHeart className="text-lg" /> : <FaRegHeart className="text-lg" />}
      </button>

      <div className="p-4 space-y-2">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold text-gray-800 dark:text-white">{name}</h2>
          <span className="flex items-center text-sm font-semibold text-green-600 dark:text-green-400">
            <AiFillStar className="text-yellow-400 mr-1" /> {rating}
          </span>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{desc}</p>
        <div className="flex justify-between items-center">
          <span className="font-bold text-orange-600 dark:text-orange-400">₹{price}</span>
          <button
            onClick={handleAddToCart}
            className="bg-[#FC8019] hover:bg-orange-600 text-white text-sm font-bold px-4 py-2 rounded-full transition-all"
          >
            Add to Cart
          </button>
        </div>

        {/* Toggle Feedback Button */}
        <button
          onClick={() => setShowFeedback((prev) => !prev)}
          className="text-xs text-blue-600 dark:text-blue-400 hover:underline mt-2"
        >
          {showFeedback ? "Cancel Feedback" : "Leave Feedback"}
        </button>

        {/* Feedback Form */}
        {showFeedback && (
          <div className="space-y-2 mt-2">
            <select
              value={userRating}
              onChange={(e) => setUserRating(Number(e.target.value))}
              className="w-full p-1 rounded text-sm border"
            >
              <option value={0}>Rate this item</option>
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>{num} Star</option>
              ))}
            </select>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write your feedback..."
              className="w-full p-2 text-sm border rounded resize-none"
              rows={2}
            />
            <button
              onClick={handleFeedbackSubmit}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-1 rounded"
            >
              Submit Feedback
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodCard;
