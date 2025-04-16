import React from "react";
import { useParams } from "react-router-dom";
import RatingCard from "../components/RatingCard";

const RateDish = () => {
  const { id } = useParams();
  const dishName = "Sample Dish"; // Replace with actual logic to get dish name by id

  return (
    <div className="p-6 flex justify-center items-center min-h-screen">
      <RatingCard dishId={id} dishName={dishName} />
    </div>
  );
};

export default RateDish;
