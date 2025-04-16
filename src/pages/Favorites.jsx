// src/pages/Favorites.jsx
import React from "react";
import { useSelector } from "react-redux";
import FoodCard from "../components/FoodCard";

const Favorites = () => {
  const favoriteItems = useSelector((state) => state.favorites.favorites);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
        Your Favorite Dishes
      </h2>
      {favoriteItems.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-400">No favorites yet. Go explore and add some!</p>
      ) : (
        <div className="flex flex-wrap gap-6">
          {favoriteItems.map((item) => (
            <FoodCard key={item.id} {...item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
