
import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQty,
  decrementQty,
} from "../redux/slices/CartSlice";
import { toast } from "react-hot-toast";

const ItemCard = ({ id, name, qty, price, img }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-4 shadow-md rounded-lg p-3 bg-[#1f1f1f] relative text-white">
      {/* Delete Icon */}
      <MdDelete
        onClick={() => {
          dispatch(removeFromCart({ id, img, name, price, qty }));
          toast(`${name} Removed!`, { icon: "👋" });
        }}
        className="absolute right-3 top-3 text-gray-400 hover:text-red-400 cursor-pointer"
      />

      {/* Image */}
      <img src={img} alt={name} className="w-12 h-12 object-cover rounded" />

      {/* Content */}
      <div className="flex-1">
        <h2 className="font-bold text-white text-sm">{name}</h2>
        <div className="flex justify-between items-center mt-2">
          <span className="text-orange-400 font-semibold text-sm">₹{price}</span>
          <div className="flex items-center gap-2">
            <button
              onClick={() =>
                qty > 1 ? dispatch(decrementQty({ id })) : null
              }
              className="bg-[#FC8019] hover:bg-orange-600 text-white rounded p-1"
              title="Decrease"
            >
              <AiOutlineMinus />
            </button>
            {/* <span className="w-4 text-center">{qty}</span> */}
            <span className="w-4 text-center">{Number(qty) || 1}</span>

            <button
              onClick={() => dispatch(incrementQty({ id }))}
              className="bg-[#FC8019] hover:bg-orange-600 text-white rounded p-1"
              title="Increase"
            >
              <AiOutlinePlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
