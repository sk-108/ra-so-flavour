

import React, { useEffect, useState } from "react";
import FoodData from "../data/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slices/CategorySlice";

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);

  const listUniqueCategories = () => {
    const uniqueCategories = [...new Set(FoodData.map((food) => food.category))];
    setCategories(uniqueCategories);
  };

  useEffect(() => {
    listUniqueCategories();
  }, []);

  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);

  return (
    <div className="ml-6">
      <br></br>
      <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
        Find the best food 🍽️
      </h3>
      <div className="flex gap-3 overflow-x-auto lg:overflow-x-visible scroll-smooth pb-3">
        <button
          onClick={() => dispatch(setCategory("All"))}
          className={`px-4 py-2 rounded-full font-medium border transition-all duration-300
            ${
              selectedCategory === "All"
                ? "bg-[#FC8019] text-white"
                : "bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-300 hover:bg-[#FC8019] hover:text-white"
            }`}
        >
          All
        </button>

        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => dispatch(setCategory(category))}
            className={`px-4 py-2 rounded-full font-medium border transition-all duration-300
              ${
                selectedCategory === category
                  ? "bg-[#FC8019] text-white"
                  : "bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-300 hover:bg-[#FC8019] hover:text-white"
              }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryMenu;
