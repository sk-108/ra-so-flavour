

import React, { useState, useEffect, useContext } from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";
import { BsMoon, BsSun } from "react-icons/bs";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-hot-toast";
import { AiFillHeart } from "react-icons/ai";
import { AuthContext } from "../context/AuthContext"; // ✅ import AuthContext

const Navbar = () => {
  const dispatch = useDispatch();
  const [darkMode, setDarkMode] = useState(false);
  const { user } = useContext(AuthContext); // ✅ use context

  useEffect(() => {
    const isDark = localStorage.getItem("theme") === "dark";
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully");
    } catch (error) {
      toast.error("Logout failed");
    }
  };

  console.log("User from AuthContext:", user); // ✅ debug log

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-[#FC8019] dark:bg-gray-900 shadow-md px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
      {/* Left section */}
      <div className="flex flex-col md:flex-row items-center gap-4">
        <div>
          <h3 className="text-sm font-semibold text-white dark:text-gray-300">
            {new Date().toUTCString().slice(0, 16)}
          </h3>
          <h1 className="text-3xl font-extrabold text-white">RaSo Flavors 🍰</h1>
        </div>

        <Link
          to="/favorites"
          className="text-white dark:text-gray-300 hover:text-red-400 transition-all"
          title="Favorites"
        >
          <AiFillHeart className="text-2xl" />
        </Link>
        <Link
          to="/my-feedbacks"
          className="text-sm font-medium text-white dark:text-gray-300 hover:underline"
        >
          My Feedbacks
        </Link>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-4 w-full md:w-auto">
        <input
          type="search"
          placeholder="Search deliciousness..."
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="p-2 border border-orange-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-white w-full md:w-[25vw] outline-none focus:ring-2 focus:ring-white"
        />

        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-white/80 dark:bg-gray-700 hover:bg-white hover:text-orange-500 transition-all"
          title="Toggle dark mode"
        >
          {darkMode ? <BsSun className="text-xl" /> : <BsMoon className="text-xl" />}
        </button>

        {user && (
          <div className="flex items-center gap-2">
            <span className="text-white dark:text-gray-300 text-sm">{user.email}</span>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
