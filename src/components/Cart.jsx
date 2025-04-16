


import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);

  const cartItems = useSelector((state) => state.cart.cart);
  // const totalQty = cartItems.reduce((acc, item) => acc + item.qty, 0);
  // const totalPrice = cartItems.reduce((acc, item) => acc + item.qty * item.price, 0);
  const totalQty = cartItems.reduce((acc, item) => acc + Number(item.qty || 0), 0);
  const totalPrice = cartItems.reduce((acc, item) => acc + Number(item.qty || 0) * Number(item.price || 0), 0);

  const navigate = useNavigate();

  return (
    <>
      {/* Slide-out Cart Panel */}
      <div
        className={`fixed right-0 top-0 w-full lg:w-[22vw] h-full p-5 bg-white dark:bg-gray-900 shadow-lg border-l dark:border-gray-800 transition-transform duration-500 z-50 ${
          activeCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">My Order</h2>
          <IoMdClose
            onClick={() => setActiveCart(false)}
            className="text-2xl text-gray-600 dark:text-gray-300 hover:text-red-500 cursor-pointer"
          />
        </div>

        <div className="space-y-3 overflow-y-auto max-h-[65vh] pr-2">
          {cartItems.length > 0 ? (
            cartItems.map((food) => (
              <ItemCard
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                img={food.img}
                qty={food.qty}
              />
            ))
          ) : (
            <p className="text-center text-gray-600 dark:text-gray-400 font-semibold mt-10">
              Your cart is empty 🛒
            </p>
          )}
        </div>

        {/* Cart Summary & Checkout */}
        <div className="absolute bottom-0 left-0 w-full p-5 border-t dark:border-gray-700 bg-white dark:bg-gray-900">
          <div className="flex justify-between text-gray-700 dark:text-gray-200 font-semibold mb-2">
            <span>Items:</span>
            <span>{totalQty}</span>
          </div>
          <div className="flex justify-between text-gray-700 dark:text-gray-200 font-semibold mb-4">
            <span>Total:</span>
            <span>₹{totalPrice}</span>
          </div>
          <button
            onClick={() => navigate("/success")}
            className="w-full py-2 bg-[#FC8019] hover:bg-orange-600 text-white font-bold rounded-lg transition"
            disabled={totalQty === 0}
          >
            Checkout
          </button>
        </div>
      </div>

      {/* Floating Cart Button */}
      <div className="fixed bottom-4 right-4 z-40">
        <div className="relative">
          {totalQty > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {totalQty}
            </span>
          )}
          <FaShoppingCart
            onClick={() => setActiveCart(!activeCart)}
            className="text-white bg-[#FC8019] hover:bg-orange-600 text-4xl p-3 rounded-full shadow-lg cursor-pointer transition-all"
          />
        </div>
      </div>
    </>
  );
};

export default Cart;
