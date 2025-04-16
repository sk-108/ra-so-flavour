import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";
import CategorySlice from "./slices/CategorySlice";
import SearchSlice from "./slices/SearchSlice";
import FavoriteSlice from "./slices/FavoriteSlice";
import FeedbackSlice from "./slices/FeedbackSlice";


const loadFeedbackFromLocalStorage = () => {
  try {
    const serializedData = localStorage.getItem("feedback");
    return serializedData ? JSON.parse(serializedData) : {};
  } catch (e) {
    console.warn("Could not load feedback", e);
    return {};
  }
};


// Load cart from localStorage
const loadCartFromLocalStorage = () => {
  try {
    const serializedCart = localStorage.getItem("cart");
    return serializedCart ? JSON.parse(serializedCart) : [];
  } catch (e) {
    console.warn("Could not load cart", e);
    return [];
  }
};

// Load favorites from localStorage
const loadFavoritesFromLocalStorage = () => {
  try {
    const serializedFavs = localStorage.getItem("favorites");
    return serializedFavs ? JSON.parse(serializedFavs) : [];
  } catch (e) {
    console.warn("Could not load favorites", e);
    return [];
  }
};

const Store = configureStore({
  reducer: {
    cart: CartSlice,
    category: CategorySlice,
    search: SearchSlice,
    favorites: FavoriteSlice,
    feedback: FeedbackSlice,
  },
  preloadedState: {
    cart: {
      cart: loadCartFromLocalStorage(),
    },
    favorites: {
      favorites: loadFavoritesFromLocalStorage(),
    },
    feedback: {
      feedbackData: loadFeedbackFromLocalStorage(),
    },
  },
});

// Save to localStorage
Store.subscribe(() => {
  try {
    const state = Store.getState();
    localStorage.setItem("cart", JSON.stringify(state.cart.cart));
    localStorage.setItem("favorites", JSON.stringify(state.favorites.favorites));
    localStorage.setItem("feedback", JSON.stringify(state.feedback.feedbackData));
  } catch (e) {
    console.warn("Save failed", e);
  }
});

export default Store;
